import React from "react";

const Hero = () => {
  return (
    <header className="w-full h-96 bg-hero-portugal bg-cover bg-center flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-[12rem] text-center text-4xl text-white font-bold drop-shadow-lg">
          Surface in Portugal
        </h1>
        <p className="mt-4 text-center text-lg text-white drop-shadow-lg">
          Erlebe die debesten Wellen Europas
        </p>
      </div>
    </header>
  );
};

export default Hero;
