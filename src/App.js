import React, { useState, useEffect } from "react";
import "./App.css";
import Grid from "./components/grid/Grid";
import Controls from "./components/controls/Controls";

function App() {
  const gridSize = 5;
  const [robotX, setRobotX] = useState(0);
  const [robotY, setRobotY] = useState(0);
  const [robotDirection, setRobotDirection] = useState("east");

  const generateGrid = () => {
    const grid = [];
    for (let y = 0; y < gridSize; y++) {
      const row = [];
      for (let x = 0; x < gridSize; x++) {
        row.push({ x, y, hasRobot: x === robotX && y === robotY });
      }
      grid.push(row);
    }
    return grid;
  };

  const updateGrid = () => {
    setGrid(generateGrid());
  };

  const rotateLeft = () => {
    const directions = ["north", "west", "south", "east"];
    const currentIndex = directions.indexOf(robotDirection);
    const newIndex = (currentIndex + 1) % directions.length;
    setRobotDirection(directions[newIndex]);
    updateGrid();
  };

  const rotateRight = () => {
    const directions = ["north", "east", "south", "west"];
    const currentIndex = directions.indexOf(robotDirection);
    const newIndex = (currentIndex + 1) % directions.length;
    setRobotDirection(directions[newIndex]);
    updateGrid();
  };

  const moveForward = () => {
    switch (robotDirection) {
      case "north":
        if (robotY > 0) setRobotY(robotY - 1);
        break;
      case "east":
        if (robotX < gridSize - 1) setRobotX(robotX + 1);
        break;
      case "south":
        if (robotY < gridSize - 1) setRobotY(robotY + 1);
        break;
      case "west":
        if (robotX > 0) setRobotX(robotX - 1);
        break;
      default:
        break;
    }
    updateGrid();
  };

  const [grid, setGrid] = useState(generateGrid());

  useEffect(() => {
    updateGrid();
  }, [robotX, robotY, robotDirection]);

  return (
    <div className="container">
      <h1 className="heading">Bellroy Robot Simulator</h1>
      <div className="direction-label">North</div>
      <div className="grid-wrapper">
        <div className="direction-label">West</div>
        <Grid grid={grid} robotDirection={robotDirection} />
        <div className="direction-label">East</div>
      </div>
      <div className="direction-label">South</div>
      <br />
      <Controls
        onMoveForward={moveForward}
        onTurnLeft={rotateLeft}
        onTurnRight={rotateRight}
      />
      <p>
        Robot Position: ({robotX}, {robotY}) facing {robotDirection}
      </p>
    </div>
  );
}

export default App;
