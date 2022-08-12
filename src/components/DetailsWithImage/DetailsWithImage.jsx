import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const DetailsWithImage = ({ image, title, description, readMore }) => {
  return (
    <div className="w-full overflow-visible my-7 ">
      <div className="float-left max-w-xl max-h-[600px] w-lg md:w-2xl h-auto m-9">
        <img src={image} alt="" className="rounded-3xl" />
      </div>
      <div className="min-h-[600px]">
        <h1 className="mt-5 pt-9 px-6 text-3xl font-bold">{title}</h1>
        <p className="p-6 text-[#2B2D42] text-[16px]">{description}</p>
        {readMore && (
          <p className="px-6 flex text-[#2B2D42] text-[16px] font-bold">
            {readMore}
            <span>
              <BiRightArrowAlt size={26} />
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default DetailsWithImage;
