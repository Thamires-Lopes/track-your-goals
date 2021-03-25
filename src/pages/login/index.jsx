import React from 'react';
import { Form, Button } from 'react-bootstrap';

const LoginPage = () => (
  <Form className="m-4">
    <Form.Group>
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We will never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
);

export default LoginPage;
