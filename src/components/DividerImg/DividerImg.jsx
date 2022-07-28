import React from "react";

import { BiRightArrowAlt } from "react-icons/bi";

const DividerImg = ({ align, image, dark }) => {
  return (
    <div className="w-full my-3">
      <div className="relative">
        <img
          src={image}
          alt=""
          className="w-full h-[400px] object-cover object-center"
        />
        {dark && (
          <div className="w-full h-full absolute top-0 opacity-70 bg-[#2B2D42]"></div>
        )}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-${align} w-[72rem]`}
        >
          <h1 className="text-[1.56rem] text-white font-bold drop-shadow-lg">
            Entdecke alle Surfcamps in Europa
          </h1>
          <p className="py-1 text-[0.87rem] text-white drop-shadow-lg">
            Über 100 qualitätsgeprüfte Surfcamps für dein Abenteuer in den
            Wellen
          </p>
          <button className=" bg-[#FF9F1C] hover:bg-[#fc9a11] text-white font-bold py-2 px-4 my-1 rounded-full drop-shadow-lg">
            <span className="flex">
              Zur Übersicht <BiRightArrowAlt size={30} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DividerImg;
