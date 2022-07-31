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
        <Link to="/test">
          <li>Test</li>
        </Link>
      </ul>
    </div>
  );
};

export default Links;
