import React from "react";
import Hint from "../Hint/Hint";

const HintSection = ({ title, description, items }) => {
  return (
    <div className="max-w-6xl flex flex-col justify-items-end mx-auto py-12">
      <div className="my-7 px-6 lg:px-0">
        <h1 className="text-[1.56rem] text-[#2B2D42] font-bold">{title}</h1>
        <p className="text-[1rem] text-[#2B2D42]">{description}</p>
      </div>
      <div className="grid md:grid-cols-3">
        {items.map((item, index) => (
          <Hint
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            readMore={item.readMore}
          />
        ))}
      </div>
    </div>
  );
};

export default HintSection;
