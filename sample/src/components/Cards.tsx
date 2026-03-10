"use client";
import products from "@/data/data";

import React, { useEffect, useState } from "react";
import Sample from "./Sample";

const Cards = () => {
  const [productsList, setProductsList] = useState(products);

  const handleDelete = (id: number) => {
    setProductsList(productsList.filter((product) => product.id !== id));
  };

  return (
    <div>
      <div className="flex flex-wrap py-20 justify-center">
        {productsList
          // .filter(({ show, id }) => id % 2 === 0) if even
          .filter(({ show }) => show === true) // if true
          .map(({ id, price, name, show, msg }) => (
            <Sample
              key={id}
              name={name}
              id={id}
              price={price}
              show={show}
              msg={msg}
              handleDelete={handleDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default Cards;
