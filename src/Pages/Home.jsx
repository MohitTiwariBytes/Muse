import React from "react";
import "./Home.css";
import Sidebar from "../Components/SideBar";
import TopBar from "../Components/TopBar.jsx";
import BottomBar from "../Components/BottomBar.jsx";

const Home = () => {
  return (
    <div className="main-homepage">
      <div className="sideBar">
        <Sidebar></Sidebar>
      </div>
      <div className="main-content">
        <div className="topBar">
          <TopBar></TopBar>
        </div>
        <div className="bottomBar">
          <BottomBar></BottomBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
