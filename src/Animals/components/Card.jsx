import React from "react";
import Button from "./Button";
import { priceCategory } from "../constants";

const Card = ({ title, price, content, click }) => {
  return (
    <div className="w-[33%] flxStart flex-col gap-8 ">
      <h1 className="">{title}</h1>
      <h1>{price}</h1>
      <p>{content}</p>
      <Button
        name={click}
        styles={
          "py-[0.7rem] px-[1.2rem] font-[500] max-md:text-[0.7rem] max-sm:text-[0.8rem] text-[0.9rem]"
        }
      />
    </div>
  );
};

export default Card;
