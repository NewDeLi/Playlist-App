import React from "react";
import Track from "./Track/Track";
import "./Tracklist.css";

export default function Tracklist({
  searchResults,
  playlistTracks,
  onAdd,
  onRemove,
}) {
  const renderSearchResults = searchResults?.map((searchResult) => {
    return (
      <Track searchResult={searchResult} key={searchResult.id} onAdd={onAdd} />
    );
  });

  const renderPlaylistTracks = playlistTracks?.map((playlistTrack) => {
    return (
      <Track
        playlistTrack={playlistTrack}
        key={playlistTrack.id}
        onRemove={onRemove}
      />
    );
  });

  return (
    <div className="Tracklist">
      {searchResults ? renderSearchResults : renderPlaylistTracks}
    </div>
  );
}
