import React, { useState, useRef } from "react";
import { getBezierPath } from "@xyflow/react";
import ReactDOM from "react-dom";
import ProjectDataHover from "./ProjectDataHover"; // Adjust the import path as needed

const CustomEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd,
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
  });

  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

  const handleMouseEnter = (event) => {
    setIsHovered(true);
    updateMousePosition(event);
  };

  const handleMouseLeave = () => setIsHovered(false);

  const handleMouseMove = (event) => {
    updateMousePosition(event);
  };

  const updateMousePosition = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <>
      <g ref={svgRef}>
        {/* Invisible path for easier hover detection */}
        <path
          id={id}
          d={edgePath}
          style={{
            fill: "none",
            stroke: "transparent",
            strokeWidth: 20, // Increase stroke width for easier hover detection
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        />

        {/* Actual visible edge path */}
        <path
          id={id}
          d={edgePath}
          className="react-flow__edge-path"
          style={style}
          markerEnd={markerEnd}
        />

        {data?.text && (
          <foreignObject
            width={80}
            height={40}
            x={labelX - 30}
            y={labelY - 15}
            style={{ pointerEvents: "none" }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "2px",
                border: "1px solid gray",
                borderRadius: "20px",
                textAlign: "center",
                fontSize: "10px",
                width: "70px",
                boxSizing: "border-box",
              }}
            >
              {data.text}
            </div>
          </foreignObject>
        )}
      </g>

      {/* Render hover component using React Portal */}
      {isHovered &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "fixed", // Fixed positioning to ensure it's always on top
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              backgroundColor: "white",
              padding: "10px 5px",
              pointerEvents: "none",
            //   transform: "translate(-50%, -100%)", 
              zIndex: 9999, 
            }}
          >
            <ProjectDataHover />
          </div>,
          document.body 
        )}
    </>
  );
};

export default CustomEdge;
