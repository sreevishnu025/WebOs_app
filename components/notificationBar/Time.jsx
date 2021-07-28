import React, { useState } from "react";
//1. Given that you can get the current time using:

function Time() {
  let time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });
  const [currentTime, setTime] = useState(time);
  function getTime() {
    time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true
    });
    setTime(time);
  }
  setInterval(getTime, 15000);
  return (
    <div className="time">
      <h1>{currentTime}</h1>
    </div>
  );
}

export default Time;
