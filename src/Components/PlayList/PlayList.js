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
      <div className="PlaylistName">
        <input placeholder={playlistName} onChange={handleNameChange} />
        <button className="Playlist-save" onClick={onSave}>
          SAVE TO SPOTIFY
        </button>
      </div>
      <Tracklist playlistTracks={playlistTracks} onRemove={onRemove} />
    </div>
  );
}
