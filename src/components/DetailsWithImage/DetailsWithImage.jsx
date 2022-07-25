import React from "react";
import Kanaren from "../../assets/images/Kanaren.jpg";
import { BiRightArrowAlt } from "react-icons/bi";

const DetailsWithImage = () => {
  return (
    <div className="w-full overflow-visible my-7 ">
      <div className="float-left w-[39rem] h-[25rem] m-9">
        <img src={Kanaren} alt="" className="rounded-3xl" />
      </div>
      <div className="">
        <h1 className="mt-5 pt-9 text-3xl font-bold">Wandern</h1>
        <p className="py-6 text-[#2B2D42] text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
          purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed
          euismod nisi porta lorem mollis Morbi tristique senectus et netus
          Mattis pellentesque id nibh tortor id aliquet lectus proin Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum Ullamcorper
          velit sed ullamcorper morbi. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua Egestas purus viverra accumsan in nisl nisi Arcu cursus
          vitae congue mauris rhoncus aenean vel elit Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua Egestas purus viverra accumsan in nisl
          nisi Arcu cursus vitae congue mauris rhoncus aenean vel elit
          scelerisque In egestas erat imperdiet sed euismod nisi porta lorem
          mollis Morbi tristique senectus et netus Mattis pellentesque id nibh
          tortor id aliquet lectus proin Sapien faucibus et molestie ac feugiat
          sed lectus vestibulum Ullamcorper velit sed ullamcorper morbi. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua Egestas purus
          viverra accumsan in nisl nisi Arcu cursus vitae congue mauris rhoncus
          aenean vel elit nisi Arcu cursus vitae congue mauris rhoncus aenean
          vel elit scelerisque In egestas erat imperdiet sed euismod nisi porta
          lorem mollis Morbi tristique senectus et netus Mattis pellentesque id
          nibh tortor id aliquet lectus proin Sapien faucibus et molestie ac
          feugiat sed lectus vestibulum Ullamcorper velit sed ullamcorper morbi.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
          purus viverra accumsan in nisl
        </p>
        <p className="flex text-[#2B2D42] text-[16px] font-bold">
          Zu den Details
          <span>
            <BiRightArrowAlt size={30} />
          </span>
        </p>
      </div>
    </div>
  );
};

export default DetailsWithImage;
