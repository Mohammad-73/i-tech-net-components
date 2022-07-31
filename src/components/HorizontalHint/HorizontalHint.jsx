import React from "react";

const HorizontalHint = ({ icon, title, description }) => {
  return (
    <div className="flex w-[600px]">
      <span className="text-orange-400 p-4 m-2 rounded-full">{icon}</span>
      <div className="flex flex-col">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="text-[0.87rem] text-left text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default HorizontalHint;
