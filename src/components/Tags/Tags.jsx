import React from "react";

const Tags = ({ title, items }) => {
  return (
    <div className="flex flex-col text-left">
      <h1 className="text-[#2B2D42] text-[0.87rem] font-bold">{title}</h1>
      {items.map((item, index) => (
        <p key={index} className="text-[#2B2D42] text-[0.87rem]">
          {item}
        </p>
      ))}
    </div>
  );
};

export default Tags;
