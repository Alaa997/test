import React from "react";
import { Col } from "react-bootstrap";
import { AiFillCloseSquare, AiFillEdit } from "react-icons/ai";
import CategoryAPI from "../../APIs/CategoryAPI";
import labtop from "../../Images/labtop.png";

const CartegoryCard = (props) => {
  // Get the history object from React Router

  const randomLightColor = () =>
    `hsl(${Math.floor(Math.random() * 360)}, ${
      Math.floor(Math.random() * 20) + 80
    }%, ${Math.floor(Math.random() * 20) + 10}%)`;

  const handleDeleteCategory = async (event, id) => {
    event.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this category?"
    );
    if (confirmDelete) {
      try {
        const response = await CategoryAPI.delete(id);
        props.onCardDeleted();
        console.log(response);
      } catch (error) {
        console.error(error);
      }
      console.log(id);
    }
  };
  const handleUpdateCategory = (category) => {
    // Get the history object from React Router
    // const history = useHistory();
    // Push a new URL onto the history stack
    // history.push(`/categories/${categoryId}/edit`);
  };
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4 d-flex justify-content-around"
    >
      <div className="allCard mb-3 ">
        <div
          className="category-card "
          style={{ backgroundColor: `${randomLightColor()}` }}
        ></div>{" "}
        <img alt="zcv" src={labtop} className="category-card-img" />
        <p className="category-card-text my-2">{props.category.name}</p>
        {/* <div>
          <AiFillCloseSquare
            onClick={(event) => handleDeleteCategory(event, props.category.id)}
            size={24}
            color="red"
            className="delete-icon"
          />
        </div>{" "} */}
        <button
          onClick={(event) => handleDeleteCategory(event, props.category.id)}
        >
          <AiFillCloseSquare
            onClick={() => handleUpdateCategory(props.category)}
          />
        </button>
        <button>
          <AiFillEdit />
        </button>
      </div>
    </Col>
  );
};

export default CartegoryCard;
