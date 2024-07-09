import React from 'react';
import "./Home.css";
import Sidebar from '../Components/SideBar';

const Home = () => {
  return (
    <div className="main-homepage">
        <div className="sideBar">
            <Sidebar></Sidebar>
        </div>
    </div>
  );
};

export default Home;
