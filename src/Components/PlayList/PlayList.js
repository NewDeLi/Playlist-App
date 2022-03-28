import React from "react";
import TrackList from "../TrackList/TrackList";

export default function PlayList() {
  return (
    <div class="Playlist">
      <input defaultValue="New Playlist" />
      <TrackList />
      <button class="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
