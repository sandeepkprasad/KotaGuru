import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[485px] pt-14">
      <div className="w-full h-full bg-gray-900 pt-14">
        <div className="w-full h-2/3 bg-amber-400 flex justify-around py-9 mb-16">
          <div className="w-1/4 space-y-2">
            <h3 className="font-bold text-2xl text-slate-900 tracking-wide">
              Contact
            </h3>
            <h3 className="font-bold text-base text-slate-900 tracking-wide">
              +91 12345 67890
            </h3>
            <h3 className="font-bold text-base text-slate-900 tracking-wide">
              contact@xyz.com
            </h3>
            <h3 className="font-bold text-base text-slate-900 tracking-wide">
              No.26, 2nd Cross, Amba Bhawani Road, Sai Nagar-1 Behind hamson
              Super Market Vidyaranyapura Bengaluru-560097
            </h3>
          </div>
          <div className="w-1/4 space-y-2">
            <h3 className="font-bold text-2xl text-slate-900 tracking-wide">
              Useful Links
            </h3>
            <h3 className="font-bold text-base text-slate-900 tracking-wide">
              <Link to="courses">Courses</Link>
            </h3>
            <h3 className="font-bold text-base text-slate-900 tracking-wide">
              <Link to="/about">About</Link>
            </h3>
            <h3 className="font-bold text-base text-slate-900 tracking-wide">
              <Link to="/gallery">Gallery</Link>
            </h3>
          </div>
          <div className="w-1/4 space-y-2">
            <h3 className="font-bold text-2xl text-slate-900 tracking-wide">
              Support
            </h3>
            <h3 className="font-bold text-base text-slate-900 tracking-wide">
              <Link to="/contact">Contact</Link>
            </h3>
          </div>
        </div>
        <div className="w-full flex justify-around">
          <div className="w-1/4">
            <Link
              to="/"
              className="font-bold text-4xl text-white tracking-wider"
            >
              Kota<span className="text-amber-400">Guru</span>
            </Link>
          </div>
          <div className="w-1/4 text-center space-y-3">
            <p className="text-sm tracking-wide text-white">
              Copyright @ 2023 by KotaGuru
            </p>
            <p className="text-sm tracking-wide text-white">
              Developed by Sandeep Kumar
            </p>
          </div>
          <div className="w-1/4 flex justify-end text-4xl text-white space-x-10">
            <Link
              to="/"
              className="hover:scale-125 hover:text-blue-700 duration-300"
            >
              <FaFacebookSquare />
            </Link>
            <Link
              to="/"
              className="hover:scale-125 hover:text-sky-600 duration-300"
            >
              <FaTwitterSquare />
            </Link>
            <Link
              to="/"
              className="hover:scale-125 hover:text-blue-900 duration-300"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
