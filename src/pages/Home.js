import React, { useEffect } from "react";
import Carousel from "../components/Carousel";
import OurCourses from "../components/OurCourses";
import AboutUs from "../components/AboutUs";
import WeBelieve from "../components/WeBelieve";
import HomeGallery from "../components/HomeGallery";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Carousel />
      <OurCourses />
      <AboutUs />
      <WeBelieve />
      <HomeGallery />
    </div>
  );
};

export default Home;
