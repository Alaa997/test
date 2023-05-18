import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import AuthAPI from "../../APIs/AuthAPI";

function SignUp() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: ""
  });
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = async (e) => {
    e.preventDefault();

    AuthAPI.register(user);
  };

  return (
    <div className="my-background">
      <Container>
        <Form onSubmit={saveUser}>
          <h1>Registration From</h1>
          <hr />
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={user.firstName}
              placeholder="Enter your first name..."
              onChange={(e) => handleChange(e)}
              validations={[required]}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={user.lastName}
              placeholder="Enter your last name..."
              onChange={(e) => handleChange(e)}
              validations={[required]}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={user.email}
              placeholder="Enter your email address"
              onChange={(e) => handleChange(e)}
              validations={[required]}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={user.password}
              placeholder="Enter your password"
              onChange={(e) => handleChange(e)}
              validations={[required]}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="address"
              name="address"
              value={user.address}
              placeholder="Enter your address"
              onChange={(e) => handleChange(e)}
              validations={[required]}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default SignUp;
