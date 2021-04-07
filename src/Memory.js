import React from "react";
import "./styles.css";
// import Navbar from "./Navbar";

const Memory = (props, panel) => {
  return (
    <div className="memory">
      <span>
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
