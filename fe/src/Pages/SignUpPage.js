import React from "react";
import SignUp from "../Components/Auth/SignUp";

const SignUpPage = () => {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "50px",
        justifyContent: "center",
        alignItems: "top",
        height: "5vh",
      }}
    >
      <div className="container">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
