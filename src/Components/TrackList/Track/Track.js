import React, { useState } from "react";
import "./Track.css";

export default function Track({
  searchResult,
  playlistTrack,
  onRemove,
  onAdd,
}) {
  const [isRemoval] = useState(searchResult ? false : true);

  const renderAction = isRemoval ? (
    <button className="Track-action" onClick={() => onRemove(playlistTrack.id)}>
      -
    </button>
  ) : (
    <button className="Track-action" onClick={() => onAdd(searchResult.id)}>
      +
    </button>
  );

  return searchResult ? (
    <div className="Track">
      <li className="Track-information">
        <h3>{searchResult.name}</h3>
        <p>
          {searchResult.artist}||{searchResult.album}
        </p>
      </li>
      <img
        src={searchResult.image}
        alt="album cover "
        height="90vh"
        width="90vw"
      />
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
