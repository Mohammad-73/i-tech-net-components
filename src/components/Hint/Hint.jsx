import React from "react";
import { BiLike, BiRightArrowAlt } from "react-icons/bi";

const Hint = () => {
  return (
    <div className="flex flex-col items-center">
      <span className="bg-custom-orange p-7 m-5 rounded-full text-white">
        <BiLike size={38} />
      </span>
      <h1 className="font-bold text-lg">100% Rückerstattung</h1>
      <p className="text-center text-gray-600">
        Transparent und stressfrei! Erhalte mit unseren flexiblen
        Stornierungsbedingungen den vollen Betrag zurückerstattet.
      </p>
      <p className="flex text-gray-600">
        Zu den Details
        <span>
          <BiRightArrowAlt size={30} />
        </span>
      </p>
    </div>
  );
};

export default Hint;
