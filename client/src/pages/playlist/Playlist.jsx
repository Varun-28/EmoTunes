import React from 'react';
import {LeftMenu} from "../../components/LeftMenu.js";
import {MainContainer} from "../../components/MainContainer.js";
import {RightMenu} from "../../components/RightMenu.js";
import "./playlist.css";

function Playlist() {
  return (
    <div className='playlist'>
        <LeftMenu />
        <MainContainer />
        <RightMenu />

        <div className="background"></div>
    </div>
  )
}

export {Playlist};