import React, { useEffect, useState } from "react";
import "../Stylesheets/MainContainer.css";
import { MusicPlayer } from "./MusicPlayer";
import { useSong } from "../Context/songDataContext/song-context";
import { LoaderAnimation } from "./LoaderAnimation";

function AudioList() {
	const { filteredsongs } = useSong();
	const [curerntSong, setCurrentsong] = useState({});
	const [showPlayer, setShowPlayer] = useState(false);

	return (
		<div className="AudioList">
			<div className="songsContainer">
				{filteredsongs.length === 0 ? (
					<LoaderAnimation />
				) : (
					filteredsongs.map((song) => (
						<div
							className="songs"
							key={song.id}
							onClick={() => {
								setCurrentsong({ ...song });
								setShowPlayer(true);
							}}
						>
							<div className="count">
								<p>{`#${song.id}`}</p>
							</div>
							<div className="song">
								<div className="imgBox">
									<img src={song.img} alt="" />
								</div>
								<div className="section">
									<div className="hits">
										<p className="hit">{song.title}</p>

										<p className="song-singer">{song.singer}</p>
									</div>
								</div>
							</div>
						</div>
					))
				)}
			</div>
			{!showPlayer ? (
				<div>Select the song to Listen to your music the way you like!</div>
			) : (
				<MusicPlayer curerntSong={curerntSong} />
			)}
		</div>
	);
}

export { AudioList };
