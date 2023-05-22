import React from 'react'
import { Nav } from 'react-bootstrap';
import login from "../../Images/login.png";
import cart from "../../Images/cart.png";
import TokenManager from '../../APIs/TokenManager';

const UserHeader = () => {
  const handleLogout = () => {
    TokenManager.clear();
  };
  return (
    <>
      <Nav className="mx-auto">
        <Nav.Link
          href="/cart"
          className="nav-text d-flex mt-3 justify-content-end"
          style={{ color: "white" }}
        >
          <img src={cart} className="login-img" alt="sfvs" />
          <p style={{ color: "white" }}> Cart</p>
        </Nav.Link>
        <Nav.Link
          href="/login"
          className="nav-text d-flex mt-3 justify-content-end"
          onClick={handleLogout}
        >
          <img src={login} className="login-img" alt="sfvs" />
          <p style={{ color: "white" }}> Logout</p>
        </Nav.Link>
      </Nav>
    </>
  );
}

export default UserHeader
