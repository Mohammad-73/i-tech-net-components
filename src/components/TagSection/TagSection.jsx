import React from "react";
import Tags from "../Tags/Tags";

const TagSection = ({ title, description, cols, items }) => {
  return (
    <div className="w-full max-w-6xl mx-auto py-6">
      <div className="my-7 px-6 lg:px-0">
        <h1 className="text-[1.56rem] text-[#2B2D42] font-bold">{title}</h1>
        <p className="text-[1rem] text-[#2B2D42]">{description}</p>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-3 ${cols}`}>
        {items.map((item) => (
          <Tags title={item.title} items={item.items} />
        ))}
      </div>
    </div>
  );
};

export default TagSection;
