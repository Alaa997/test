import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Login = (props) => {
  const [loginRequest, setLoginRequest] = useState({ email: "", password: "" });

const handleChange = (event) => {
  const { name, value } = event.target;
  setLoginRequest({ ...loginRequest, [name]: value });
};

  const handleLogin = (event) => {
    event.preventDefault();
    props.onLogin(loginRequest);
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <h1>Login Form</h1>
        <hr />
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            value={loginRequest.email}
            placeholder="Enter your email..."
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={loginRequest.password}
            placeholder="Enter your password..."
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
