import React from "react";
import { HeaderAdmin } from "../components/index";
import { Table } from "react-bootstrap";

const storageItems = JSON.parse(localStorage.getItem("recap"));

const totalIncome = storageItems.reduce(function (total, item) {
  return total + item.total;
}, 0);

const AdminRecap = () => {
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
            {storageItems.map((item) => (
              <>
                <tr>
                  <td className="col-lg-5">{item.title}</td>
                  <td className="col-lg-2">{item.category}</td>
                  <td className="col-lg-2">{item.price}</td>
                  <td className="col-lg-1">{item.quantity}</td>
                  <td className="col-lg-2">{item.total}</td>
                </tr>
              </>
            ))}
            <tr className="fw-bold">
              <td colSpan="4">Total Income</td>
              <td>{totalIncome}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default AdminRecap;
