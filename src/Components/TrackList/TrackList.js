import React, { useState } from "react";
import Track from "./Track/Track";

export default function TrackList() {
  const [isRemoval, setIsRemoval] = useState(true);

  return (
    <div className="TrackList">
      <Track isRemoval={isRemoval} />
    </div>
  );
}
