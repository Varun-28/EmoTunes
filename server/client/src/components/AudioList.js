import React, { useState } from "react";
import "../Stylesheets/MainContainer.css";
import { MusicPlayer } from "./MusicPlayer";
import { useSong } from "../Context/songDataContext/song-context";
import { LoaderAnimation } from "./LoaderAnimation";

function AudioList({ search }) {
	const { filteredsongs } = useSong();
	const [curerntSong, setCurrentsong] = useState({});
	const [showPlayer, setShowPlayer] = useState(false);

	const searchedSongs = filteredsongs.filter(
		(song) =>
			song.title.toLowerCase().includes(search.toLowerCase()) ||
			song.singer.toLowerCase().includes(search.toLowerCase())
	);
	return (
		<div className="AudioList">
			<div className="songsContainer">
				{filteredsongs.length === 0 && searchedSongs.length === 0 ? (
					<LoaderAnimation />
				) : searchedSongs.length === 0 ? (
					<p className="text-center mt-2 text-lg">No Results Found! 😵</p>
				) : (
					searchedSongs.map((song) => (
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
				<div className="empty-msg">
					Select the song to Listen to your music the way you like!
				</div>
			) : (
				<MusicPlayer curerntSong={curerntSong} />
			)}
		</div>
	);
}

export { AudioList };
