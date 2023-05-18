import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthAPI from "../../APIs/AuthAPI";
import TokenManager from "../../APIs/TokenManager";
import UserAPI from "../../APIs/UserAPI";

const UserLoginForm = () => {
  let navigate = useNavigate();
  const [claims, setClaims] = useState(TokenManager.getClaims());
  const [userDetails, setUserDetails] = useState(null);
  const [loginRequest, setLoginRequest] = useState({
    email: "",
    password: "",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };
  const getUserDetails = () => {
    const claims = TokenManager.getClaims();
    if (claims?.roles?.includes("STUDENT") && claims?.studentId) {
      UserAPI.getUser(claims.studentId)
        .then((student) => setUserDetails(student))
        .catch((error) => console.error(error));
    }
  };
  const handleLogin = (e) => {
    AuthAPI.login(loginRequest)
      .catch(() => alert("Login failed!"))
      .then((claims) => setClaims(claims))
      .then(getUserDetails)
      .catch((error) => console.log(error));

    toast.success("logged in successfully!!!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    navigate("/home");
    window.location.reload(true);
    e.preventDefault();
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title">User Login</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3 text-color">
                <label htmlFor="email" className="form-label">
                  <b>Email</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  onChange={handleUserInput}
                  value={loginRequest.email}
                />
              </div>
              <div className="mb-3 text-color">
                <label htmlFor="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                />
              </div>
              <button
                type="submit"
                className="btn bg-color custom-bg-text"
                onClick={handleLogin}
              >
                Login
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
