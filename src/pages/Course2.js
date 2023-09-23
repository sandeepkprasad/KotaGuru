import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Helpers/Heading";

const Course2 = () => {
  return (
    <>
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
      <div className="w-full p-14 space-y-10">
        <Heading heading={"Class 11th & 12th Course"} />
        <div className="w-full flex justify-around pt-10">
          <div className="w-2/5 space-y-5">
            <img src="images/bg-image.png" alt="..." className="rounded-2xl" />
          </div>
          <div className="w-2/5 space-y-5 font-medium text-base text-slate-700 tracking-wider">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              About Course
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              KotaGuru was started in 2017 by Graduates of IIT Roorkee and
              Delhi. We came from different Streams and Join to form this
              venture names KotaGuru.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="w-2/5 space-y-5">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              Overview
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              KotaGuru was started in 2017 by Graduates of IIT Roorkee and
              Delhi. We came from different Streams and Join to form this
              venture names KotaGuru.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              What we have observed is that students are being taught the same
              subjects by multiple teachers still students were struggling. so
              we combined Offline Classroom coaching with online learning and
              made the CloudClass Platform.
            </p>
          </div>
          <div className="w-2/5 space-y-5 font-medium text-base text-slate-700 tracking-wider">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              Eligibility Criteria
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              KotaGuru was started in 2017 by Graduates of IIT Roorkee and
              Delhi. We came from different Streams and Join to form this
              venture names KotaGuru.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              What we have observed is that students are being taught the same
              subjects by multiple teachers still students were struggling. so
              we combined Offline Classroom coaching with online learning and
              made the CloudClass Platform.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course2;
