import React from "react";
import Button from "../Button/Button";

const SmallNewsletter = ({
  image,
  title,
  description,
  inputPlaceholder,
  buttonTitle,
}) => {
  return (
    <div className="py-10 w-full max-w-6xl mx-auto">
      <div className=" w-full h-auto md:h-[220px] lg:max-w-full flex flex-col lg:flex-row rounded-[1.25rem] bg-[#12A3BA] shadow-hShadow">
        <div
          className="w-full md:w-[40%] h-[40%] md:h-full rounded-t-[1.25rem] md:rounded-l-[1.25rem] md:rounded-r-none shadow-hShadow flex-none   text-center overflow-hidden"
          title="Mountain"
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="w-full rounded-r-[1.25rem]  p-4 flex flex-col justify-around leading-normal">
          <div className="">
            <h1 className="text-white text-[1.25rem] font-bold">{title}</h1>
            <p className="text-white text-[0.87rem] text-base">{description}</p>
          </div>
          <div className="flex items-center">
            <div className=" bg-gray-200 rounded-[28px]  mt-5 lg:mt-0">
              <div className="container flex justify-center items-center">
                <div className="relative">
                  <input
                    type="text"
                    className="h-12 w-full md:w-96  pl-10 pr-20 rounded-[28px] z-0 focus:shadow focus:outline-none"
                    placeholder={inputPlaceholder}
                  />
                  <div className="absolute top-0 right-1">
                    <Button text={buttonTitle} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallNewsletter;
