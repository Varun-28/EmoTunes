import { useState, useEffect } from "react";
import axios from "axios";

function useInitialsongs() {
	const [songData, setSongData] = useState([]);

	useEffect(() => {
		try {
			(async () => {
				const response = await axios.get(
					"https://music-api-febce-default-rtdb.firebaseio.com/music-api/AIzaSyDJxcEogT0RieGB6QBsiMQbQ_hj-xIuN34.json"
				);
				const songsArray = response.data;
				setSongData([...songsArray]);
			})();
		} catch (err) {
			console.log(err);
		}
	}, []);

	return { songData };
}

export { useInitialsongs };
