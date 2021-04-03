import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "bootstrap/dist/css/bootstrap.css";
// import deleteModal from "./deleteModal";

const Counter = (props) => {
  // const [qty, setQuantity] = useState(1);

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

const deleteModal = () => {
  return (
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title">Modal Heading</h4>
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
          </div>

          <div class="modal-body">Modal body..</div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">
              Close
            </button>
          </div>
        </div>
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

  const deleteFunc = () => {
    return (
      <div>
        <deleteModal />
      </div>
    );
  };

  const renderTableData = () => {
    return state.products.map((product, index) => {
      const { productID, productTitle, quantity, price } = product; //destructuring
      const [qty, setQuantity] = useState(quantity);
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
            <a href="#delete" className="link" onClick={deleteFunc()}>
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
    </div>
  );
};
export default ShoppingCart;
