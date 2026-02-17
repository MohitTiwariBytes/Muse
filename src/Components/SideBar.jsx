import React, { useEffect, useState } from "react";
import "./SideBar.css";

const Sidebar = () => {
  const [activeText, setActiveText] = useState("Home");

  useEffect(() => {
    const saved = localStorage.getItem("activeText");
    if (saved) {
      setActiveText(saved);
    }
  }, []);

  const handleTextClick = (text) => {
    setActiveText(text);
    if (text.toLowerCase() === "home") {
      window.location.href = "/";
    } else if (text.toLowerCase() === "your library") {
      window.location.href = "/library";
    } else {
      window.location.replace(`/${text.toLowerCase()}`);
    }
    localStorage.setItem("activeText", text);
  };

  return (
    <aside className="main-sidebar">
      <div className="sidebar">
        <div className="header">
          <h1>संगीत सरोवर</h1>
          <p>Your ambient music space</p>
        </div>

        <div className="menu-group">
          <h2>Browse</h2>
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

        <div className="menu-group">
          <h2>Library</h2>
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

        <div className="menu-group secondary">
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
    </aside>
  );
};

export default Sidebar;
