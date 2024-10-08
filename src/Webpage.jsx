import React from "react";
import propTypes from "prop-types";
function Webpage(props) {
  return (
    <>
      <h1>My name is: {props.title}</h1>
      <h1>Is it valid? {props.title ? "true" : "false"}</h1>
    </>
  );
}
Webpage.defaultProps = {
  title: "Satakratu",
};
Webpage.propTypes = {
  title: propTypes.string,
};
export default Webpage;
