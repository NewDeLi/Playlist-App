import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

export default function PlayList({ playlistName, playlistTracks }) {
  return (
    <div className="Playlist">
      <input defaultValue="New Playlist" />
      <TrackList playlistTracks={playlistTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
