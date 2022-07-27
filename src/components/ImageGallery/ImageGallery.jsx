import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import G1 from "../../assets/images/g1.jpg";
import G2 from "../../assets/images/g2.jpg";
import G3 from "../../assets/images/g3.jpg";
import G4 from "../../assets/images/g4.jpg";
import G5 from "../../assets/images/g5.jpg";

const ImageGallery = () => {
  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl ">
        <div className="my-7">
          <h1 className="text-[1.56rem] text-[#2B2D42]">
            Entdecke Surfcamps mit der passenden Atmosphäre
          </h1>
          <p className="text-[1rem] text-[#2B2D42]">
            Damit dein Surfurlaub zu dem ersehnten Traumurlaub wird, ist die
            Atmosphäre im Surfcamp entscheidend. Finde jetzt das Surfcamps, das
            zu dir und deinen Wünschen passt:
          </p>
        </div>
        <section class="overflow-hidden text-gray-700">
          <div class="container py-2 mx-auto ">
            <div class="flex flex-wrap -m-1 md:-m-2">
              <div class="flex flex-wrap w-1/3">
                <div class="w-full h-1/3 p-1 md:p-2">
                  <ImageCard shadowSize="80" imageSrc={G1} />
                </div>
                <div class="w-full h-2/3 p-1 md:p-2">
                  <ImageCard shadowSize="80" imageSrc={G2} />
                </div>
              </div>
              <div class="flex flex-wrap w-1/3">
                <div class="w-full h-2/3 p-1 md:p-2">
                  <ImageCard shadowSize="80" imageSrc={G3} />
                </div>
                <div class="w-full h-1/3 p-1 md:p-2">
                  <ImageCard shadowSize="80" imageSrc={G4} />
                </div>
              </div>
              <div class="flex flex-wrap w-1/3">
                <div class="w-full h-1/3 p-1 md:p-2">
                  <ImageCard shadowSize="80" imageSrc={G5} />
                </div>
                <div class="w-full h-2/3 p-1 md:p-2">
                  <ImageCard shadowSize="80" imageSrc={G2} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImageGallery;
