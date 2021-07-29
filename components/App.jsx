import React from "react";
import NotificationBar from "./notificationBar/NotificationBar";
import Temperature from "./Temperature";
import Flame from "./Flame";

function App() {
  return (
    <div>
      <NotificationBar /> <Temperature />
      <div className="flames">
        <Flame />
        <Flame />
        <Flame />
        <Flame />
      </div>
    </div>
  );
}

export default App;
