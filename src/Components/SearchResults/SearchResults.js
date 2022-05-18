import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchResults.css";

export default function SearchResults({ searchResults, onAdd, onSearch }) {
  return (
    <div className="SearchResults">
      <SearchBar onSearch={onSearch} />
      <Tracklist searchResults={searchResults} onAdd={onAdd} />
    </div>
  );
}
