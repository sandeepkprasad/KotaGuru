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
              <p className="font-bold text-xl text-slate-700 tracking-wider">
                <Link to="tel:+91 99805 94868">
                  +91 99805 94868{" "}
                  <span className="font-medium">(Click to Call Now)</span>
                </Link>
              </p>
              <p className="font-bold text-xl text-slate-700 tracking-wider">
                <Link to="mailto:contact@kotaguru.com">
                  contact@kotaguru.com{" "}
                  <span className="font-medium">(Click to Send Email)</span>
                </Link>
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31087.86708528311!2d77.54682800000002!3d13.100239!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae228eb52a368f%3A0x711f298a19b466f8!2sAmba%20Bhavani%20Temple%20Rd%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1697103727994!5m2!1sen!2sus"
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
