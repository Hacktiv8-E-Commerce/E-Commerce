import React, { useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Col, Container, Row, Stack, Button } from "react-bootstrap";
import { Header, Itemcart } from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import { fetchcart } from "../store/fetchcart";
import { fetchProduct } from "../store/fetch";
import { updatestock } from "../store/updatestock"
import Swal from 'sweetalert2'

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let history = useHistory()

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('login'))) {
      dispatch({
        type: "SET_LOAD",
        payload: true
      })
      dispatch(fetchProduct(fetchCart))
    }
  }, [])

  const getItemCart = (productId) => {
    let items = state.product.filter((item) => item.id === productId);
    return items[0];
  };

  const fetchCart = (data) => {
    dispatch(fetchcart(data))
    dispatch({
      type: "SET_LOAD",
      payload: false
    })
  }

  const checkout = () => {
    let item = JSON.parse(localStorage.getItem('recap'))
    for (let data of state.cart) {
      let item_stock = state.stock.filter(x => x.id === data.productId)
      let stock = state.stock.filter(item => item.id === data.productId)
      if (stock[0].stock - data.quantity >= 0) {
        let filter = item.filter(x => x.id === data.productId)
        let fproduct = state.product.filter(x => x.id === data.productId)
        if (filter.length === 1) {
          let index = item.findIndex(x => x.id === data.productId)
          item.splice(index, 1, {
            id: data.productId,
            title: filter[0].title,
            category: filter[0].category,
            price: filter[0].price,
            quantity: filter[0].quantity + data.quantity,
            total: filter[0].total + filter[0].price * data.quantity
          })
        } else {
          item.push({
            id: data.productId,
            title: fproduct[0].title,
            category: fproduct[0].category,
            price: fproduct[0].price,
            quantity: data.quantity,
            total: fproduct[0].price * data.quantity
          })
        }
        dispatch(updatestock('minstock', state.stock, item_stock[0], () => state.product.findIndex(x => x.id === data.productId), data.quantity))
      }
    }

    let othercart = JSON.parse(localStorage.getItem('cart')).filter(product => product.userId !== JSON.parse(localStorage.getItem('login')).id)
    localStorage.setItem('cart', JSON.stringify(othercart));
    localStorage.setItem('recap', JSON.stringify(item));

    Swal.fire({
      icon: 'success',
      title: 'product checked out successfully',
      showConfirmButton: false,
      timer: 1500
    })

    setTimeout(() => {
      dispatch({
        type: "SET_CART",
        payload: []
      })
      history.push(`/`)
    }, 1700)
  }

  return (
    <>
      <Header />
      {
        JSON.parse(localStorage.getItem('login')) ? (
          !state.loading ? (
            state.cart.length !== 0 ? (
              <Container style={{ minWidth: '768px' }}>
                <Row className="">
                  <Col lg={12} style={{ fontSize: '2vmax', fontWeight: '600' }}>Shopping Cart</Col>
                </Row>
                <Row className="justify-content-center p-4">
                  <Col xs={12} md={12} lg={6}>
                    <Stack>
                      {
                        state.cart.map(item => (
                          <Itemcart key={item.productId} product={getItemCart(item.productId)} quantity={item.quantity} />
                        ))
                      }
                    </Stack>
                  </Col>
                  <Col xs={12} md={12} lg={4}>
                    <Stack className="border border-primary border-start-0 border-bottom-0 p-3">
                      <Stack direction="horizontal" className="justify-content-between pt-2">
                        <p className="h6" style={{ fontWeight: '600' }}>Subtotal</p>
                        <p className="h6" style={{ fontWeight: '600' }}>${state.total}</p>
                      </Stack>
                      <Stack gap={4}>
                        <p>Shipping and taxes calculated at checkout</p>
                        <Button variant="primary" className="w-100" style={{ background: '#4F46E5' }} onClick={() => checkout()}>Checkout</Button>{' '}
                        <Stack className="align-items-center">
                          <span>or <Link to={`/`} style={{ color: '#4F46E5' }} className="text-decoration-none">Countinue Shopping -&gt; </Link></span>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Col>
                </Row>
              </Container>
            ) :
              (
                <Stack className="justify-content-center align-items-center" gap={3}>
                  <img src="assets/empty-cart.svg" alt="" width="80" />
                  <p style={{ color: '#7B7B7B' }}>Keranjang Anda Kosong</p>
                </Stack>
              )
          ) :
            (
              ''
            )
        )
          :
          (
            <Redirect to="/login" />
          )
      }
    </>
  )
}

export default Cart;