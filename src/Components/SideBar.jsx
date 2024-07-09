import React from "react";
import "./SideBar.css";

const Sidebar = () => {
  return (
    <div className="main-sidebar">
      <div className="sidebar">
        <div className="header">
          <h1>Muse</h1>
        </div>
        <div className="top">
          <div className="items">
            <h1>
              {" "}
              <i className="fa-solid fa-house "></i> Home
            </h1>
            <h1>
              {" "}
              <i className="fa-solid fa-magnifying-glass "></i> Search
            </h1>
          </div>
        </div>
        <div className="medium">
          <div className="items">
            <h1>
              {" "}
              <i className="fa-solid fa-heart "></i> Your Library
            </h1>
            <h1>
              {" "}
              <i className="fa-solid fa-download "></i> Downloads
            </h1>
          </div>
        </div>
        <div className="bottom">
          <div className="items">
            <h1>
              {" "}
              <i className="fa-solid fa-circle-info "></i> Help
            </h1>
            <h1>
              {" "}
              <i className="fa-solid fa-gear "></i> Settings
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
