import React from 'react';
import { Link } from 'react-router-dom';
import cameraImg from "../assets/streamline-icon-camera-1@400x400.PNG";
import playlistImg from "../assets/streamline-icon-tracklist-2@400x400.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "../Stylesheets/music.css";

function Music() {
  return (

    <div className='p-16 flex flex-col gap-y-8 justify-evenly md:flex-row md:items-center'>
      <div className='choice-container mx-auto w-4/5 md:w-2/6 p-4 rounded cursor-pointer'>
        <Link to="/music/capture"><img className='w-full md:w-3/4' src={cameraImg} alt="camera-choice"/></Link>
        <h4 className='text-2xl font-medium'>Capture Emotion <FontAwesomeIcon icon={faArrowRight} /></h4>
      </div>
      <div className='choice-container mx-auto w-4/5 md:w-2/6 p-4 rounded cursor-pointer'>
        <Link to="/music/playlist"><img className='w-full md:w-3/4' src={playlistImg} alt="camera-choice"/></Link>
        <h4 className='text-2xl font-medium'>Visit Playlist <FontAwesomeIcon icon={faArrowRight} /></h4>
      </div>
    </div>

  )
}

export {Music}