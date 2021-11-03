import React from "react";
import { Form, Button, FloatingLabel } from "react-bootstrap";

const LoginForm = () => {
  return (
    <Form className="p-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <FloatingLabel controlId="floatingInputGrid" label="Email address">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <FloatingLabel controlId="floatingInputGrid" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
      </Form.Group>
      <div className="float-end">
        <Button variant="primary" type="submit">
          Login
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
