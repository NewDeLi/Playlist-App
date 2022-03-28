import React, { useState } from "react";
import "./Track.css";

export default function Track({ searchResult, playlistTrack }) {
  const [isRemoval] = useState(searchResult ? false : true);

  const renderAction = isRemoval ? (
    <button className="Track-action">-</button>
  ) : (
    <button className="Track-action">+</button>
  );

  return searchResult ? (
    <div className="Track">
      <li className="Track-information">
        <h3>{searchResult.name}</h3>
        <p>
          {searchResult.artist}||{searchResult.album}
        </p>
      </li>
      {renderAction}
    </div>
  ) : (
    <div className="Track">
      <li className="Track-information">
        <h3>{playlistTrack.name}</h3>
        <p>
          {playlistTrack.artist}||{playlistTrack.album}
        </p>
      </li>
      {renderAction}
    </div>
  );
}
