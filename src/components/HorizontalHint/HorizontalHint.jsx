import React from "react";
import { BiLike } from "react-icons/bi";

const HorizontalHint = () => {
  return (
    <div className="flex items-center w-[600px]">
      <span className="text-orange-400 p-7 m-5 rounded-full text-white">
        <BiLike size={58} />
      </span>
      <div className="flex flex-col">
        <h1 className="font-bold text-lg">100% Rückerstattung</h1>
        <p className="text-left text-gray-600">
          Transparent und stressfrei! Erhalte mit unseren flexiblen
          Stornierungsbedingungen den vollen Betrag zurückerstattet.
        </p>
      </div>
    </div>
  );
};

export default HorizontalHint;
