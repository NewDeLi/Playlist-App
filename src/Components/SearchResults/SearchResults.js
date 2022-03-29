import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import "./SearchResults.css";

export default function SearchResults({ searchResults, onAdd }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <Tracklist searchResults={searchResults} onAdd={onAdd} />
    </div>
  );
}
