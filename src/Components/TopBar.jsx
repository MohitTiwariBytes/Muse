import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="main-topbar">
      <div className="topbar">
        <div className="genre">
          <span className="active">All</span>
          <span>Pop</span>
          <span>Rock</span>
          <span>Jazz</span>
          <span>Country</span>
        </div>
        <div className="userProfile">
          <i className="fa-solid fa-user fa-2x"></i>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
