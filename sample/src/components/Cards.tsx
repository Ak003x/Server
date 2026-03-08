import products from "@/data/data";
import React from "react";
import Sample from "./Sample";

const Cards = () => {
  return (
    <div>
      <div>
        <div className="flex flex-wrap">
          {products
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
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
