import React from "react";
import Hoc from "./Hoc";

const HelloWorld = ({ name }) => {
  return (
    <div>
      <h1>Hello,{name} </h1>
    </div>
  );
};
const EnhacedComponents = Hoc(HelloWorld);

export default EnhacedComponents;
