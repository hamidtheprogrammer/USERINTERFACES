import React from "react";

const Button = ({ name, styles }) => {
  return (
    <button
      className={`bg-white rounded-full ${styles} text-black hover:opacity-[0.8]`}
    >
      {name}
    </button>
  );
};

export default Button;
