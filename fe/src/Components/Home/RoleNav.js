import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import UserHeader from "./UserHeader";
import NormalHeader from "./NormalHeader";
import TokenManager from "../../APIs/TokenManager";
import UserAPI from "../../APIs/UserAPI";
import { useEffect } from "react";

const RoleNav = ({ role, handleLogout }) => {
  // const [claims, setClaims] = useState(TokenManager.getClaims());
  // const role = claims?.roles[0];
  // console.log(claims?.roles[0]);
  // const [currentUser, setCurrentUser] = useState(null);

  // const getCurrentUser = () => {
  //    const claims = TokenManager.getClaims();
  //   if (claims?.roles?.includes("ADMIN") && claims?.userId) {
  //     UserAPI.getUser(claims.userId)
  //       .then((user) => setCurrentUser(user))
  //       .catch((error) => console.error(error));
  //   }
  // };

  // const handleLogout = () => {
  //   TokenManager.clear();
  //   setClaims(null);
  //   // setCurrentUser(null);
  // };

  if (role === "ADMIN") {
    return <AdminHeader onLogout={handleLogout} />;
  } else if (role === "CUSTOMER") {
    return <UserHeader onLogout={handleLogout} />;
  } else {
    return <NormalHeader />;
  }
};

export default RoleNav;
