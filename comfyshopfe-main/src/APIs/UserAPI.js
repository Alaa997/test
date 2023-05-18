import axios from "axios";
import TokenManager from "./TokenManager";

const userAPI = "http://localhost:8081/";

class UserAPI {
  // async register(user) {
  //   const response = await axios.post(userAPI + "user/sign-up", user);
  //   return response.data;
  // }

  async getUser(userId) {
    axios
      .get(`http://localhost:8080/students/${userId}`, {
        headers: { Authorization: `Bearer ${TokenManager.getAccessToken()}` },
      })
      .then((response) => response.data);
  }
}
export default new UserAPI();
