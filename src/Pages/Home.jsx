import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../Components/SideBar";
import TopBar from "../Components/TopBar.jsx";
import BottomBar from "../Components/BottomBar.jsx";
import Card from "../Components/Card.jsx";

const Home = () => {
  const [dataToSend, setDataToSend] = useState({
    name: "",
    artist: "",
    album: "",
  });

  return (
    <div className="main-homepage">
      <div className="sideBar">
        <Sidebar />
      </div>
      <div className="main-content">
        <div className="topBar">
          <TopBar />
        </div>
      </div>

      <div className="songs">
        <Card setDataToSend={setDataToSend} />
      </div>
      <div className="bottomBar">
        <BottomBar dataToSend={dataToSend} />
      </div>
    </div>
  );
};

export default Home;
