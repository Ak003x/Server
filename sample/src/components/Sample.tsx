import React from "react";

interface sampleProps {
  name: string;
  id: number;
  price: number;
}

const Sample = ({ name, id, price }: sampleProps) => {
  return (
    <div>
      <div className="border border-gray-300 rounded-lg p-4 m-2 w-48 shadow-md bg-white">
        <h1 className="text-blue-500 text-xl font-bold mb-2"> {name}</h1>
        <p className="text-green-500 text-base mb-1"> ID:{id}</p>
        <p className="ext-red-500 text-base"> Price:{price}</p>
      </div>
    </div>
  );
};

export default Sample;
