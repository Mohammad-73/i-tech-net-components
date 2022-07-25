import React, { useState } from "react";

const Tabs = ({ items }) => {
  const activeClass = "border-[#12A3BA] bg-[#12A3BA] text-white";
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
  };
  return (
    <div className="m-3">
      <ul className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-auto">
        {items.map((item, index) => (
          <li
            onClick={() => handleClick(index)}
            className={`${
              active === index ? activeClass : "border-gray-600"
            } text-center border-solid border-2  rounded-full py-3`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
