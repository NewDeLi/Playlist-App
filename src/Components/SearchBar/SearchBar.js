import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleTermChange = (event) => {
    event.preventDefault();
    const newSearch = event.target.value;
    setSearchTerm(newSearch);
  };
  const search = () => {
    onSearch(searchTerm).then(
      (document.getElementById("inputSearch").value = "")
    );
  };
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
        id="inputSearch"
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}
