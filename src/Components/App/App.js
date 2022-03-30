import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import React, { useState } from "react";
import { SpotifySave, SpotifySearch, getAccesToken } from "../../util/Spotify";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const [playlistName, setPlaylistName] = useState("New Playlist");

  const [playlistTracks, setPlaylistTracks] = useState([]);

  const handleAdd = (id) => {
    const newPlayListTrack = searchResults.filter(
      (searchResult) => searchResult.id === id
    )[0];
    playlistTracks.some((x) => x.id === newPlayListTrack.id)
      ? alert("already added to playlist")
      : setPlaylistTracks([...playlistTracks, newPlayListTrack]);
    console.log(playlistTracks);
  };

  const handleRemove = (id) => {
    setPlaylistTracks(
      playlistTracks.filter((playlistTrack) => playlistTrack.id !== id)
    );
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlayList = async () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    await SpotifySave(playlistName, trackUris);
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
  };

  const search = async (searchTerm) => {
    const newSearchResults = await SpotifySearch(searchTerm);
    setSearchResults(newSearchResults);
  };

  getAccesToken()

  return (
    <div className="App">
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <SearchBar onSearch={search} />
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
          onUpdate={updatePlaylistName}
          onSave={savePlayList}
        />
      </div>
    </div>
  );
}

export default App;
