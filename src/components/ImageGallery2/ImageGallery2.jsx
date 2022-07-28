import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import G21 from "../../assets/images/G21.jpg";
import G22 from "../../assets/images/G22.jpg";
import G23 from "../../assets/images/G23.jpg";
import G24 from "../../assets/images/G24.jpg";
import G25 from "../../assets/images/G25.jpg";
import G26 from "../../assets/images/G26.jpg";

const ImageGallery2 = () => {
  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl ">
        <div className="my-7 px-6 lg:px-0">
          <h1 className="text-[1.56rem] text-[#2B2D42]">
            Beliebte Kategorien für einen Surfurlaub in Europa
          </h1>
        </div>
        <section className="overflow-hidden text-gray-700">
          <div className="container py-2 mx-auto ">
            <div className="flex flex-wrap -m-1 md:-m-2">
              <div className="flex flex-wrap w-full px-6 lg:px-0 lg:w-1/3 lg:flex-wrap">
                <div className="w-full h-3/5 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={G21}
                    title="Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents"
                    description="Entdecke Surfcamps für den kleinen Geldbeutel - unvergessliche Momente inklusive!"
                  />
                </div>
                <div className="w-full h-2/5 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={G22}
                    title="Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents"
                    description="Surfurlaub zum Wohlfühlen - Verbinde Komfort und Erholung mit Abenteuer in den Wellen!"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full px-6 lg:px-0 lg:w-1/3 lg:flex-wrap">
                <div className="w-full h-2/5 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={G23}
                    title="Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents"
                    description="Raus aus dem Alltag rein in die Natur - tauche ein in eine eigene Welt und laufe barfuß zum Strand!"
                  />
                </div>
                <div className="w-full h-3/5 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={G24}
                    title="Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents"
                    description="Traumhafte Strände und vielfältige Landschaften - Europa hat so einiges zu bieten!"
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full px-6 lg:px-0 lg:w-1/3 lg:flex-wrap">
                <div className="w-full h-3/5 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={G25}
                    title="Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents"
                    description="Surfcamps mit flexibler Buchung und 100% Rückerstattung - Urlaub buchen ohne Risiko!"
                  />
                </div>
                <div className="w-full h-2/5 p-1 md:p-2">
                  <ImageCard
                    shadowSize="80"
                    imageSrc={G26}
                    title="Surfcamps in Europa: Entdecke die Vielfalt unseres Kontinents"
                    description="Surfurlaub zum Wohlfühlen - Verbinde Komfort und Erholung mit Abenteuer in den Wellen!"
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

export default ImageGallery2;
