import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import Col31 from "../../assets/images/col31.jpg";
import Col32 from "../../assets/images/col32.jpg";
import Col33 from "../../assets/images/col33.jpg";

const ThreeColImg = () => {
  return (
    <div className="w-full py-7">
      <div className="mx-auto max-w-6xl py-5">
        <div className="px-6 lg:px-0">
          <h1 className="pt-5 text-[#2B2D42] text-[1.56rem]">
            Finde passende Surfcamps für dein Surflevel
          </h1>
          <p className="pb-5 text-[#2B2D42] text-[1rem]">
            Ganz gleich ob du noch nie auf einem Surfbrett standest oder schon
            Erfahrungen in den Wellen mitbringst - mit dem passenden Surfkurs
            für deine Vorkenntnisse hast du mehr Spaß im Wasser und erreichst
            garantiert das nächste Level!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-6 lg:px-0">
          <ImageCard
            shadowSize="80"
            imageSrc={Col31}
            title="Surfcamps für Anfänger:innen"
            description="Surfe die ersten Wellen deines Lebens und erlebe dieses unbeschreibliche Gefühl"
          />
          <ImageCard
            shadowSize="80"
            imageSrc={Col32}
            title="Surfcamps für Fortgeschrittene"
            description="Surfe grüne Wellen und lerne deine ersten Turns und Manöver"
          />
          <ImageCard
            shadowSize="80"
            imageSrc={Col33}
            title="Surfaris für erfahrene Surfer:innen"
            description="Sei immer zur richtigen Zeit am richtigen Ort und finde deine perfekte Welle"
          />
        </div>
      </div>
    </div>
  );
};

export default ThreeColImg;
