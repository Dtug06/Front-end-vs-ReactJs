import React, { useRef } from "react";

export default function Bai7() {
  const content = useRef<HTMLSpanElement>(null);
  const handleClick = () => {
    content.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <h1>cuon toi noi dung</h1>
      <button onClick={handleClick}>di toi noi dung</button>
      <div style={{ height: "500px" }}></div>
      <span ref={content}>
        day la noi dung gia lap
      </span>
    </div>
  );
}