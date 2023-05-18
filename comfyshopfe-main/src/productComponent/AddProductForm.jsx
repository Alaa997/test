import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CategoryAPI from "../APIs/CategoryAPI";
import ProductAPI from "../APIs/ProductAPI";

const AddProductForm = () => {
  const [categories, setCategories] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    unit: "",
    category: "",
  });

  const getAllCategories = async () => {
    const allCategories = await CategoryAPI.getCategories();
    allCategories && setCategories(allCategories);
  };
  useEffect(() => {
    getAllCategories();
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSelectedCategory = (e) => {
    console.log(e.target.value);
    const { id, name } = JSON.parse(e.target.value);
    setSelectedCategory({ id, name });
  };

  const saveProduct = async () => {
    try {
      const res = await ProductAPI.add({
        ...product,
        category: selectedCategory,
      });
      console.log(res);
      if (res.status === 201) {
        console.log("Successfully done!");
        alert("Product saved successfully"); // add alert message for success case
      } else {
        console.log("Something went wrong!");
        alert("Error saving product"); // add alert message for error case
      }
    } catch (error) {
      console.error(error);
      console.log("Something went wrong!");
      alert("Error saving product"); // add alert message for error case
    }
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header bg-color custom-bg-text text-center">
            <h5 className="card-title">Add Product</h5>
          </div>
          <div className="card-body text-color">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <b>Product Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  onChange={handleInput}
                  value={product.name}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  <b>Product Description</b>
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows="3"
                  onChange={handleInput}
                  value={product.description}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <b>Category</b>
                </label>

                <select
                  name="category"
                  onChange={handleSelectedCategory}
                  className="form-control"
                >
                  <option value="">Select Category</option>

                  {categories.map((category) => (
                    <option key={category.id} value={JSON.stringify(category)}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* <div className="mb-3 mt-1">
                <label htmlFor="quantity" className="form-label">
                  <b>Product Unit</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="unit"
                  name="unit"
                  onChange={handleInput}
                  value={product.unit}
                />
              </div> */}

              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  <b>Product Price</b>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  onChange={handleInput}
                  value={product.price}
                />
              </div>

              {/* <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  <b> Select Product Image</b>
                </label>
                <input
                  className="form-control"
                  type="file"
                  id="formFile"
                  name="photo"
                  value={product.photo}
                  onChange={(e) => setSelectedPhoto(e.target.files[0])}
                />
              </div> */}

              <button
                type="submit"
                className="btn bg-color custom-bg-text"
                onClick={saveProduct}
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
