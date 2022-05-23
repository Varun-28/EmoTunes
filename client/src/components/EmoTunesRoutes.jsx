import { Routes, Route } from "react-router-dom";
import { RequiresAuth, PageNotFound } from "./Components.js";
import { Choice, Capture, Playlist, Home, Login, Signup, SelectImage } from "../pages/Pages";

export function EmoTunesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/choice"
        element={
          <RequiresAuth>
            <Choice />
          </RequiresAuth>
        }
      />
      <Route
        path="/choice/capture"
        element={
          <RequiresAuth>
            <Capture />
          </RequiresAuth>
        }
      />
      <Route
        path="/choice/playlist"
        element={
          <RequiresAuth>
            <Playlist />
          </RequiresAuth>
        }
      />
      <Route path="/choice/select-image" element={<SelectImage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
