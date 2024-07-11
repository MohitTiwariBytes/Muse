import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Help from "./Pages/Help";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/help" element={<Help />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
