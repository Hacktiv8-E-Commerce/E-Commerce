import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Stack, Button } from "react-bootstrap";
import { Header, Itemcart } from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import { fetchcart } from "../store/fetchcart";

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcart(state.product));
  }, []);

  const getItemCart = (productId) => {
    let items = state.product.filter((item) => item.id === productId);
    return items[0];
  };

  return (
    <>
      <Header />
      {state.cart.length !== 0 ? (
        <Container style={{ minWidth: "768px" }}>
          <Row className="">
            <Col lg={12} style={{ fontSize: "2vmax", fontWeight: "600" }}>
              Shopping Cart
            </Col>
          </Row>
          <Row className="justify-content-center p-4">
            <Col xs={12} md={12} lg={6}>
              <Stack>
                {state.cart.map((item) => (
                  <Itemcart
                    key={item.productId}
                    product={getItemCart(item.productId)}
                    quantity={item.quantity}
                  />
                ))}
              </Stack>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <Stack className="border border-primary border-start-0 border-bottom-0 p-3">
                <Stack
                  direction="horizontal"
                  className="justify-content-between pt-2"
                >
                  <p className="h6" style={{ fontWeight: "600" }}>
                    Subtotal
                  </p>
                  <p className="h6" style={{ fontWeight: "600" }}>
                    ${state.total}
                  </p>
                </Stack>
                <Stack gap={4}>
                  <p>Shipping and taxes calculated at checkout</p>
                  <Button
                    variant="primary"
                    className="w-100"
                    style={{ background: "#4F46E5" }}
                  >
                    Checkout
                  </Button>{" "}
                  <Stack className="align-items-center">
                    <span>
                      or{" "}
                      <Link
                        to={`/`}
                        style={{ color: "#4F46E5" }}
                        className="text-decoration-none"
                      >
                        Countinue Shopping -&gt;{" "}
                      </Link>
                    </span>
                  </Stack>
                </Stack>
              </Stack>
            </Col>
          </Row>
        </Container>
      ) : (
        <Stack className="justify-content-center" direction="horizontal">
          Keranjang Anda Kosong
        </Stack>
      )}
    </>
  );
}

export default Cart;
