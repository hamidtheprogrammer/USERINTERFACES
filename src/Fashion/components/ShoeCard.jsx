import React from "react";
import { styles } from "..";

const ShoeCard = ({ name, img, prevPrice, newPrice }) => {
  return (
    <section
      className={`${styles.flxCenter} flex-col roboto py-40 px-36 border-black border-2 bg-[#e7d6c4] mt-32`}
    >
      <img src="" alt="" />
      <p className="text-xs">SS/20</p>
      <h1 className="">{name}</h1>
      <p className="text-lg line-through">{prevPrice}</p>
      <p className="text-2xl">{newPrice}</p>
    </section>
  );
};

export default ShoeCard;
