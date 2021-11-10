import React, { useEffect } from "react";
import { HeaderAdmin } from "../components/index";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const AdminRecap = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (JSON.parse(!localStorage.getItem("recap"))) {
      localStorage.setItem("recap", JSON.stringify([]));
      dispatch({
        type: "SET_RECAP",
        payload: JSON.parse(localStorage.getItem("recap"))
      })
    } else {
      dispatch({
        type: "SET_RECAP",
        payload: JSON.parse(localStorage.getItem("recap"))
      })
    }
  }, [])
  return (
    <>
      <HeaderAdmin />
      <div className="d-flex justify-content-center p-5">
        <Table striped bordered hover variant="light" className="text-center">
          <thead>
            <tr>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {state.recap.map((item) => (
              <>
                <tr>
                  <td className="col-lg-5 text-start">{item.title}</td>
                  <td className="col-lg-2">{item.category}</td>
                  <td className="col-lg-2">${item.price}</td>
                  <td className="col-lg-1">{item.quantity}</td>
                  <td className="col-lg-2">${item.total}</td>
                </tr>
              </>
            ))}
            <tr className="fw-bold">
              <td colSpan="4">Total Income</td>
              <td>${state.recap.reduce((total, item) => total + item.total, 0)}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default AdminRecap;
