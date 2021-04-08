import React, { useState } from "react";
import "./styles.css";
import Logo from "./css/logo.png";
// import Button from "@material-ui/core/Button";
// import { makeStyles } from "@material-ui/core/styles";
// import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";

const SellerNavbar = () => {
  const [home, setHome] = useState(false);
  const [panel, setPanel] = useState(false);
  const [tutorial, setTutorial] = useState(false);
  const [aboutus, setAboutus] = useState(false);
  const [inventory, setInventory] = useState(false);

  const setHomeClass = () => {
    setHome(true);
    setPanel(false);
    setTutorial(false);
    setAboutus(false);
    setInventory(false);
  };
  const setPanelClass = () => {
    setHome(false);
    setPanel(true);
    setTutorial(false);
    setAboutus(false);
    setInventory(false);
  };
  const setTutorialClass = () => {
    setHome(false);
    setPanel(false);
    setTutorial(true);
    setAboutus(false);
    setInventory(false);
  };
  const setAboutClass = () => {
    setHome(false);
    setPanel(false);
    setTutorial(false);
    setAboutus(true);
    setInventory(false);
  };
  const setInventoryClass = () => {
    setHome(false);
    setPanel(false);
    setTutorial(false);
    setAboutus(false);
    setInventory(true);
  };
  return (
    <div className="Topbar" id="myTopnav">
      <img className="logo" src={Logo} alt="logo" />
      <a href="#home" onClick={setHomeClass} className={home ? "active" : ""}>
        Home
      </a>
      <a
        href="#sellerPanel"
        onClick={setPanelClass}
        className={panel ? "active" : ""}
      >
        {" "}
        Panel
      </a>
      <a
        href="#inventory"
        onClick={setInventoryClass}
        className={inventory ? "active" : ""}
      >
        Inventory
      </a>
      <a
        href="#Tutorials"
        onClick={setTutorialClass}
        className={tutorial ? "active" : ""}
      >
        Tutorials
      </a>
      <a
        href="#aboutUs"
        onClick={setAboutClass}
        className={aboutus ? "active" : ""}
      >
        About Us
      </a>

      <p>
        Rohan Hussain
        <br /> Seller
      </p>
      <input type="button" className="logout_button" value="Logout" />
      <input type="button" className="notif" value="" />
      <div className="container">
        <img src="/css/admin_panel/ellipse.png" id="ellipse" />
      </div>
    </div>
  );
};
export default SellerNavbar;
