import React from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const handleSearch = (event) => {
    event.preventDefault();
    const newSearch = event.target.value;
    onSearch(newSearch);
  };
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleSearch}
      />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
}
