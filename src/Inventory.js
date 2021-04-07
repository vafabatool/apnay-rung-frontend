import "./styles.css";
import { useState } from "react";
import SellerNavbar from "./SellerNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const Inventory = () => {
  const [state, setState] = useState([
    {
      image: "",
      title: "",
      price: 0,
      quantityInStock: 0
    }
  ]);

  async function getData(url) {
    const response = await fetch(url, {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwibmFtZSI6IlZhZmEgQmF0b29sIiwidHlwZU9mVXNlciI6InNlbGxlciIsImlhdCI6MTYxNjg0NDE3N30.xYaUcX7dmdqY5co2tMbVA_9jh0M1fVBB-AX0Aam5G7Y",
        "Content-Type": "application/json"
      }
    });

    return response.json();
  }

  getData("https://apnay-rung-api.herokuapp.com/inventory/all").then(
    (response) => {
      console.log(response);
      // const testing = response;
      setState(response);
    }
  );

  const [show, setShow] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState();

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setDeleteIndex(index);
    setShow(true);
  };

  const deleteRow = () => {
    console.log(`Here`);
    let copyofState = state.slice();
    copyofState.splice(deleteIndex, 1);
    setState(copyofState);
    handleClose();
  };

  const renderTableData = () => {
    return state.map((product, index) => {
      const { image, title, stock, price, quantityInStock } = product; //destructuring
      return (
        <tr className="data">
          <td>
            <img src={image[0]} alt="Italian Trulli" id="image" />
          </td>
          <td>{title}</td>
          <td>{price}</td>
          <td>{stock}</td>
          <td>
            <a href="#delete" className="link">
              View
            </a>
            |
            <a href="#delete" className="link">
              Update
            </a>
            |
            <a
              href="#delete"
              className="link"
              onClick={() => handleShow(index)}
            >
              Delete
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <SellerNavbar />
      {/* <Memory panel="" page="" current=" Inventory" />{" "} */}
      <Memory panel="Seller Panel" page="" current="View All Customers" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Inventory </h1>
      <div className="table-responsive">
        <table className="table table-size">
          <thead>
            <tr className="top-row">
              <th>Product</th>
              <th>Title</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <BottomBar />
      <Modal show={show} onHide={handleClose} className="delete-modal">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="delete-secondary"
          >
            Don't Delete
          </Button>
          <Button
            variant="primary"
            onClick={() => deleteRow}
            className="delete-primary"
          >
            Delete Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Inventory;
