import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-[885px] md:h-[485px] pt-14">
      <div className="w-full h-full bg-gray-900 pt-14">
        <div className="w-full h-2/3 bg-amber-400 md:flex justify-around py-9 mb-8 md:mb-16 space-y-10 md:space-y-0 px-3 md:px-0">
          <div className="w-full md:w-1/4 space-y-2">
            <h3 className="font-bold text-2xl text-slate-900 tracking-wide">
              Contact
            </h3>
            <h3 className="font-bold text-base text-slate-900 tracking-wide">
              +91 99805 94868
            </h3>
            <h3 className="font-bold text-base text-slate-900 tracking-wide">
              contact@kotaguru.com
            </h3>
            <h3 className="font-bold text-base text-slate-900 tracking-wide">
              No.26, 2nd Cross, Amba Bhawani Road, Sai Nagar-1 Behind hamson
              Super Market Vidyaranyapura Bengaluru-560097
            </h3>
          </div>
          <div className="w-full md:w-1/4 space-y-2">
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
          <div className="w-full md:w-1/4 space-y-2">
            <h3 className="font-bold text-2xl text-slate-900 tracking-wide">
              Support
            </h3>
            <h3 className="font-bold text-base text-slate-900 tracking-wide">
              <Link to="/contact">Contact</Link>
            </h3>
          </div>
        </div>
        <div className="w-full md:flex justify-around space-y-10 md:space-y-0">
          <div className="w-full md:w-1/4 text-center md:text-start">
            <Link
              to="/"
              className="font-bold text-4xl text-white tracking-wider"
            >
              Kota<span className="text-amber-400">Guru</span>
            </Link>
          </div>
          <div className="w-full md:w-fit text-center">
            <p className="text-sm tracking-wide text-white">
              Copyright @ 2023 by KotaGuru | Developed by Teciex Solutions
            </p>
          </div>
          <div className="w-full md:w-1/4 flex justify-center md:justify-end text-4xl text-white space-x-10">
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
