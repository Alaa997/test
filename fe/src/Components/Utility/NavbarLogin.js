import React from "react";
import logo from "../../Images/logo.png";
import login from "../../Images/login.png";
import cart from "../../Images/cart.png";
import { Navbar, Nav, Container, FormControl } from "react-bootstrap";

const NavbarLogin = () => {
  return (
    <>
      <Navbar
        className="sticky-top"
        bg="dark"
        variant="dark"
        expand="sm"
        // style={{ backgroundColor: "#856088" }}
      >
        <Container>
          <Navbar.Brand>
            <a href="/">
              <img src={logo} className="logo" alt="sfvs" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
              type="search"
              placeholder="Search..."
              className="me-2 w-100"
              aria-label="Search"
            />
            <Nav className="me-auto">
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <img src={login} className="login-img" alt="sfvs" />

                <p style={{ color: "white" }}>Login</p>
              </Nav.Link>
              <Nav.Link
                href="/cart"
                className="nav-text d-flex mt-3 justify-content-center"
                style={{ color: "white" }}
              >
                <img src={cart} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>Cart</p>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarLogin;
