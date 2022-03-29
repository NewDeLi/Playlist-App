import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [searchResults, setSearchResults] = useState([
    { name: "name", artist: "artist", album: "album", id: uuidv4() },
    { name: "name", artist: "artist", album: "album", id: uuidv4() },
    { name: "name", artist: "artist", album: "album", id: uuidv4() },
  ]);

  const [playlistName, setPlaylistName] = useState("name of playlist");

  const [playlistTracks, setPlaylistTracks] = useState([
    { name: "playname", artist: "artist", album: "album", id: uuidv4() },
    { name: "name", artist: "artist", album: "album", id: uuidv4() },
    { name: "name", artist: "artist", album: "album", id: uuidv4() },
  ]);

  const handleAdd = (id) => {
    const newPlayListTrack = searchResults?.filter(
      (searchResult) => searchResult.id === id
    )[0];
    setPlaylistTracks([...playlistTracks, newPlayListTrack]);
  };

  const handleRemove = (id) => {
    console.log(searchResults);
    setPlaylistTracks(
      playlistTracks?.filter((playlistTrack) => playlistTrack.id !== id)
    );
  };

  return (
    <div className="App">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults
          searchResults={searchResults}
          setSearchResults={setSearchResults}
          onAdd={handleAdd}
        />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          setPlaylistTracks={setPlaylistTracks}
          onRemove={handleRemove}
        />
      </div>
    </div>
  );
}

export default App;
