import React from "react";
import { Link } from "react-router-dom";
import pageNotFound from "../assets/404_page.png";
import "../Stylesheets/components.css";

function PageNotFound() {
  return (
    <div>
      <Link to="/" className="flex items-center justify-center">
        <img
          className="page-not-found w-4/5 md:w-2/5"
          src={pageNotFound}
          alt="page-not-found"
        />
      </Link>
    </div>
  );
}

export { PageNotFound };
