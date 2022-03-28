import React from "react";

export default function Track({ isRemoval }) {
  const renderAction = () => {
    return isRemoval ? (
      <button className="Track-action">-</button>
    ) : (
      <button className="Track-action">+</button>
    );
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>Titel</h3>
        <p>Content</p>
      </div>
      {renderAction()}
    </div>
  );
}
