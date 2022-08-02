import React from "react";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div>
      <ul>
        <Link to="/surfcamp-europe">
          <li>Surfcamp Europe</li>
        </Link>
        <Link to="/surfcamp-france">
          <li>Surfcamp France</li>
        </Link>
        <Link to="/surfcamp-portugal">
          <li>Surfcamp Portugal</li>
        </Link>
        <Link to="/surfcamp-fuerteventura">
          <li>Surfcamp Fuerteventura</li>
        </Link>
        <Link to="/surfcamp-teneriffa">
          <li>Surfcamp Teneriffa</li>
        </Link>
        <Link to="/surfcamp-spanien">
          <li>Surfcamp Spanien</li>
        </Link>
        <Link to="/active-holidays">
          <li>Active Holidays</li>
        </Link>
        <Link to="/yoga-retreats">
          <li>Yoga Retreats</li>
        </Link>
        <Link to="/hiking-holidays">
          <li>Hiking Holidays</li>
        </Link>
        <Link to="/yoga-retreats-germany">
          <li>Yoga Retreats Germany</li>
        </Link>
        <Link to="/test">
          <li>Test</li>
        </Link>
      </ul>
    </div>
  );
};

export default Links;
