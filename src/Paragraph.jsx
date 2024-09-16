import React from "react";

function Paragraph(props) {
  return <p className="a">{props.t}</p>;
}

function SecondPara() {
  return <h2 className="b">This is the second paragraph.</h2>;
}

function ThirdPara() {
  return <h3>This is the third paragraph.</h3>;
}

export default Paragraph;
export { SecondPara, ThirdPara };
