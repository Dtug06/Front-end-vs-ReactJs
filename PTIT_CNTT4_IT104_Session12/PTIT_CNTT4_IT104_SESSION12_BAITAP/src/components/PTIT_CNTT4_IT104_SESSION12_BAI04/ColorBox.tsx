import React from "react";

interface ColorBoxProps {
  color: string; 
}

const ColorBox: React.FC<ColorBoxProps> = ({ color }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "200px",
        height: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontWeight: "bold",
        margin: "10px",
      }}
    >
      Box
    </div>
  );
};

export default ColorBox;
