import React from "react";

const Hoc = (WrappedComponents) => {
  return function EnhacedComponent(props) {
    console.log(`Modifying ${WrappedComponents.name}with new props`);
    return <WrappedComponents {...props} />;
  };

};

export default Hoc;
