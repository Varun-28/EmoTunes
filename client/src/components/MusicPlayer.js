import React from "react";
import ReactAudioPlayer from "react-audio-player";
import "../Stylesheets/MusicPlayer.css";
function MusicPlayer({ curerntSong }) {
	return (
		<div className="music-player">
			<img className="selected-img" src={curerntSong.img} alt="song-pic" />
			<div>
				<div className="song-player-wrapper">
					<p>
						<span className="currentsong-title">{curerntSong.title}</span>
						<span className="currentsong-singer">({curerntSong.singer})</span>
					</p>
					<ReactAudioPlayer src={curerntSong.song} autoPlay controls />
				</div>
			</div>
		</div>
	);
}

export { MusicPlayer };
