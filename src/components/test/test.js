'use client'
import React, { useState } from 'react';
import './test.css'; // Import custom styles for light reflection animation

const AnimatedGrid = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const gridSize = 10; // Change this to adjust the grid size

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const getGridStyle = (index) => {
    if (hoverIndex === null) return 'bg-blue-200'; // Default background color for all cells

    // Convert the 1D index to 2D grid coordinates
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;

    const hoverRow = Math.floor(hoverIndex / gridSize);
    const hoverCol = hoverIndex % gridSize;

    // Calculate the Euclidean distance between the hovered cell and the current cell
    const distance = Math.sqrt(Math.pow(row - hoverRow, 2) + Math.pow(col - hoverCol, 2));

    // Adjust these distance thresholds for smoother transitions
    if (distance < 1) return 'bg-blue-500'; // Closest
    if (distance < 2) return 'bg-blue-400'; // Second closest
    if (distance < 3) return 'bg-blue-300'; // Third closest
    return 'bg-blue-200'; // Default background for distant cells
  };

  return (
    <div className="w-[100%] h-screen bg-black grid grid-cols-10 gap-2 p-5">
      {[...Array(gridSize * gridSize)].map((_, index) => (
        <div
          key={index}
          className={`w-full h-20 ${getGridStyle(index)} 
            hover:border-blue-500 transition-all duration-300 ease-in-out`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedGrid;
