"use client";
import React, { useState, useEffect } from "react";

interface sampleProps {
  name: string;
  id: number;
  price: number;
  show: boolean;
  msg: string;
  handleDelete: (id: number) => void;
}

const Sample = ({ name, id, price, show, msg, handleDelete }: sampleProps) => {
  const [products, setProducts] = useState(false);

  const [dummy, setDummy] = useState(true);

  useEffect(() => {
    console.log("UseEffect called");
    console.log(dummy);
  }, [dummy]);

  const handleClick = (price: number) => {
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
          onClick={() => handleClick(20)}
        >
          Buy Now
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
        <button
          className="px-4 my-5 py-5  rounded flex bg-blue-500 text-white"
          onClick={() => setDummy(false)}
        >
          dummy
        </button>
      </div>
    </div>
  );
};

export default Sample;
