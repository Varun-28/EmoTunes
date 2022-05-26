import { Routes, Route } from "react-router-dom";
import { RequiresAuth, PageNotFound } from "./Components.js";
import {
	Choice,
	Playlist,
	Home,
	Login,
	Signup,
	SelectImage,
} from "../pages/Pages";
import { PrivateRoute } from "./PrivateRoute.js";

export function EmoTunesRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route
				path="/login"
				element={
					<PrivateRoute>
						<Login />
					</PrivateRoute>
				}
			/>
			<Route
				path="/signup"
				element={
					<PrivateRoute>
						<Signup />
					</PrivateRoute>
				}
			/>
			<Route
				path="/choice"
				element={
					// <RequiresAuth>
					<Choice />
					// </RequiresAuth>
				}
			/>
			<Route
				path="/choice/capture"
				element={
					// <RequiresAuth>
					<SelectImage />
					// </RequiresAuth>
				}
			/>
			<Route
				path="/choice/playlist"
				element={
					// <RequiresAuth>
					<Playlist />
					// </RequiresAuth>
				}
			/>
			<Route path="*" element={<PageNotFound />} />
		</Routes>
	);
}
