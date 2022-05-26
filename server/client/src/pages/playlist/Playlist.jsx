import { React, useState } from "react";
import { LeftMenu } from "../../components/LeftMenu.js";
import { MainContainer } from "../../components/MainContainer.js";
import "./playlist.css";

function Playlist() {
  const [search, setSearch] = useState("");

  return (
    <div className="playlist">
      <LeftMenu setSearch={setSearch} search={search} />
      <MainContainer search={search} />
    </div>
  );
}

export { Playlist };
