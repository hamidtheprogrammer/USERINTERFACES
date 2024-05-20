import React from "react";

const Button = ({ name, styles, circular, left }) => {
  const regularButton = () => (
    <button className={`button flxBtw ${styles} overflow-hidden`}>
      <p>{name}</p>
    </button>
  );

  const circularButton = () => (
    <button
      className={` ${styles} translate-x-[-50%] translate-y-[-50%] fixed overflow-hidden circularBtn `}
    >
      <p>{left ? "￩" : "￫"}</p>
    </button>
  );

  return circular ? circularButton() : regularButton();
};

export default Button;
