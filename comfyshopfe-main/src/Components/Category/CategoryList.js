import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import clothe from "../../Images/clothe.png";
import cat2 from "../../Images/cat2.png";
import labtop from "../../Images/labtop.png";
import sale from "../../Images/sale.png";
import pic from "../../Images/pic.png";
import CategoryAPI from "../../APIs/CategoryAPI";
import CartegoryCard from "./CategoryCard";

const CategoryList = (props) => {
  return (
    <Container>
      <div className="admin-content-text">All categories</div>
      <Row className="my-2 d-flex justify-content-between">
        {props.categories.map((category) => (
          <CartegoryCard
            key={category.id}
            category={category}
            onCardDeleted={props.onCategoryDeleted}
          />
        ))}
      </Row>
    </Container>
  );
};

export default CategoryList;
