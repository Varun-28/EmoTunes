import React from "react";
import "../Stylesheets/LeftMenu.css";
import { FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";
import TrackList from "./TrackList";
import logo from "../assets/emotunes-logo.svg";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <div className="logo">
          
            <img src={logo} alt="logo" />
         
        </div>

        <i>
          <FaEllipsisH />
        </i>
      </div>

      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <Menu title={"Menu"} listObject={MenuList} />

      <MenuPlayList />

      <TrackList trackName={"Take On Me"} artistName={"A-ha"} />
    </div>
  );
}

export { LeftMenu };
