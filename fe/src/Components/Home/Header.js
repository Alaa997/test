import React, { useState } from "react";
import logo from "../../Images/logo.png";
import { Container, FormControl, Navbar } from "react-bootstrap";
import RoleNav from "./RoleNav";
import TokenManager from "../../APIs/TokenManager";
import { useEffect } from "react";
import NormalHeader from "./NormalHeader";
import AdminHeader from "./AdminHeader";
import UserHeader from "./UserHeader";

const Header = () => {
  const [claims, setClaims] = useState(TokenManager.getClaims());
  const roleType = claims?.roles[0];

  const handleLogout = () => {
    TokenManager.clear();
    setClaims(null);
  };

  useEffect(() => {
    // setClaims(TokenManager.getClaims());
    // window.location.reload(); // Force a page refresh
  }, [claims]);

  console.log(claims?.roles[0]);

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
              className="me-2 w-75"
              aria-label="Search"
            />
            {/* <NormalHeader/> */}
            {claims ? (claims?.roles?.includes("ADMIN")? <AdminHeader/>: <UserHeader/>) : <NormalHeader />}
            {/* <RoleNav role={roleType} onLogout={handleLogout} /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
