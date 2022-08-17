import React from "react";
import { RightArrow } from "../../assets/icons/icons";

const Hint = ({ key, icon, title, description, readMore }) => {
  return (
    <div key={key} className="flex flex-col items-center px-4">
      <span className="bg-custom-orange p-7 m-5 rounded-full text-white">
        {icon}
      </span>
      <h1 className="font-bold text-lg">{title}</h1>
      <p className="text-center text-gray-600">{description}</p>
      <p className="flex items-center gap-1 text-gray-600">
        {readMore}
        <span>
          <RightArrow size={30} />
        </span>
      </p>
    </div>
  );
};

export default Hint;
