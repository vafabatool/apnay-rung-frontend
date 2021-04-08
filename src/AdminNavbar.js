import React, { useState } from "react";
import "./styles.css";
import Logo from "./css/logo.png";
// Checking

// import Button from "@material-ui/core/Button";
// import Badge from "@material-ui/core/Badge";
// import { makeStyles } from "@material-ui/core/styles";
// import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(0.5)
//   }
// }));

const Navbar = () => {
  // const classes = useStyles();
  const [home, setHome] = useState(false);
  const [panel, setPanel] = useState(false);
  const [contact, setContact] = useState(false);

  const setHomeClass = () => {
    setHome(true);
    setPanel(false);
    setContact(false);
  };
  const setPanelClass = () => {
    setHome(false);
    setPanel(true);
    setContact(false);
  };
  const setContactClass = () => {
    setHome(false);
    setPanel(false);
    setContact(true);
  };
  return (
    <div className="Topbar">
      <img className="logo" src={Logo} alt="Logo" />
      <a href="#home" onClick={setHomeClass} className={home ? "active" : ""}>
        Home
      </a>
      <a
        href="panel.html"
        onClick={setPanelClass}
        className={panel ? "active" : ""}
      >
        {" "}
        Panel
      </a>
      <a
        href="#contact"
        onClick={setContactClass}
        className={contact ? "active" : ""}
      >
        Contact Us
      </a>

      <p>
        Admin Name
        <br />
        Admin
      </p>
      <input type="button" className="logout_button" value="Logout" />
      {/* <Button
        variant="contained"
        className="nav-notif-button"
        startIcon={<NotificationsNoneIcon />}
      ></Button> */}
    </div>
  );
};
export default Navbar;
