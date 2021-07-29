import React, { useState, useEffect } from "react";

function Menu() {
  const [currentClass, setClass] = useState("dropdown-content");
  function dropMenu() {
    if (currentClass === "dropdown-content") setClass("dropdown-content show");
    else setClass("dropdown-content");
  }

  return (
    <div className="dropdown">
      <button className="dropbtn">
        <i className="fa fa-bars " name="dropDownMenu" onClick={dropMenu}></i>
      </button>
      <div id="myDropdown" className={currentClass}>
        <a href="#home">Home</a>
        <a href="#notepad">Notepad</a>
        <a href="#youtube">Youtube</a>
        <a href="#stores">Grocery stores</a>
        <a href="#remainder">Remainder</a>
      </div>
    </div>
  );
}

export default Menu;
