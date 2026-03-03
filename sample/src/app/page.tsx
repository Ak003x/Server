import Sample from "@/components/Sample";
import products from "@/data/data";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        {products
          .filter(({ id }) => id < 5)
          .map(({ id, price, name }) => (
            <Sample key={id} name={name} id={id} price={price} />
          ))}
      </div>
    </div>
  );
};

export default page;
