import React from "react";
import { HeaderAdmin } from "../components/index";
import { Table } from "react-bootstrap";

const storageItems = JSON.parse(localStorage.getItem("recap"));

const AdminRecap = () => {
  return (
    <>
      <HeaderAdmin />
      <div className="d-flex justify-content-center p-5">
        <Table striped bordered hover variant="light">
          <thead className="p-5">
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
              <tr>
                <td className="col-lg-5">{item.title}</td>
                <td className="col-lg-3">{item.category}</td>
                <td className="col-lg-2">{item.price}</td>
                <td className="col-lg-1">{item.quantity}</td>
                <td className="col-lg-2">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};
export default AdminRecap;
