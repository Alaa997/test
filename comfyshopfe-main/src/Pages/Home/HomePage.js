import React, { useEffect, useState } from "react";
import Slider from "../../Components/Home/Slider";
import ProductAPI from "../../APIs/ProductAPI";
import ProductList from "../../Components/Products/ProductList";
import CategoryPage from "./CategoryPage";
import { Container } from "react-bootstrap";
import ProductCard from "../../Components/Products/ProductCard";
import GetAllCategories from "../../productComponent/GetAllCategories";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const filterProducts = async (categoryId) => {
    const allProducts = await ProductAPI.getProducts(categoryId);
    if (allProducts) {
      setProducts(allProducts);
    }
  };

  useEffect(() => {
    filterProducts();
  }, []);

  return (
    <>
      <div className="font" style={{ minHeight: "670px" }}>
        <Slider />
        <div
          style={{
            display: "flex",
            height: "100vh",
            overflow: "scroll initial",
          }}
        >
          <div
            style={{
              flex: 1,
              maxWidth: "25%",
            }}
          >
            <GetAllCategories filterProducts={filterProducts} />
          </div>
          <div
            style={{
              flex: 3,
              maxWidth: "75%",
            }}
          >
            {/* <ProductList products={products} /> */}
            <div className="col-md-10">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                {products.map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
