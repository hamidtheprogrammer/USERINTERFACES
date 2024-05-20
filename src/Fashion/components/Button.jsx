import React from "react";
import { styles } from "..";

const Button = ({ name, click }) => {
  return (
    <div
      onClick={click}
      className={`${styles.flxCenter} gap-6 relative mt-10 cursor-pointer`}
    >
      <p className="explore relative roboto text-xl font-medium">{name}</p>
      <div className="relative btn border-2 p-1 rounded-[100%] border-black">
        <p className={`text-4xl `}>🡢</p>
      </div>
    </div>
  );
};

export default Button;
