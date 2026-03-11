"use client";
import { useState } from "react";

const CountPage = () => {
  const [count, setCount] = useState(0);

  const updateCount = (value: number) => {
    if (value <= 0) return;
    console.log("Count changed:", value);
    setCount(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCount(Number(e.target.value));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <input
        type="number"
        value={count}
        onChange={handleChange}
        className="text-4xl font-bold text-gray-800 text-center w-32 border-b-2 border-gray-300 outline-none"
      />
      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg"
          onClick={() => updateCount(count + 1)}
        >
          + Increment
        </button>
        <button
          className="bg-red-500 text-white px-6 py-2 rounded-lg"
          onClick={() => updateCount(count - 1)}
        >
          - Decrement
        </button>
        <button
          className="bg-gray-400 text-white px-6 py-2 rounded-lg"
          onClick={() => updateCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CountPage;
