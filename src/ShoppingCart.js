import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
// import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const Counter = (props) => {
  const increment = () => {
    props.qtyFunc(props.qty + 1);
  };
  const decrement = () => {
    props.qtyFunc(props.qty - 1);
  };

  return (
    <div class="quantity-box">
      <p id="qty">{props.qty}</p>
      <div class="increment-button">
        <button class="increment-button" onClick={increment}>
          {" "}
          <KeyboardArrowUpIcon
            style={{
              fontSize: "small"
            }}
          />{" "}
        </button>
        <button class="increment-button" onClick={decrement}>
          {" "}
          <KeyboardArrowDownIcon
            style={{
              fontSize: "small"
            }}
          />{" "}
        </button>
      </div>
    </div>
  );
};

const ShoppingCart = () => {
  let state = {
    //state is by default an object
    products: [
      {
        productID: "00199",
        productTitle: "Clay Pot",
        quantity: 1,
        price: 200
      },
      {
        productID: "00199",
        productTitle: "Clay Pot",
        quantity: 1,
        price: 200
      },
      {
        productID: "00199",
        productTitle: "Clay Pot",
        quantity: 1,
        price: 200
      },
      {
        productID: "00199",
        productTitle: "Clay Pot",
        quantity: 2,
        price: 200
      }
    ]
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTableData = () => {
    return state.products.map((product, index) => {
      const { productID, productTitle, quantity, price } = product; //destructuring
      const [qty, setQuantity] = useState(quantity);
      const [isOpen, SetOpen] = useState(false);
      return (
        <tr className="data">
          <td>{productID}</td>
          <td>{productTitle}</td>
          {/* <input className="text-center" type="number" min={quantity} /> */}
          <td>
            <Counter qty={qty} qtyFunc={setQuantity} />
          </td>
          <td>PKR {price}</td>
          <td>PKR {qty * price}</td>
          <td>
            <a href="#top" className="link" onClick={handleShow}>
              Delete
            </a>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <AdminNavbar />
      <Memory panel="Customer Panel " page="" current=" Shopping Cart" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Shopping Cart</h1>
      <div className="table-responsive">
        <table className="table table-size">
          <thead>
            <tr className="top-row">
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Subtotal</th>
              <th>Delete Product</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
      <div className="totalBill">Total: Rs.900</div>
      <div className="outer">
        <div className="inner">
          <input
            type="submit"
            className="continueShopping-button"
            value="Continue Shopping"
          ></input>
        </div>
        <div className="inner">
          <input
            type="submit"
            className="checkout-button"
            value="Checkout"
          ></input>
        </div>
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
            onClick={handleClose}
            className="delete-primary"
          >
            Delete Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ShoppingCart;
