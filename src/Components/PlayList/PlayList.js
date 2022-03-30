import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./Playlist.css";

export default function Playlist({
  playlistName,
  playlistTracks,
  onRemove,
  onUpdate,
  onSave,
}) {
  const handleNameChange = (event) => {
    event.preventDefault();
    const newPlaylistName = event.target.value;
    onUpdate(newPlaylistName);
  };
  return (
    <div className="Playlist">
      <input defaultValue={playlistName} onChange={handleNameChange} />
      <Tracklist playlistTracks={playlistTracks} onRemove={onRemove} />
      <button className="Playlist-save" onClick={onSave}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}
