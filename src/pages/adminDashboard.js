import React from "react";
import { Table, Image, Form, Button } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <div class="d-flex justify-content-center p-5">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="mb-3">
            <td>
              <Image src="holder.js/171x180" rounded />
            </td>
            <td>
              <Form.Group
                className="mx-auto"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
            </td>
            <td>
              <Form.Group
                className="col-md-2 mx-auto"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control as="textarea" rows={2} />
              </Form.Group>
            </td>
            <td>
              <Button type="update">Update</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default AdminDashboard;
