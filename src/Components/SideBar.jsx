import React, { useState } from "react";
import "./SideBar.css";

const Sidebar = () => {
  const [activeText, setActiveText] = useState("Home");

  const handleTextClick = (text) => {
    setActiveText(text);
    if (text.toLowerCase() === "home") {
      window.location.href = "/";
    } else {
      window.location.replace(`/${text.toLowerCase()}`);
    }
  };

  return (
    <div className="main-sidebar">
      <div className="sidebar">
        <div className="header">
          <h1>संगीत सरोवर</h1>
        </div>
        <div className="top">
          <div className="items">
            <h1
              className={activeText === "Home" ? "activeText" : ""}
              onClick={() => handleTextClick("Home")}
            >
              <i className="fa-solid fa-house"></i> Home
            </h1>
            <h1
              className={activeText === "Search" ? "activeText" : ""}
              onClick={() => handleTextClick("Search")}
            >
              <i className="fa-solid fa-magnifying-glass"></i> Search
            </h1>
          </div>
        </div>
        <div className="medium">
          <div className="items">
            <h1
              className={activeText === "Your Library" ? "activeText" : ""}
              onClick={() => handleTextClick("Your Library")}
            >
              <i className="fa-solid fa-heart"></i> Your Library
            </h1>
            <h1
              className={activeText === "Downloads" ? "activeText" : ""}
              onClick={() => handleTextClick("Downloads")}
            >
              <i className="fa-solid fa-download"></i> Downloads
            </h1>
          </div>
        </div>
        <div className="bottom">
          <div className="items">
            <h1
              className={activeText === "Help" ? "activeText" : ""}
              onClick={() => handleTextClick("Help")}
            >
              <i className="fa-solid fa-circle-info"></i> Help
            </h1>
            <h1
              className={activeText === "Settings" ? "activeText" : ""}
              onClick={() => handleTextClick("Settings")}
            >
              <i className="fa-solid fa-gear"></i> Settings
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
