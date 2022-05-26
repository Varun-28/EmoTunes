import React from "react";
import { useSong } from "../Context/songDataContext/song-context";
import "../Stylesheets/MainContainer.css";
import { AudioList } from "./AudioList";

function MainContainer({search}) {
	const { songsCategory, songCategoryHandler } = useSong();
	function songHandler(e) {
		if (e.target.checked) {
			songCategoryHandler(e.target.value);
		}
	}
	return (
		<div className="mainContainer">
			<div className="menuList">
				<label
					className={`radio-label ${
						songsCategory.category === "all" && "radio-checked"
					}`}
					htmlFor="all"
				>
					<input
						type="radio"
						id="all"
						value="all"
						name="video-category"
						onChange={songHandler}
					/>
					All
				</label>

				<label
					className={`radio-label ${
						songsCategory.category === "Happy" && "radio-checked"
					}`}
					htmlFor="Happy"
				>
					<input
						type="radio"
						id="Happy"
						value="Happy"
						name="video-category"
						onChange={songHandler}
					/>
					Happy
				</label>
				<label
					className={`radio-label ${
						songsCategory.category === "Sad" && "radio-checked"
					}`}
					htmlFor="Sad"
				>
					<input
						type="radio"
						id="Sad"
						value="Sad"
						name="video-category"
						onChange={songHandler}
					/>
					Sad
				</label>
				<label
					className={`radio-label ${
						songsCategory.category === "Neutral" && "radio-checked"
					}`}
					htmlFor="Neutral"
				>
					<input
						type="radio"
						id="Neutral"
						value="Neutral"
						name="video-category"
						onChange={songHandler}
					/>
					Neutral
				</label>
				<label
					className={`radio-label ${
						songsCategory.category === "Angry" && "radio-checked"
					}`}
					htmlFor="Angry"
				>
					<input
						type="radio"
						id="Angry"
						value="Angry"
						name="video-category"
						onChange={songHandler}
					/>
					Angry
				</label>
				<label
					className={`radio-label ${
						songsCategory.category === "Surprise" && "radio-checked"
					}`}
					htmlFor="Surprise"
				>
					<input
						type="radio"
						id="Surprise"
						value="Surprise"
						name="video-category"
						onChange={songHandler}
					/>
					Surprise
				</label>
			</div>

			<AudioList search={search} />
		</div>
	);
}

export { MainContainer };
