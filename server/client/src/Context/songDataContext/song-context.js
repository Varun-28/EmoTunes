import { createContext, useContext, useState } from "react";
import { useInitialsongs } from "./useInitialsongs";

const SongContext = createContext();

const SongProvider = ({ children }) => {
	const { songData } = useInitialsongs();
	const [songsCategory, setsongsCategory] = useState({ category: "all" });

	const songCategoryHandler = (selectedCategory) => {
		setsongsCategory((val) => ({ ...val, category: selectedCategory }));
	};

	const filteredsongs =
		songsCategory.category === "all"
			? songData
			: songData.filter((song) => song.mood === songsCategory.category);

	return (
		<SongContext.Provider
			value={{ songsCategory, songCategoryHandler, filteredsongs }}
		>
			{children}
		</SongContext.Provider>
	);
};

const useSong = () => useContext(SongContext);

export { useSong, SongProvider };
