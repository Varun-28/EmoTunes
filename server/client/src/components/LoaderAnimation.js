import React from "react";
import { Audio } from "react-loader-spinner";
import "../Stylesheets/components.css";

function LoaderAnimation() {
  return (
    <div className="loader-wrapper">
      <Audio type="audio" color="#E60965" height={100} width={100} />
    </div>
  );
}

export { LoaderAnimation };
