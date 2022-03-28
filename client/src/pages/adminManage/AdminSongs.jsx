import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/theme-context.js";

function AdminSongs() {
	const { theme } = useTheme();

	return (
		<div className="admin-song-container">
			<form className="song-form">
				<label htmlFor="song-name">
					Song Name
					<input type="text" className="song-input" aria-label="true" />
				</label>
				<label htmlFor="artist-name">
					Artist Name
					<input type="text" className="song-input" aria-label="true" />
				</label>
				<label htmlFor="song-link">
					Song Link
					<input type="text" className="song-input" aria-label="true" />
				</label>
				<label htmlFor="song-image">
					Song Image
					<input type="text" className="song-input" aria-label="true" />
				</label>
				<label htmlFor="song-category">
					Category Name
					<input type="text" className="song-input" aria-label="true" />
				</label>
				<button
					className="hero-btn px-4 py-2 mx-auto md:mx-0"
					style={{
						backgroundColor: `${theme.mode.secondaryColor}`,
						color: `${theme.mode.bgColor}`,
					}}
				>
					<Link to="">Add Song</Link>
				</button>
			</form>
		</div>
	);
}

export { AdminSongs };
