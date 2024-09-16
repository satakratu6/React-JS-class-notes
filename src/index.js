// import React from "react";
// import ReactDom from 'react-dom';
// import Navigation from "./Navigation";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Bootstrap from "./Bootstrap";
// import Paragraph from "./Paragraph";

// import { SecondPara, ThirdPara } from "./Paragraph";
// import * as data from "./Paragraph";
// import Propvalidation from "./Propvalidation";
// var p1="This is the first paragraph.";
// ReactDom.render(<>

//   {/* <Navigation title="home"/> */}
//   {/* <h1>heading 1</h1>
//   <p>Hello</p>
//   <p>Paragraph</p>
//   <p>Paragrap2</p>
//   <p>Paragrap3</p> */}
//   <data.default t={p1} />
//     <data.SecondPara />
//     <data.ThirdPara />


//   </>
// ,
// document.getElementById("root"));
// // var h1=document.createElement("h1");
// //            h1.innerHTML="Hello world";
// //            document.getElementById("root").appendChild(h1);
// ReactDom.render(<Navigation></Navigation>,document.getElementById("r"))
// ReactDom.render(<Propvalidation></Propvalidation>,document.getElementById("root"))
// ReactDom.render(<Bootstrap/>,document.getElementById("r"))
import React from "react";
import ReactDom from 'react-dom';
import Activity1 from "./Activity1";
ReactDom.render(<><Activity1/>
  <p>React js is a free library for making websites look and feel cool</p>
  </>,
  document.getElementById("root"));