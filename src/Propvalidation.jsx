import React from "react";
import PropTypes from "prop-types";
// import "./proVvalidation.css";

function Propvalidation(props) {
  return (
    <>
      <div>
        <h1>React Js Props Validation</h1>
        <table>
          <tbody>
            <tr>
              <th>Type</th>
              <th>Value</th>
              <th>Valid</th>
            </tr>
            <tr>
              <th>Array</th>
              <th>{props.propArray.join(", ")}</th>
              <th>{props.propArray ? "true" : "false"}</th>
            </tr>
            <tr>
              <th>Boolean</th>
              <th>{props.propBool ? "true" : "false"}</th>
              <th>{props.propBool ? "true" : "false"}</th>
            </tr>
            <tr>
              <th>Function</th>
              <th>
                {typeof props.propFunc === "function"
                  ? "Function defined"
                  : "No function"}
              </th>
              <th>{typeof props.propFunc === "function" ? "true" : "false"}</th>
            </tr>
            <tr>
              <th>String</th>
              <th>{props.propString}</th>
              <th>{props.propString ? "true" : "false"}</th>
            </tr>
            <tr>
              <th>Number</th>
              <th>{props.propNumber}</th>
              <th>{props.propNumber ? "true" : "false"}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

// Correct the PropTypes property name and defaultProps property name
Propvalidation.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBool: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
};

Propvalidation.defaultProps = {
  propArray: [1, 2, 3],
  propBool: true,
  propFunc: function (x) {
    return x + 5;
  },
  propNumber: 1,
  propString: "a",
};

export default Propvalidation;
