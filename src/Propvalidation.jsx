import React from "react";
import propTypes from "prop-types";
function Propvalidation(props) {
  return (
    <>
      <div>
        <table>
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
              {typeof props.propfunc == "function"
                ? "Function is there"
                : "no function"}
            </th>
            <th>{typeof props.propfunc == "function" ? "true" : "false"}</th>
          </tr>
          <tr>
            <th>String</th>
            <th>{props.propString ? "true" : "false"}</th>
            <th>{props.propString ? "true" : "false"}</th>
          </tr>
          <tr>
            <th>Number</th>
            <th>{props.propNum ? "true" : "false"}</th>
            <th>{props.propNum ? "true" : "false"}</th>
          </tr>
        </table>
      </div>
    </>
  );
}
Propvalidation.propTypes = {
  propArray: propTypes.array.isRequired,
  propBool: propTypes.bool.isRequired,
  propfunc: propTypes.func,
  propString: propTypes.string,
  propNum: propTypes.number,
};
Propvalidation.defaultProps = {
  propArray: [1, 2, 3],
  propBool: true,
  propfunc: function (x) {
    return x + 5;
  },
  propString: "Satakratu",
  propNum: 1,
};
export default Propvalidation;
