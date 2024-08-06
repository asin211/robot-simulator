import React from "react";
import "./Controls.css";

const Controls = ({ onMoveForward, onTurnLeft, onTurnRight }) => {
  return (
    <div className="controls">
      <button onClick={onTurnLeft}>Turn Left</button>
      <button onClick={onMoveForward}>Move Forward</button>
      <button onClick={onTurnRight}>Turn Right</button>
    </div>
  );
};

export default Controls;
