import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import KotaState from "./context/KotaState";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import EnquiryModal from "./pages/EnquiryModal";
import Course1 from "./pages/Course1";
import Course2 from "./pages/Course2";
import Course3 from "./pages/Course3";
import Course4 from "./pages/Course4";

const App = () => {
  return (
    <KotaState>
      <Router>
        <Navbar />
        <EnquiryModal />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/school-course" element={<Course1 />} />
          <Route exact path="/inter-course" element={<Course2 />} />
          <Route exact path="/jee-course" element={<Course3 />} />
          <Route exact path="/neet-course" element={<Course4 />} />
        </Routes>
        <Footer />
      </Router>
    </KotaState>
  );
};

export default App;
