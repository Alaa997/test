import axios from "axios";
import TokenManager from "./TokenManager";

const API_URL = "http://localhost:8081/user";
class AuthAPI {
  // login(loginRequest) {
  //   axios({
  //     method: "post",
  //     url: API_URL + "/login",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     data: loginRequest,
  //   })
  //     .then((response) => response.data.accessToken)
  //     .then((accessToken) => TokenManager.setAccessToken(accessToken));
  // }
  getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  // logout() {
  //   localStorage.removeItem("claims");
  //   localStorage.removeItem("claims");
  // }

  async register(user) {
    const response = await axios.post(API_URL + "/sign-up", user);
    console.log("Response:", response);
    // Process the response or return it if needed
    return response;
    //return axios.post(API_URL + "/sign-up", user);
  }
}
export default new AuthAPI();

export const login = (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  console.log(data);
  axios
    .post("http://localhost:8081/user/login", data, headers)
    .then((response) => response.data.accessToken)
    .then((accessToken) => TokenManager.setAccessToken(accessToken))
    .catch((error) => console.log(error));
};

// export const register = async (user) => {
//   const response = await axios.post(API_URL + "/sign-up", user);
//   console.log("Response:", response);
//   return response;
// };
