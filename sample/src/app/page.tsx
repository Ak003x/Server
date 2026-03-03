import Sample from "@/components/Sample";
import products from "@/data/data";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        {products
          // .filter(({ show, id }) => id % 2 === 0) if even
          .filter(({ show }) => show === true) // if true
          .map(({ id, price, name, show }) => (
            <Sample key={id} name={name} id={id} price={price} shows={show} />
          ))}
      </div>
    </div>
  );
};

export default page;
