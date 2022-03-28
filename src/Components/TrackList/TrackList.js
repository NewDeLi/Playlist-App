import React from "react";
import Track from "./Track/Track";
import "./Tracklist.css";

export default function TrackList({ searchResults, playlistTracks }) {
  const renderSearchResults = searchResults?.map((searchResult) => {
    return <Track searchResult={searchResult} key={searchResult.id} />;
  });

  const renderPlaylistTracks = playlistTracks?.map((playlistTrack) => {
    return <Track playlistTrack={playlistTrack} key={playlistTrack.id} />;
  });

  return (
    <div className="Tracklist">
      {searchResults ? renderSearchResults : renderPlaylistTracks}
    </div>
  );
}
