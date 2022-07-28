import React from "react";

const Button = ({ text, icon }) => {
  return (
    <button className=" bg-[#FF9F1C] hover:bg-[#fc9a11] text-white font-bold py-2 px-4 my-1 rounded-full drop-shadow-lg">
      <span className="flex">
        {text}
        <span>{icon}</span>
      </span>
    </button>
  );
};

export default Button;
