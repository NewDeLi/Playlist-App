import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../Playlist/Playlist";
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
  

  return (
    <div className="App">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <SearchBar />
      <div className="App-playlist">
        <SearchResults searchResults={searchResults} />
        <PlayList playlistName={playlistName} playlistTracks={playlistTracks} />
      </div>
    </div>
  );
}

export default App;
