import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Hint = ({ icon, title, description, readMore }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="bg-custom-orange p-7 m-5 rounded-full text-white">
        {icon}
      </span>
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-center text-gray-600">{description}</p>
      <p className="flex text-gray-600">
        {readMore}
        <span>
          <BiRightArrowAlt size={30} />
        </span>
      </p>
    </div>
  );
};

export default Hint;
