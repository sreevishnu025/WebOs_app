import React, { useState } from "react";

function Flame(props) {
  let [flameColor, setFlameColor] = useState({
    color: "rgba(128, 128, 128, 0.74)"
  });
  function colorChange() {
    if (flameColor.color === "rgba(128, 128, 128, 0.74)")
      setFlameColor({
        color: "#ff0000cb"
      });
    else
      setFlameColor({
        color: "rgba(128, 128, 128, 0.74)"
      });
  }
  return (
    <div style={flameColor} className="flame">
      <i class="fa fa-fire fa-4x" aria-hidden="true" onClick={colorChange}></i>
    </div>
  );
}

export default Flame;
