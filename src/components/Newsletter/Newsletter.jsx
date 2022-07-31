import React from "react";
import Button from "../Button/Button";

const Newsletter = ({
  image1,
  image2,
  image3,
  title,
  description,
  inputPlaceholder,
  buttonTitle,
}) => {
  return (
    <div className="w-full h-[1024px] md:h-[833px] max-w-6xl mx-auto py-24 md:py-36 md:my-10">
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="w-full h-full">
          <div className="w-full h-full relative p-5">
            <div className="absolute shadow-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[20px]">
              <img
                src={image1}
                alt=""
                className="w-full h-[433px] object-center object-cover rounded-[20px]"
              />
            </div>
            <div className="absolute shadow-2xl rounded-[20px] top-14 left-3">
              <img
                src={image2}
                alt=""
                className="w-[210px] md:w-[250px] h-[123px] md:h-[183px] object-center object-cover rounded-[20px]"
              />
            </div>
            <div className="absolute shadow-2xl rounded-[20px] bottom-0 right-16">
              <img
                src={image3}
                alt=""
                className="w-[120px] md:w-[180px] h-[110px] md:h-[142px] object-center object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
        <div className="max-w-sm md:max-w-md lg:w-full flex flex-col justify-center px-4 pt-24 xl:pt-0  xl:px-0 ">
          <h1 className="text-[#2B2D42] text-[1.56rem] py-4 font-bold">
            {title}
          </h1>
          <p className="text-[#2B2D42] text-[0.87rem] pt-1 pb-4">
            {description}
          </p>
          <div className="flex items-center">
            <div className="flex items-center">
              <div class=" bg-gray-200 rounded-[28px]  mt-5 lg:mt-0">
                <div class="container flex justify-center items-center">
                  <div class="relative">
                    <input
                      type="text"
                      class="h-12 w-full md:w-96 border-2 border-gray-400np pl-10 pr-20 rounded-[28px] z-0 focus:shadow focus:outline-none"
                      placeholder={inputPlaceholder}
                    />
                    <div class="absolute top-0 right-1">
                      <Button text={buttonTitle} />
                    </div>
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

export default Newsletter;
