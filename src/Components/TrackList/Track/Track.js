import React, { useState } from "react";
import "./Track.css";
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";

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

  const handlePlayCircleClick = () => {
    return !searchResult.preview ? alert("sorry no preview available") : "";
  };

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
      <a
        href={searchResult.preview}
        target="_blank"
        rel="noreferrer"
        onClick={handlePlayCircleClick}
      >
        <PlayCircleFilled />
      </a>
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
      <img
        src={playlistTrack.image}
        alt="album cover "
        height="90vh"
        width="90vw"
      />
      {renderAction}
    </div>
  );
}
