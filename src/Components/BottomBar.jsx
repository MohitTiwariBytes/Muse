import React, { useState, useEffect, useRef } from "react";
import "./BottomBar.css";

const BottomBar = ({ dataToSend }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [value, setValue] = useState(0);
  const audioRef = useRef(null);
  const durationRef = useRef(0);

  useEffect(() => {
    if (dataToSend.url) {
      const audio = new Audio(dataToSend.url);
      audioRef.current = audio;

      audio.addEventListener("loadedmetadata", () => {
        durationRef.current = audio.duration;
      });

      audio.addEventListener("timeupdate", () => {
        setValue(audio.currentTime);
      });

      return () => {
        audio.removeEventListener("loadedmetadata", () => {});
        audio.removeEventListener("timeupdate", () => {});
      };
    }
  }, [dataToSend.url]);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setValue(audioRef.current.currentTime);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handleChange = (input) => {
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

  const handleSliderChange = (e) => {
    const input = parseInt(e.target.value, 10);
    setValue(input);
    handleChange(input);
    if (audioRef.current) {
      audioRef.current.currentTime = input;
    }
  };

  return (
    <div className="main-bottombar">
      <div className="bottombar">
        <div className="left">
          <div className="songCoverSmall">
            <img
              height="80px"
              src={
                dataToSend.album ||
                "https://m.media-amazon.com/images/I/51bwO06TspL._UF1000,1000_QL80_.jpg"
              }
              alt={dataToSend.name || "Song Cover"}
            />
          </div>

          <div className="songInfo">
            <h1>{dataToSend.name || "Song Name"}</h1>
            <span>By {dataToSend.artist || "Artist Name"}</span>
          </div>

          <div className="controls">
            <div className="playButton">
              <button onClick={handleClick}>
                <i
                  className={
                    isPlaying
                      ? "fa-solid fa-pause fa-2x"
                      : "fa-solid fa-play fa-2x"
                  }
                ></i>
              </button>
            </div>
            <div className="slider">
              <input
                onChange={handleSliderChange}
                type="range"
                max={durationRef.current}
                min="0"
                id="slider"
                value={value}
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
