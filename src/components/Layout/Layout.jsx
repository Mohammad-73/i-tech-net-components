import React from "react";
import { Routes, Route } from "react-router-dom";
import ActiveHolidays from "../../pages/ActiveHolidays/ActiveHolidays";
import SurfcampEurope from "../../pages/SurfcampEurope/SurfcampEurope";
import SurfcampFuerteventura from "../../pages/SurfcampFuerteventura/SurfcampFuerteventura";
import SurfcampsFrance from "../../pages/SurfcampsFrance/SurfcampsFrance";
import SurfcampSpanien from "../../pages/SurfcampSpanien/SurfcampSpanien";
import SurfcampsPortugal from "../../pages/SurfcampsPortugal/SurfcampsPortugal";
import SurfcampTeneriffa from "../../pages/SurfcampTeneriffa/SurfcampTeneriffa";
import Test from "../../pages/Test/Test";
import Links from "../Links/Links";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Links />} />
      <Route path="/surfcamp-europe" element={<SurfcampEurope />} />
      <Route path="/surfcamp-france" element={<SurfcampsFrance />} />
      <Route path="/surfcamp-portugal" element={<SurfcampsPortugal />} />
      <Route
        path="/surfcamp-fuerteventura"
        element={<SurfcampFuerteventura />}
      />
      <Route path="/surfcamp-teneriffa" element={<SurfcampTeneriffa />} />
      <Route path="/surfcamp-spanien" element={<SurfcampSpanien />} />
      <Route path="/active-holidays" element={<ActiveHolidays />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default Layout;
