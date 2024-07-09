import React, { useState } from "react";
import "./BottomBar.css";

const BottomBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleChange = () => {
    const input = document.getElementById("slider").value;
    const minutes = Math.floor(input / 60);
    const seconds = input % 60;
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );
  };

  return (
    <div className="main-bottombar">
      <div className="bottombar">
        <div className="left">
          <div className="songCoverSmall">
            <img
              height="80px"
              src="https://m.media-amazon.com/images/I/51bwO06TspL._UF1000,1000_QL80_.jpg"
              alt=""
            />
          </div>

          <div className="songInfo">
            <h1>Happy Nation</h1>
            <span>By Ace of Base</span>
          </div>

          <div className="controls">
            <div className="playButton">
              <button>
                <i className="fa-solid fa-play fa-2x"></i>
              </button>
            </div>
            <div className="slider">
              <input
                onChange={handleChange}
                type="range"
                max="215"
                min="0"
                name=""
                id="slider"
              />
              <span>
                <h1 id="minutes">00</h1>
                <h1>:</h1>
                <h1 id="seconds">00</h1>
              </span>
            </div>
            <div className="volume">
              <input type="range" />
              <i
                style={{ color: "white" }}
                className="fa-solid fa-volume-high fa-2x"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
