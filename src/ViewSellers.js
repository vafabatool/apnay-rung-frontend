import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import { useState } from "react";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import PersonAddDisabledIcon from "@material-ui/icons/PersonAddDisabled";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import FlashOnIcon from "@material-ui/icons/FlashOn";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";

const ViewSellers = () => {
  const [state, setState] = useState([
    {
      seller_id: 0,
      name: "",
      email: "",
      cnic: "",
      location: "",
      bio: null,
      weeklyartisan: false,
      blocked: true,
      profile_picture: null
    }
  ]);

  async function getData(url) {
    const response = await fetch(url, {
      method: "GET",
      withCredentials: true,
      credentials: "include",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6Ik11aGFtbWFkIFJvaGFuIEh1c3NhaW4iLCJ0eXBlT2ZVc2VyIjoiYWRtaW4iLCJpYXQiOjE2MTY4NDE4MTZ9.HJvh_8caLMReaDmJFCEklgtP9u86usbNIZ4FxOrIawk",
        "Content-Type": "application/json"
      }
    });

    return response.json();
  }

  getData("https://apnay-rung-api.herokuapp.com/seller/all").then(
    (response) => {
      console.log(response);
      setState(response);
    }
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Block = (blockStatus) => {
    if (blockStatus === false) {
      return (
        <a href="#top" className="link" onClick={handleShow}>
          <PersonAddDisabledIcon
            style={{
              fontSize: "medium"
            }}
          />
          Block
        </a>
      );
    } else {
      return (
        <a href="#top" className="link">
          <PersonAddIcon
            style={{
              fontSize: "medium"
            }}
          />
          Unblock
        </a>
      );
    }
  };

  const Spotlight = (weeklyartisan) => {
    if (weeklyartisan === false) {
      return (
        <a href="#top" className="link">
          <FlashOnIcon
            style={{
              fontSize: "medium"
            }}
          />
          Spotlight
        </a>
      );
    } else {
      return (
        <a href="#top" className="link">
          <FlashOnIcon
            style={{
              fontSize: "medium"
            }}
          />
          Remove Spotlight
        </a>
      );
    }
  };
  const renderTableData = () => {
    return state.map((seller, index) => {
      const {
        seller_id,
        name,
        email,
        cnic,
        location,
        bio,
        weeklyartisan,
        blocked,
        profile_picture,
        phone
      } = seller; //destructuring
      return (
        <tr class="data">
          <td>{seller_id}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{location}</td>
          <td>{phone}</td>
          <td>
            {Block(blocked)}
            <br></br>
            {Spotlight(weeklyartisan)}
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <AdminNavbar />
      <Memory panel="Admin Panel " page="" current=" View Sellers" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>View Sellers </h1>
      <div class="table-responsive">
        <table class="table table-size">
          <thead>
            <tr class="top-row">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Actions</th>
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
        <Modal.Body>Are you sure you want to block this customer?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="delete-secondary"
          >
            Don't Block
          </Button>
          <Button
            variant="primary"
            onClick={handleClose}
            className="delete-primary"
          >
            Block Customer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ViewSellers;
