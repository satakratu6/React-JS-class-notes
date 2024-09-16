import React from "react";
import styles from "./Navigation.css";
function Navigation(props) {
  return (
    <>
      <nav className="nav">
          <span>
            {" "}
            <a href="#home">{props.title}</a>
          </span>
          <span>
            <a href="#about">About</a>
          </span>
          <span>
            <a href="#contact">{props.title}</a>
          </span>
          <span>
            <a href="#services">Services</a>
          </span>
        <input type="search" placeholder="search here" />
        <button>Go</button>
      </nav>
    </>
  );
}
Navigation.defaultProps = { title: "react" };
export default Navigation;
