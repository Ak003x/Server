"use client";
import React, { use, useState } from "react";

interface sampleProps {
  name: string;
  id: number;
  price: number;
  show: boolean;
  msg: string;
}

const Sample = ({ name, id, price, show, msg }: sampleProps) => {
  const [products, setProducts] = useState(false);

  const handleClick = (name: string, price: number) => {
    setProducts(true);
    console.log(`${name} purchased with ${price}`);
  };

  return (
    <div>
      <div className="border border-gray-300 rounded-lg p-4 m-2 w-48 shadow-md bg-white">
        <h1 className="text-blue-500 text-xl font-bold mb-2"> {name}</h1>
        <p className="text-green-500 text-base mb-1"> ID:{id}</p>
        <p className="text-red-500 text-base"> Price:{price}</p>
        <p className="text-gray-500 text-base">
          {" "}
          Message: {products ? "Purchased" : ""}
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleClick(name, price)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Sample;
