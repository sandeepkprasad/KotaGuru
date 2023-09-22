import React from "react";
import { PiGraduationCapBold } from "react-icons/pi";
import { ImBook } from "react-icons/im";
import { TbRulerMeasure } from "react-icons/tb";

const AboutUs = () => {
  return (
    <div className="max-w-[1400px] h-[627px] w-full m-auto relative group py-14 z-40">
      <div
        className="w-full h-full bg-center bg-cover duration-500"
        style={{
          backgroundImage: 'url("images/bg-image.png")',
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-75 py-5 px-14">
          <div className="space-y-14">
            <h3 className="font-bold text-white/90 text-4xl tracking-wide">
              We Can Offer |
            </h3>
            <div className="w-1/2 space-y-10">
              <div className="flex items-center space-x-10">
                <PiGraduationCapBold className="font-bold text-8xl text-white" />
                <div className="space-y-3 text-white">
                  <h4 className="font-bold text-3xl tracking-widest">
                    Expert Instructors
                  </h4>
                  <p className="tracking-wider">
                    With a team of professionals, KotaGuru guarantee the best
                    lessons and courses for your students.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <ImBook className="font-bold text-7xl text-white mx-2" />
                <div className="space-y-3 text-white">
                  <h4 className="font-bold text-3xl tracking-widest">
                    Learning Material
                  </h4>
                  <p className="tracking-wider">
                    Detailed Learning Material and Video Tutorials are
                    well-prepared and can be accessed anytime.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-10">
                <TbRulerMeasure className="font-bold text-8xl text-white ml-2" />
                <div className="space-y-3 text-white">
                  <h4 className="font-bold text-3xl tracking-widest">
                    KotaGuru Learning Tools
                  </h4>
                  <p className="tracking-wider">
                    KotaGuru can provide the best environment for learning via a
                    friendly Online Class with many exclusive features.
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
