import React from "react";
import Sidebar from "../Components/SideBar";
import TopBar from "../Components/TopBar.jsx";
import BottomBar from "../Components/BottomBar.jsx";
import Card from "../Components/Card.jsx";
import "./Search.css";

const Search = () => {
  return (
    <div className="main-search-page">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="main-content">
        <div className="topBar">
          <div
            style={{
              padding: "50px 0px",
              marginLeft: "-40px",
              position: "fixed",
              zIndex: 200,
              mixBlendMode: "difference",
            }}
            className="userProfile"
          >
            <i className="fa-solid fa-user fa-2x"></i>
          </div>
        </div>

        <div
          style={{ marginLeft: "30%", position: "absolute", top: "30%" }}
          className="searchbox"
        >
          <div className="inputMain">
            <input
              type="text"
              placeholder="Search for songs, artists, or albums"
            />
            <i
              style={{
                color: "black",
                position: "absolute",
                top: "25px",
                left: "100%",
                zIndex: "100",
              }}
              className="fa-solid fa-magnifying-glass fa-2x"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
