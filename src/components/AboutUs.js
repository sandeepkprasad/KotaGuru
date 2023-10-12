import React from "react";
import { PiGraduationCapBold } from "react-icons/pi";
import { ImBook } from "react-icons/im";
import { TbRulerMeasure } from "react-icons/tb";

const AboutUs = () => {
  return (
    <div className="max-w-[1400px] h-[817px] md:h-[627px] w-full m-auto relative group py-14 z-40">
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{
          backgroundImage: 'url("images/kotaguru-satish.png")',
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-75 py-5 px-3 md:px-14">
          <div className="space-y-5 md:space-y-7">
            <h3 className="font-bold text-white/90 text-4xl tracking-wide">
              We Offer |
            </h3>
            <div className="w-full md:w-1/2 space-y-10">
              <div className="flex items-center space-x-10">
                <PiGraduationCapBold className="font-bold text-8xl text-white" />
                <div className="space-y-3 text-white">
                  <h4 className="font-bold text-3xl tracking-widest">
                    Best NEET & JEE Instructor
                  </h4>
                  <p className="tracking-wider">
                    With the team of NEET & JEE Experts KotaGuru Guarantee the
                    best result for NEET & JEE exams with well-designed courses.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <ImBook className="font-bold text-7xl text-white mx-2" />
                <div className="space-y-3 text-white">
                  <h4 className="font-bold text-3xl tracking-widest">
                    NEET & JEE - Study Material and Mock Test
                  </h4>
                  <p className="tracking-wider">
                    NEET & JEE question bank and test series with online JEE
                    content is provided and accessed anytime for practice.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <TbRulerMeasure className="font-bold text-8xl text-white ml-2" />
                <div className="space-y-3 text-white">
                  <h4 className="font-bold text-3xl tracking-widest">
                    KotaGuru NEET & JEE Tools
                  </h4>
                  <p className="tracking-wider">
                    Blend with offline JEE & CET classes with online support for
                    mock test Providing NEET CET coaching offline and online
                    practice paper/dpp topic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
