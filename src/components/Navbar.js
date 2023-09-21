import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-[75px] bg-black bg-opacity-50 fixed px-5 border-b-2 border-yellow-400 z-50">
      <div className="w-full h-[37px] flex justify-between mt-5">
        <div className="nav-brand">
          <Link to="/" className="font-bold text-4xl text-white tracking-wider">
            Kota<span className="text-amber-400">Guru</span>
          </Link>
        </div>
        <div className="nav-items font-bold tracking-widest text-base">
          <ul className="flex space-x-10 text-white">
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <Link to="/" className="hover:text-amber-400 duration-300">
                HOME
              </Link>
            </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <Link to="/courses" className="hover:text-amber-400 duration-300">
                COURSES
              </Link>
            </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <Link to="/about" className="hover:text-amber-400 duration-300">
                ABOUT
              </Link>
            </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <Link to="/gallery" className="hover:text-amber-400 duration-300">
                GALLERY
              </Link>
            </li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
              <Link to="/contact" className="hover:text-amber-400 duration-300">
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
