import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import pic from "../../Images/pic.png";
import rate from "../../Images/rate.png";
import favoff from "../../Images/fav-off.png";

const ProductCard = ({ product }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">
      <Link
        to="/products/:id"
        style={{
          textDecoration: "none",
        }}
      >
        <Card
          className="my-2"
          style={{
            width: "100%",
            height: "345px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
          }}
        >
          <Card.Img style={{ height: "228px", width: "100%" }} src={pic} />
          <div className="d-flex justify-content-end mx-2">
            <img
              src={favoff}
              alt=""
              className="text-center"
              style={{
                height: "24px",
                width: "26px",
              }}
            />
          </div>
          <Card.Body>
            <Card.Title>
              <div className="card-title">{product.name} </div>
            </Card.Title>
            <Card.Text>
              <span className="d-flex justify-content-between ">
                <span className="d-flex">
                  <img
                    className=""
                    src={rate}
                    alt=""
                    height="16px"
                    width="16px"
                  />
                </span>
                <span className="d-flex">
                  <span className="card-price">{product.price}</span>
                  <span className="card-currency mx-1">{product.unit}</span>
                </span>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default ProductCard;
