import React, { useEffect, useState } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // chạy 1 lần khi mount

  return (
    <div>
      <h2>Bộ đếm thời gian</h2>
      <p>Số giây đã trôi qua: {seconds}</p>
    </div>
  );
}