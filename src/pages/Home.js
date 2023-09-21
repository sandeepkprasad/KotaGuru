import React from "react";
import Carousel from "../components/Carousel";
import OurCourses from "../components/OurCourses";
import AboutUs from "../components/AboutUs";
import WeBelieve from "../components/WeBelieve";

const Home = () => {
  return (
    <div>
      <Carousel />
      <OurCourses />
      <AboutUs />
      <WeBelieve />
    </div>
  );
};

export default Home;
