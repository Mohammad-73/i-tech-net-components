import React from "react";
import { Routes, Route } from "react-router-dom";
import SurfcampEurope from "../../pages/SurfcampEurope/SurfcampEurope";
import SurfcampsFrance from "../../pages/SurfcampsFrance/SurfcampsFrance";
import Links from "../Links/Links";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Links />} />
      <Route path="/surfcamp-europe" element={<SurfcampEurope />} />
      <Route path="/surfcamp-france" element={<SurfcampsFrance />} />
    </Routes>
  );
};

export default Layout;
