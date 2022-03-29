import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";

export default function Playlist({ playlistName, playlistTracks, onRemove }) {
  return (
    <div className="Playlist">
      <input defaultValue="New Playlist" />
      <Tracklist playlistTracks={playlistTracks} onRemove={onRemove} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
