import React from "react";
import ReactDOM from "react-dom";
import HomeHeader from "./HomeHeader";
import HomeColumns from "./HomeColumns";
import HomeSteps from "./HomeSteps";
import HomeAboutUs from "./HomeAbousUs";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <HomeColumns />
      <HomeSteps />
      <HomeAboutUs />
    </>
  );
};

export default Home;
