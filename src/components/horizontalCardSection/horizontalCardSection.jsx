import React, { useState } from "react";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
import { RightArrow, LeftArrow } from "../../assets/icons/icons";

const HorizontalCardSection = ({ title, description, items }) => {
  const [index, setIndex] = useState(0);

  const increase = () => {
    setIndex(index + 4);
  };

  const decrease = () => {
    setIndex(index - 4);
  };

  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl ">
        <div className="my-7 px-6 lg:px-0">
          <h1 className="text-[1.56rem] text-[#2B2D42] font-bold">{title}</h1>
          <p className="text-[1rem] text-[#2B2D42]">{description}</p>
        </div>
        <section className="overflow-hidden text-gray-700">
          <div className="container py-2 mx-auto relative">
            <span
              onClick={decrease}
              className={`${
                index === 0 ? "hidden" : "visible"
              } absolute cursor-pointer top-1/2 -left-2`}
            >
              <LeftArrow className="text-[#FF9F1C]" size={50} />
            </span>
            <span
              onClick={increase}
              className={`${
                index + 4 === items.length ? "hidden" : "visible"
              } absolute cursor-pointer top-1/2 -right-2`}
            >
              <RightArrow className="text-[#FF9F1C]" size={50} />
            </span>
            <div className="flex flex-col md:flex-wrap md:flex-row -m-1 md:-m-2">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 w-full gap-4 px-6 md:px-2">
                {items.slice(index, index + 4).map((item, index) => (
                  <HorizontalCard
                    description={item.description}
                    name={item.name}
                    details={item.details}
                    image={item.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalCardSection;
