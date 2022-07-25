import React from "react";
import { Link } from "react-router-dom";
const Links = () => {
  return (
    <div>
      <ul>
        <Link to="/surfcamp-europe">
          <li>Surfcamp Europe</li>
        </Link>
      </ul>
    </div>
  );
};

export default Links;
