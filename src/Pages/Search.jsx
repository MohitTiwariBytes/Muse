import React, { useState } from "react";
import Sidebar from "../Components/SideBar";
import BottomBar from "../Components/BottomBar.jsx";
import Card from "../Components/Card.jsx";
import "./Search.css";

const Search = () => {
  const [dataToSend, setDataToSend] = useState({
    name: "",
    artist: "",
    album: "",
    url: "",
  });
  const [search, setSearch] = useState("");

  return (
    <div className="main-search-page">
      <div className="sideBar">
        <Sidebar />
      </div>

      <div className="search-main-content">
        <div className="search-header">
          <div>
            <h1>Search Music</h1>
            <p>Type a song, artist, or album to find instant results.</p>
          </div>
          <div className="userProfile">
            <i
              onClick={() => {
                window.location.replace("/login");
              }}
              className="fa-solid fa-user"
            ></i>
          </div>
        </div>

        <div className="searchbox">
          <div className="inputMain">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for songs, artists, or albums"
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="songs">
          <Card
            setDataToSend={setDataToSend}
            URL={`https://api.jamendo.com/v3.0/tracks?client_id=8428cdd9&format=json&search=${search}`}
          />
        </div>

        <div className="bottomBar">
          <BottomBar dataToSend={dataToSend} />
        </div>
      </div>
    </div>
  );
};

export default Search;
