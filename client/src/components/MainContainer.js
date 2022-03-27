import React, { useEffect } from "react";
import "../Stylesheets/MainContainer.css";
import { AudioList } from "./AudioList";

function MainContainer() {
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");

    function changePopularActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changePopularActive));
  }, []);

  return (
    <div className="mainContainer">

      <div className="menuList">
        <ul>
          <li>
            <a href="#">Top Hits</a>
          </li>
          <li>
            <a href="#">Happy</a>
          </li>
          <li>
            <a href="#">Sad</a>
          </li>
          <li>
            <a href="#">Romantic</a>
          </li>
          <li>
            <a href="#">Party</a>
          </li>
          <li>
            <a href="#">Bhakti</a>
          </li>
          <li>
            <a href="#">Old Songs</a>
          </li>
        </ul>
      </div>

      <AudioList />
    </div>
  );
}

export { MainContainer };
