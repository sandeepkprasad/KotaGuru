import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../Helpers/Heading";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="max-w-[1400px] h-[327px] w-full m-auto relative group z-40">
        <div
          className="w-full h-full bg-center bg-cover duration-500"
          style={{
            backgroundImage: 'url("images/bg-image.jpg")',
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-75 py-5 px-5 md:px-14 flex items-center">
            <div className="space-y-14">
              <Link
                to="/"
                className="font-bold text-white/90 text-2xl tracking-wide"
              >
                {"Home >"}
              </Link>
              <h3 className="font-bold text-white/90 text-6xl tracking-wide">
                Contact |
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-5 md:px-14 py-14 space-y-10">
        <Heading heading={"Contact Us"} />
        <div className="w-full md:flex justify-between space-y-14 md:space-y-0">
          <div className="w-full md:w-2/5 space-y-5">
            <div className="w-full space-y-3">
              <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
                Connect With Us
              </h4>
              <p className="font-medium text-base text-slate-700 tracking-wider">
                +91 12345 67890
              </p>
              <p className="font-medium text-base text-slate-700 tracking-wider">
                contact@kotaguru.in
              </p>
            </div>
            <div className="w-full space-y-3">
              <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
                Our Address
              </h4>
              <p className="font-medium text-base text-slate-700 tracking-wider">
                No.26, 2nd Cross, Amba Bhawani Road, Sai Nagar-1 Behind hamson
                Super Market Vidyaranyapura Bengaluru - 560097
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/5 space-y-5 font-medium text-base text-slate-700 tracking-wider">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              Find Us
            </h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62177.91231202048!2d77.545953!3d13.091611!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae239fca36d85f%3A0x2491e7d8df223852!2sRCS%20TECHNOLOGY!5e0!3m2!1sen!2sin!4v1695452881039!5m2!1sen!2sin"
              title="This is a unique title"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow shadow-slate-500 w-[350px] md:w-[400px] h-[200px]"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
