import React from "react";
import TodayDate from "./TodayDate";
function Temperature() {
  return (
    <div className="temperature">
      <i className="fa fa-thermometer-half fa-2x" aria-hidden="true"></i>
      <h3>
        26{" "}
        <sup>
          {" "}
          <sup>o</sup>
          <h5>c</h5>
        </sup>
      </h3>
      <TodayDate />
      <br />
      <p>The current temperature is in allowed limit.</p>
    </div>
  );
}

export default Temperature;
