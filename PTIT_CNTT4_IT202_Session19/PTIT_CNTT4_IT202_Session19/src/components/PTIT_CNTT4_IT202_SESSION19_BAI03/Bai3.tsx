import React, { useState, useRef, useEffect } from "react";

export default function Bai3() {
  const [value, setValue] = useState("");
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div>
      <h2>Component Render Counter</h2>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
      <p>Component đã render: {renderCount.current} lần</p>
    </div>
  );
}