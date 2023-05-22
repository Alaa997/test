import { useEffect, useState } from "react";
import CategoryAPI from "../APIs/CategoryAPI";
import { Col, Container, Row } from "react-bootstrap";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddCategoryForm = () => {
  const [loading, setLoading] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const [name, setName] = useState("");

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (name === "") {
      console.log("Please, complete the required data!");
      return;
    }
    setLoading(true);
    setIsPress(true);

    try {
      const res = await CategoryAPI.create({ name: name });
      console.log(res);
      if (res.status === 201) {
        console.log("Successfully done!");
      } else {
        console.log("Something went wrong!");
      }
    } catch (error) {
      console.error(error);
      console.log("Something went wrong!");
    } finally {
      setLoading(false);
      setTimeout(() => setIsPress(false), 2000);
    }
  };

  useEffect(() => {
    if (!loading) {
      setName("");
      console.log("Done!");
    }
  }, [loading]);

  return (
    <Container>
      <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Add new category</div>
        <Col sm="8">
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            className="input-form d-block mt-3 px-3"
            placeholder="Category name"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="8" className="d-flex justify-content-end ">
          <button
            type="submit"
            onClick={handelSubmit}
            className="btn-save d-inline mt-2 "
          >
            Save
          </button>
        </Col>
      </Row>

      {isPress && <FontAwesomeIcon icon={faCheck} color="green" size="2x" />}
    </Container>
  );
};

export default AddCategoryForm;
