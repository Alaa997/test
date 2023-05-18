import axios from "axios";
import TokenManager from "./TokenManager";

const API_URL = "http://localhost:8081/user";
class AuthAPI {
  login(loginRequest) {
    axios({
      method: "post",
      url: API_URL + "/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: loginRequest,
    })
      .then((response) => response.data.accessToken)
      .then((accessToken) => TokenManager.setAccessToken(accessToken));
  }
  getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };
  
  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios.post(API_URL + "/sign-up", user);
  }

  // getCurrentUser = () => {
  //   return JSON.parse(localStorage.getItem("user"));
  // };

  // logout() {
  //   localStorage.removeItem("user");
  // }
}

export default new AuthAPI();
