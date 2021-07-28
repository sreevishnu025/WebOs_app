import React from "react";
import Menu from "./Menu";
import Time from "./Time";
import Percentage from "./Percentage";

function NotificationBar() {
  return (
    <div className="notificationBar">
      <Menu />
      <Time />
      <Percentage />
    </div>
  );
}

export default NotificationBar;
