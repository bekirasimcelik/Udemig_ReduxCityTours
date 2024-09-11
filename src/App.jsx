import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";

const App = () => {
  return (
    <>
      <Navbar />
      <TourList />
    </>
  );
};

export default App;
