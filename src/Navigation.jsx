import React from "react";
import "./Navigation.css";
function Navigation(props) {
  return (
    <>
      {/* <nav className="navbar">
        <span>{props.title1}</span>
        <span>{props.t}</span>
        <span>Home</span>
        <span>Home</span>

        <span>
          <input type="text" placeholder="Search here" />
          <button>Click here</button>
        </span>
      </nav> */}
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
        </ul>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Go</button>
        </div>
      </nav>
    </>
  );
}
Navigation.defaultProps = {
  title1: "React",
};
export default Navigation;
