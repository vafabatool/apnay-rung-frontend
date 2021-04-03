import React, { useState } from "react";
import "./styles.css";

const CustomerNavbar = () => {
  {
    /* will need to add local storage state to keep the state from being deleted after refresh */
  }
  const [home, setHome] = useState(false);
  const [panel, setPanel] = useState(false);
  const [catalog, setCatalog] = useState(false);
  const [artisans, setArtisans] = useState(false);
  const [aboutus, setAboutus] = useState(false);
  const [contact, setContact] = useState(false);

  const setHomeClass = () => {
    setHome(true);
    setPanel(false);
    setArtisans(false);
    setCatalog(false);
    setContact(false);
    setAboutus(false);
    console.log(`home is now ${home}`);
  };
  const setPanelClass = () => {
    setHome(false);
    setPanel(true);
    setArtisans(false);
    setCatalog(false);
    setContact(false);
    setAboutus(false);
    console.log(`home is now ${home}`);
  };
  const setArtisanClass = () => {
    setHome(false);
    setPanel(false);
    setArtisans(true);
    setCatalog(false);
    setContact(false);
    setAboutus(false);
    console.log(`home is now ${home}`);
  };
  const setCatalogClass = () => {
    setHome(false);
    setPanel(false);
    setArtisans(false);
    setCatalog(true);
    setContact(false);
    setAboutus(false);
    console.log(`home is now ${home}`);
  };
  const setContactClass = () => {
    setHome(false);
    setPanel(false);
    setArtisans(false);
    setCatalog(false);
    setContact(true);
    setAboutus(false);
    console.log(`home is now ${home}`);
  };
  const setAboutClass = () => {
    setHome(false);
    setPanel(false);
    setArtisans(false);
    setCatalog(false);
    setContact(false);
    setAboutus(true);
    console.log(`home is now ${home}`);
  };
  return (
    <div className="Topbar" id="myTopnav">
      <img className="logo" src={require("./css/logo.png")} alt="logo" />
      <a href="#home" onClick={setHomeClass} className={home ? "active" : ""}>
        Home
      </a>
      <a
        href="#cusomter Panel"
        onClick={setPanelClass}
        className={panel ? "active" : ""}
      >
        Panel
      </a>
      <a
        href="#catalog"
        onClick={setCatalogClass}
        className={catalog ? "active" : ""}
      >
        Catalog
      </a>
      <a
        href="#artisans"
        onClick={setArtisanClass}
        className={artisans ? "active" : ""}
      >
        Artisans
      </a>
      <a
        href="#aboutUs"
        onClick={setAboutClass}
        className={aboutus ? "active" : ""}
      >
        About Us
      </a>
      <a
        href="#contact"
        onClick={setContactClass}
        className={contact ? "active" : ""}
      >
        Contact
      </a>
      <p>
        Rohan Hussain <br /> Customer
      </p>
      <input type="button" className="logout_button" value="Logout" />
      <input type="button" className="notif" value="" />
    </div>
  );
};

export default CustomerNavbar;
