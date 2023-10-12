import React, { useState, useEffect, useRef, useContext } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import kotaContext from "../context/kotaContext";

const slides = [
  {
    url: "/images/kotaguru-6.jpg",
  },
  {
    url: "/images/kotaguru-2.jpg",
  },
  {
    url: "/images/iit-image.jpg",
  },
  {
    url: "/images/neet-image.png",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeout = useRef(null);
  const length = slides.length;
  const { handleModal } = useContext(kotaContext);

  const [header] = useTypewriter({
    words: [
      "Best Coaching Institute in Bangalore",
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
    <div className="max-w-[1400px] h-[427px] md:h-[627px] w-full m-auto relative group z-40">
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <div className="w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="text-center space-y-7">
            <h3 className="font-bold text-4xl md:text-6xl text-white tracking-wider">
              Welcome To <span className="text-white">Kota</span>
              <span className="text-amber-400">Guru</span>
            </h3>
            <p className="font-bold text-xl md:text-3xl text-white tracking-widest">
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
      <div className="w-full h-[350px] bg-transparent absolute top-[85%] md:flex justify-around px-1 md:px-0 space-y-5 md:space-y-0">
        <div className="w-full md:w-1/4 bg-blue-400 rounded-full shadow-md shadow-black flex justify-center items-center py-5 md:py-0 px-3 md:px-0">
          <div className="text-center space-y-3">
            <h3 className="font-bold text-slate-900 text-2xl md:text-3xl tracking-wider">
              Best NEET & JEE Coaching
            </h3>
            <p className="font-bold tracking-wider text-base text-slate-700">
              Well-known Institute for NEET & JEE result in Karnataka.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 bg-red-400 rounded-full shadow-md shadow-black flex justify-center items-center py-5 md:py-0 px-3 md:px-0">
          <div className="text-center space-y-3">
            <h3 className="font-bold text-slate-900 text-2xl md:text-3xl tracking-wider">
              Best Place for Online Learning
            </h3>
            <p className="font-bold tracking-wider text-base text-slate-700">
              You can learn online with the best tools available at KotaGuru.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/4 bg-green-400 rounded-full shadow-md shadow-black flex justify-center items-center py-5 md:py-0 px-3 md:px-0">
          <div className="text-center space-y-3">
            <h3 className="font-bold text-slate-900 text-2xl md:text-3xl tracking-wider">
              Integrated PU College Programs
            </h3>
            <p className="font-bold tracking-wider text-base text-slate-700">
              There are no better PU College integration programs than the ones
              offered by us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
