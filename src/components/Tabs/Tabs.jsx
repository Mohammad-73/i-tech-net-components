import React from "react";

const Tabs = ({ items, cols, handleClick, active }) => {
  const activeClass = "border-[#12A3BA] bg-[#12A3BA] text-white";

  return (
    <div className="m-3">
      <ul
        className={`grid sm:grid-cols-3 md:grid-cols-4 ${cols} gap-4 mx-auto`}
      >
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(index)}
            className={`${
              active === index ? activeClass : "border-gray-600"
            } text-center border-solid border-2  rounded-full py-3 cursor-pointer`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
