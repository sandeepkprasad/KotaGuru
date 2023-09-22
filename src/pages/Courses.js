import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="max-w-[1400px] h-[327px] w-full m-auto relative group z-40">
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{
          backgroundImage: 'url("images/bg-image.png")',
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-75 py-5 px-14 flex items-center">
          <div className="space-y-14">
            <Link
              to="/"
              className="font-bold text-white/90 text-2xl tracking-wide"
            >
              {"Home >"}
            </Link>
            <h3 className="font-bold text-white/90 text-6xl tracking-wide">
              Courses |
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
