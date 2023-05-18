import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <Container>
      {/* <SubTitle title={title} btntitle={btntitle} pathText={pathText} /> */}
      <Row className="my-2 d-flex justify-content-between">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
