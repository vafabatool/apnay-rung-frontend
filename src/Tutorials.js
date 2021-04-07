import "./styles.css";
import AdminNavbar from "./AdminNavbar";
import Memory from "./Memory";
import BottomBar from "./BottomBar";
import AddBoxIcon from "@material-ui/icons/AddBox";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const Tutorials = () => {
  let state = {
    //state is by default an object
    tutorials: [
      {
        id: 1,
        title: "How to use Apnay Rung"
      },
      {
        id: 1,
        title: "How to use Apnay Rung"
      },
      {
        id: 1,
        title: "How to use Apnay Rung"
      },
      {
        id: 1,
        title: "How to use Apnay Rung"
      }
    ]
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTableData = () => {
    return state.tutorials.map((tutorial, index) => {
      const { id, title } = tutorial; //destructuring
      return (
        <tr className="data">
          <td>{id}</td>
          <td>{title}</td>
          <td>
            <a href="#top" className="link">
              View
            </a>
            |
            <a href="#top" className="link">
              Edit
            </a>
            |
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
      <Memory panel="Admin Panel " page="" current=" Tutorials" />{" "}
      {/* when three links needed in panel, include a '/' in the middle 'page' argument */}
      <h1>Tutorials</h1>
      <div className="table-responsive">
        <table className="table table-size">
          <thead>
            <tr className="top-row">
              <th>ID</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
        <ul>
          <a href="notifications.html" class="link tutorial">
            <AddBoxIcon />
            Create New Tutorial
          </a>
        </ul>
      </div>
      <BottomBar />
      <Modal show={show} onHide={handleClose} className="delete-modal">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this tutorial?</Modal.Body>
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
            Delete Tutorial
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Tutorials;
