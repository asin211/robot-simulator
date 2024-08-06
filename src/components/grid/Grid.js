import React from "react";
import "./Grid.css";

const Grid = ({ grid, robotDirection }) => {
  return (
    <div className="grid-container">
      {grid.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <div key={`${cell.x}-${cell.y}`} className="grid-cell">
            {cell.hasRobot && <div className={`robot ${robotDirection}`}></div>}
          </div>
        ))
      )}
    </div>
  );
};

export default Grid;
