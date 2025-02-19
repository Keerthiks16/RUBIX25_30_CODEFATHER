import React from "react";
import Navbar from "../components/Navbar";
import CardSlider from "../components/CardSlider";
import RentPaymentTracker from "./RentPaymentTracker";
import HomeV from "./Vinpage/HomeV";
import Map from "./Day2pages/Map";
import MumbaiMap from "./Day2pages/Map";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeV />
      <MumbaiMap />
    </div>
  );
};

export default Home;
