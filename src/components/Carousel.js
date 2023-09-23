import React, { useState, useEffect, useRef, useContext } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import kotaContext from "../context/kotaContext";

const slides = [
  {
    url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeout = useRef(null);
  const length = slides.length;
  const { handleModal } = useContext(kotaContext);

  const [header] = useTypewriter({
    words: [
      "Best Coaching Institute in Kota",
      "Best Coaching For IIT & NEET Classes",
    ],
    loop: 0,
  });

  useEffect(() => {
    const nextSlide = () => {
      setCurrentIndex((currentIndex) =>
        currentIndex === length - 1 ? 0 : currentIndex + 1
      );
    };

    timeout.currentIndex = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.currentIndex) {
        clearTimeout(timeout.currentIndex);
      }
    };
  }, [currentIndex, length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-[1400px] h-[627px] w-full m-auto relative group z-40">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="text-center space-y-7">
            <h3 className="font-bold text-6xl text-white tracking-wider">
              Welcome To <span className="text-white">Kota</span>
              <span className="text-amber-400">Guru</span>
            </h3>
            <p className="font-bold text-3xl text-white tracking-widest">
              {header + " |"}
            </p>
            <div className="space-x-5">
              <Link
                to="/courses"
                className="font-bold text-black bg-amber-400 px-3 py-2 rounded hover:bg-amber-600 duration-300 tracking-wide"
              >
                View Courses
              </Link>
              <button
                className="font-bold text-black bg-red-600 px-4 py-1.5 rounded hover:bg-red-700 duration-300 tracking-wide"
                onClick={() => {
                  handleModal(true);
                }}
              >
                Enquiry Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="w-full h-[350px] bg-transparent absolute top-[85%] flex justify-around">
        <div className="w-1/4 bg-blue-400 rounded-full shadow-md shadow-black flex justify-center items-center">
          <div className="text-center space-y-3">
            <h3 className="font-bold text-slate-900 text-3xl tracking-wider">
              Best Coaching in Kota
            </h3>
            <p className="font-bold tracking-wider text-base text-slate-700">
              Well-known Coaching Institute for JEE advance and NEET in Kota.
            </p>
          </div>
        </div>
        <div className="w-1/4 bg-red-400 rounded-full shadow-md shadow-black flex justify-center items-center">
          <div className="text-center space-y-3">
            <h3 className="font-bold text-slate-900 text-3xl tracking-wider">
              Best Choice for E-Learning
            </h3>
            <p className="font-bold tracking-wider text-base text-slate-700">
              You can learn the E-courses with the best tools available at
              KotaGuru.
            </p>
          </div>
        </div>
        <div className="w-1/4 bg-green-400 rounded-full shadow-md shadow-black flex justify-center items-center">
          <div className="text-center space-y-3">
            <h3 className="font-bold text-slate-900 text-3xl tracking-wider">
              School Integrated Programs
            </h3>
            <p className="font-bold tracking-wider text-base text-slate-700">
              There are no better school integration programs than the ones
              offered by us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
