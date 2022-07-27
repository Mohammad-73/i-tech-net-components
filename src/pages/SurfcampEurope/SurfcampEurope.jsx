import React from "react";
import Description from "../../components/Description/Description";
import Hero from "../../components/Hero/Hero";
import HintSection from "../../components/HintSection/HintSection";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import ListAndImage from "../../components/ListAndImage/ListAndImage";
import NavBar from "../../components/NavBar/NavBar";

const SurfcampEurope = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HintSection />
      <Description />
      <ImageGallery />
      <ListAndImage />
    </div>
  );
};

export default SurfcampEurope;
