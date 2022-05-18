import "./App.css";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import React, { useState, useEffect } from "react";
import { SpotifySave, SpotifySearch, getAccesToken } from "../../util/Spotify";
import ReactLoading from "react-loading";
import { useLocalStorage } from "../../util/useLocalStorage";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const [playlistName, setPlaylistName] = useState("Add new Playlist");

  const [playlistTracks, setPlaylistTracks] = useState([]);

  const [user, setUser] = useState("");

  // useLocalStorage([
  //   {
  //     id: 1,
  //     name: "testname",
  //     artist: "testartist",
  //     album: "testalbum",
  //     uri: "testuri",
  //     image: "testimage",
  //   },
  // ]);

  const [isLoading, setIsLoading] = useState(undefined);

  useEffect(() => {
    setUser(window.location.hash);
  }, []);

  const handleAdd = (id) => {
    const newPlayListTrack = searchResults.filter(
      (searchResult) => searchResult.id === id
    )[0];
    playlistTracks?.some((x) => x.id === newPlayListTrack.id)
      ? alert("already added to playlist")
      : setPlaylistTracks([...playlistTracks, newPlayListTrack]);
    setSearchResults(
      searchResults.filter((searchResult) => searchResult.id !== id)
    );
  };

  const handleRemove = (id) => {
    setPlaylistTracks(
      playlistTracks.filter((playlistTrack) => playlistTrack.id !== id)
    );
    setSearchResults([
      playlistTracks.filter((playlistTrack) => playlistTrack.id === id)[0],
      ...searchResults,
    ]);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlayList = async () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    await SpotifySave(playlistName, trackUris);
    setPlaylistName("New Playlist");
    setPlaylistTracks([]);
    alert("saved to spotify account");
  };

  const search = async (searchTerm) => {
    const newSearchResults = await SpotifySearch(searchTerm);
    setSearchResults(newSearchResults);
  };

  const handleLoginClick = async () => {
    await getAccesToken();
    setIsLoading(true);
  };

  return (
    <>
      {isLoading ? (
        <ReactLoading
          type={"cylon"}
          color={"#6c41ec"}
          height={100}
          width={100}
          className="loading"
        />
      ) : (
        <div className="App">
          <h1>
            Ja<span className="highlight">mmm</span>ing
          </h1>
          {user === "" ? (
            <div className="login">
              <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="Spotify-Logo"
              />
              <button type="submit" onClick={() => handleLoginClick()}>
                Login with Spotify
              </button>
            </div>
          ) : (
            <div className="lists-container">
              <SearchResults
                searchResults={searchResults}
                setSearchResults={setSearchResults}
                onAdd={handleAdd}
                onSearch={search}
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
          )}
        </div>
      )}
    </>
  );
}

export default App;
