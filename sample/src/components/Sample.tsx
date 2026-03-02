import React from "react";

interface sampleProps {
  name: string;
  id: number;
  price: number;
}

const Sample = ({ name, id, price }: sampleProps) => {
  return (
    <div>
      <h1>
        {name}
        {id}
        {price}
      </h1>
    </div>
  );
};

export default Sample;
