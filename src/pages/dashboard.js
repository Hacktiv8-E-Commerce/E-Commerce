import React, { useEffect } from "react";
import { Header, Promo, Items, Footer } from "../components/index";
import { Stack } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../store/fetch'

function Dashboard() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "SET_LOAD",
      payload: true
    })
    dispatch(fetchProduct(fetchCart))
  }, [])

  const fetchCart = (data) => {
    dispatch({
      type: "SET_LOAD",
      payload: false
    })
  }
  return (
    <>
      <Header />
      {
        !state.loading ? (
          <>
            <Stack gap={4}>
              <Promo />
              <Items />
            </Stack>
            < Footer />
          </>
        ) :
          ''
      }
    </>
  );
}

export default Dashboard;
