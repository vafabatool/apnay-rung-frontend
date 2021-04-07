import React from "react";
import "./styles.css";
// import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Memory = (props, panel) => {
  return (
    <div className="memory">
      <span>
        {/* <Link to="/${panel}">{props.panel}</Link> */}
        <a href="#">{props.panel}/</a>
      </span>
      <a href="#">{props.page}</a>
      <span className="current-page">
        <a href="#">{props.current}</a>
      </span>
    </div>
  );
};

export default Memory;
