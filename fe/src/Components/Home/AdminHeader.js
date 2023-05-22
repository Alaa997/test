import React, { useState } from "react";
import login from "../../Images/login.png";
import cart from "../../Images/cart.png";
import { Nav } from "react-bootstrap";
import TokenManager from "../../APIs/TokenManager";

const AdminHeader = () => {
  const [claims, setClaims] = useState(TokenManager.getClaims());

  const handleLogout = () => {
    TokenManager.clear();
  };

  return (
    <>
      <Nav className="mx-auto">
        {claims ? (
          <Nav.Link
            onClick={handleLogout}
            href="/"
            className="nav-text d-flex mt-3 justify-content-end"
            style={{ color: "white" }}
          >
            <img src={cart} className="login-img" alt="sfvs" />
            <p style={{ color: "white" }}> Logout</p>
          </Nav.Link>
        ) : (
          <Nav.Link
            href="/login"
            className="nav-text d-flex mt-3 justify-content-end"
          >
            <img src={login} className="login-img" alt="sfvs" />
            <p style={{ color: "white" }}> Admin</p>
          </Nav.Link>
        )}
        {/* <Nav.Link
          href="/login"
          className="nav-text d-flex mt-3 justify-content-end"
        >
          <img src={login} className="login-img" alt="sfvs" />
          <p style={{ color: "white" }}> Admin</p>
        </Nav.Link> 
         <Nav.Link
          href="/cart"
          className="nav-text d-flex mt-3 justify-content-end"
          style={{ color: "white" }}
        >
          <img src={cart} className="login-img" alt="sfvs" />
          <p style={{ color: "white" }}> Logout</p>
        </Nav.Link> */}
      </Nav>
    </>
  );
};

export default AdminHeader;
