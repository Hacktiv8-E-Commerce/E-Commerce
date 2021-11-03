import React from "react";
import { Table } from "react-bootstrap";

const AdminRecap = () => {
  return (
    <div class="d-flex justify-content-center p-5">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Sold</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>product1</td>
            <td>$10</td>
            <td>12</td>
            <td>$120</td>
          </tr>
          <tr>
            <td>product2</td>
            <td>$10</td>
            <td>12</td>
            <td>$120</td>
          </tr>
          <tr>
            <td>product3</td>
            <td>$10</td>
            <td>12</td>
            <td>$120</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default AdminRecap;
