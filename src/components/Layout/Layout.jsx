import React from "react";
import { Routes, Route } from "react-router-dom";
import SurfcampEurope from "../../pages/SurfcampEurope/SurfcampEurope";
import Links from "../Links/Links";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Links />} />
      <Route path="/surfcamp-europe" element={<SurfcampEurope />} />
    </Routes>
  );
};

export default Layout;
