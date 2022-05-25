import React from "react";
import "../Stylesheets/LeftMenu.css";
import { BiSearchAlt } from "react-icons/bi";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";

function LeftMenu({ setSearch, search }) {
  return (
    <div className="leftMenu">
      <div className="searchBox">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <Menu title={"Menu"} listObject={MenuList} />
    </div>
  );
}

export { LeftMenu };
