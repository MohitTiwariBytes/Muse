import React, { useState } from "react";
import "./TopBar.css";

const TopBar = () => {
  const [activeGenre, setActiveGenre] = useState("All");

  return (
    <div className="main-topbar">
      <div className="topbar-heading">
        <h2>Discover your next favorite track</h2>
        <p>Fresh royalty-free picks from Jamendo</p>
      </div>

      <div className="genre">
        {["All", "Pop", "Rock", "Jazz", "Country"].map((genre) => (
          <span
            key={genre}
            className={activeGenre === genre ? "active" : ""}
            onClick={() => setActiveGenre(genre)}
          >
            {genre}
          </span>
        ))}
      </div>

      <div className="userProfile">
        <i
          onClick={() => {
            window.location.replace("login");
          }}
          className="fa-solid fa-user"
        ></i>
      </div>
    </div>
  );
};

export default TopBar;
