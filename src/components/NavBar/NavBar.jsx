import React, { useState } from "react";
import { Like } from "../../assets/icons/icons";
import Moverii from "../../assets/logo/moverii.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-[90px] max-w-[1240px] mx-auto px-4">
      <div className="flex items-center">
        <h1 className="w-full text-3xl font-bold px-5">
          <img src={Moverii} alt="/" />
        </h1>
        <ul className="hidden md:flex">
          <li className="p-5">FAQs</li>
          <li className="p-5">Kontakt</li>
          <li className="p-5">Blog</li>
          <li className="p-5">Anmelden</li>
        </ul>
      </div>
      <div>
        <div className="flex items-center">
          <span className="px-3">
            <Like size={26} />
          </span>
          <span className="px-5">
            <Like size={26} />
          </span>
          <button className="bg-[#12A3BA] hover:bg-blue-500 text-white font-bold py-1 px-3 rounded-[15px]">
            Registrieren
          </button>
        </div>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <Like size={24} /> : <Like size={24} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r shadow-md bg-[#fff]  ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">
          <img src={Moverii} alt="/" />
        </h1>
        <li className="p-4 border-b border-gray-200">FAQs</li>
        <li className="p-4 border-b border-gray-200">Kontakt</li>
        <li className="p-4 border-b border-gray-200">Blog</li>
        <li className="p-4">Anmelden</li>
      </ul>
    </div>
  );
};

export default NavBar;
