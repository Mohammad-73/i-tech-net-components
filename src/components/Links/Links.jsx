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
      </ul>
    </div>
  );
};

export default Links;
