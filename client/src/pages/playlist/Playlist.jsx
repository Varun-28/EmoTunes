import React from 'react';
import {LeftMenu} from "../../components/LeftMenu.js";
import {MainContainer} from "../../components/MainContainer.js";
import "./playlist.css";

function Playlist() {
  return (
    <div className='playlist'>
        <LeftMenu />
        <MainContainer />
    </div>
  )
}

export {Playlist};