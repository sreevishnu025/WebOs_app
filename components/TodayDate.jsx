import React, { useState } from "react";

function TodayDate() {
  let todayDate = new Date();
  let day = todayDate.toDateString();
  const [currentDay, setDay] = useState(day);
  function getDay() {
    todayDate = new Date();
    day = todayDate.toDateString();
    setDay(day);
  }
  setInterval(getDay, 100000);
  return (
    <div className="today">
      <p>{currentDay}</p>
    </div>
  );
}

export default TodayDate;
