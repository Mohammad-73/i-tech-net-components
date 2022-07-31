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
        <div className="my-7 px-6 lg:px-0">
          <h1 className="text-[1.56rem] text-[#2B2D42] font-bold">
            Entdecke Surfcamps mit der passenden Atmosphäre
          </h1>
          <p className="text-[1rem] text-[#2B2D42]">
            Damit dein Surfurlaub zu dem ersehnten Traumurlaub wird, ist die
            Atmosphäre im Surfcamp entscheidend. Finde jetzt das Surfcamps, das
            zu dir und deinen Wünschen passt:
          </p>
        </div>
        <section className="overflow-hidden text-gray-700">
          <div className="container py-2 mx-auto">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-full px-6 lg:px-0 lg:w-1/3 lg:flex-wrap">
                <div className="w-full h-2/5 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={G1}
                    title="Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents"
                  />
                </div>
                <div className="w-full h-3/5 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={G2}
                    title="Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full px-6 lg:px-0 lg:w-1/3 lg:flex-wrap">
                <div className="w-full h-3/5 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={G3}
                    title="Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents"
                  />
                </div>
                <div className="w-full h-2/5 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={G4}
                    title="Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full px-6 lg:px-0 lg:w-1/3 lg:flex-wrap">
                <div className="w-full h-2/5 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={G5}
                    title="Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents"
                  />
                </div>
                <div className="w-full h-3/5 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={G2}
                    title="Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents"
                  />
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
