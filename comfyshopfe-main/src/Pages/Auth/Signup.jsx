import React, { useRef, useState } from "react";
import { isEmail } from "validator";
import { store } from "react-notifications-component";
import UserAPI from "../../APIs/UserAPI";

const notification = {
  title: "Oops!",
  message: "An error occurred",
  type: "danger",
  insert: "top",
  container: "top-center",
  animationIn: ["animate__animated animate__fadeIn"],
  animationOut: ["animate__animated animate__fadeOut"],
  dismiss: {
    duration: 1000,
  },
};

const notificationSuccessful = {
  ...notification,
  title: "Successful!",
  message: "You have registered successfully!",
  type: "success",
};

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
  });
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState(null);

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const validate = () => {
    const { firstName, lastName, email, password, address } = user;

    if (!firstName || !lastName || !email || !password || !address) {
      store.addNotification(notification);
      setMessage("Please fill in all the required fields.");
      setSuccessful(false);
      return false;
    }

    return true;
  };
  const handleRegister = (event) => {
    event.preventDefault();

    setMessage("");
    setSuccessful(false);

    if (validate()) {
      UserAPI.register(user).then(
        (response) => {
          store.addNotification(notificationSuccessful);
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          store.addNotification(notification);
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <div className="card">
            <div className="card-header">
              <h4 className="text-center">Register</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleRegister}>
                {!successful && (
                  <div>
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        value={user.firstName}
                        onChange={handleUserInput}
                      />
                      {required(user.firstName)}
                    </div>

                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        value={user.lastName}
                        onChange={handleUserInput}
                      />
                      {required(user.lastName)}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={user.email}
                        onChange={handleUserInput}
                      />
                      {required(user.email)}
                      {email(user.email)}
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={user.password}
                        onChange={handleUserInput}
                      />
                      {required(user.password)}
                      {vpassword(user.password)}
                    </div>

                    <div className="form-group">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={user.address}
                        onChange={handleUserInput}
                      />
                      {required(user.address)}
                    </div>

                    <div className="form-group">
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                )}

                {message && (
                  <div className="form-group">
                    <div
                      className={
                        successful
                          ? "alert alert-success"
                          : "alert alert-danger"
                      }
                      role="alert"
                    >
                      {message}
                    </div>
                  </div>
                )}
                {!message && successful && (
                  <div className="form-group">
                    <div className="alert alert-success" role="alert">
                      You have registered successfully!
                    </div>
                  </div>
                )}
                {!message && !successful && (
                  <div className="form-group">
                    <div className="alert alert-info" role="alert">
                      Please fill all fields to register.
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
