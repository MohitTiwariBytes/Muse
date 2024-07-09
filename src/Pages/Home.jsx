import React from "react";
import "./Home.css";
import Sidebar from "../Components/SideBar";
import TopBar from "../Components/TopBar.jsx";

const Home = () => {
  return (
    <div className="main-homepage">
      <div className="sideBar">
        <Sidebar></Sidebar>
      </div>
      <div className="topBar">
        <TopBar></TopBar>
      </div>
    </div>
  );
};

export default Home;
