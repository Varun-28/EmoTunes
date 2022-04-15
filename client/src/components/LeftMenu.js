import React from "react";
import "../Stylesheets/LeftMenu.css";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlayList } from "./MenuPlayList";

function LeftMenu() {
  return (
    <div className="leftMenu">
    
      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <Menu title={"Menu"} listObject={MenuList} />
      <MenuPlayList />
    </div>
  );
}

export { LeftMenu };