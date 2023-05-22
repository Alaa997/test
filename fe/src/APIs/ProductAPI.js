import axios from "axios";

const productAPI = "http://localhost:8081/products";

class ProductAPI {
  async getProducts(categoryId = null) {
    const url =
      categoryId !== null
        ? `${productAPI}?categoryId=${categoryId}`
        : productAPI;
    const response = await axios.get(url);
    return response.data;
  }

  async add(product) {
    const res = await axios.post(productAPI, product);
    return res.data;
  }

  async delete(id) {
    try {
      const response = await axios.delete(`${productAPI}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ProductAPI();
