import axios from "axios";

const categoryAPI = "http://localhost:8081/categories";

class CategoryAPI {
  async getCategories() {
    const response = await axios.get(categoryAPI);
    return response.data;
  }

  async create(category) {
    const response = await axios.post(categoryAPI, category);
    return response.data;
  }

  async delete(id) {
    const response = await axios.delete(`${categoryAPI}/${id}`);
    return response.data;
  }
}
export default new CategoryAPI();
