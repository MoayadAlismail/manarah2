'use client'
import { Coolshape } from "coolshapes-react";
import { useEffect, useState } from "react";

const CoolShapesBackground = () => {
  const shapes = [
    { type: "star", size: 100 },
    { type: "ellipse", size: 150 },
    { type: "triangle", size: 120 },
    { type: "rectangle", size: 180 },
    { type: "pentagon", size: 90 },
    // Add more shapes as needed
  ];

  // State to hold the positions of the shapes
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  // Function to generate random positions based on the full document size
  const getRandomPosition = (size: number, width: number, height: number) => {
    const x = Math.random() * (width - size);
    const y = Math.random() * (height - size);
    return { x, y };
  };

  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof document !== "undefined") {
      const width = document.body.scrollWidth;
      const height = document.body.scrollHeight;

      // Generate random positions for each shape
      const newPositions = shapes.map(shape => getRandomPosition(shape.size, width, height));
      setPositions(newPositions);
    }
  }, []); // Run once on mount

  return (
    <div className="absolute inset-0 z-[-1] h-full w-full pointer-events-none">

      {positions.map((pos, index) => (
        <Coolshape
          key={index}
          type='star'
          index={index}
          size={shapes[index].size}
          noise={true}
          style={{
            position: 'absolute',
            top: `${pos.y}px`,
            left: `${pos.x}px`,
          }}
        />
      ))}
    </div>
  );
};

export default CoolShapesBackground;