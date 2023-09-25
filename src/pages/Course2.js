import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../Helpers/Heading";

const Course2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="max-w-[1400px] h-[327px] w-full m-auto relative group z-40">
        <div
          className="w-full h-full bg-center bg-cover duration-500"
          style={{
            backgroundImage: 'url("images/bg-image.png")',
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
                Courses |
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-5 md:px-14 py-14 space-y-10">
        <Heading heading={"Class 11th & 12th Course"} />
        <div className="w-full md:flex justify-around pt-10 space-y-14 md:space-y-0">
          <div className="w-full md:w-2/5 space-y-5">
            <img
              src="images/inter-students.webp"
              alt="..."
              className="rounded-2xl w-full h-[300px] opacity-90"
            />
          </div>
          <div className="w-full md:w-2/5 space-y-5 font-medium text-base text-slate-700 tracking-wider">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              About Course
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              KotaGuru is the renowned & prestigious Tuition centre in Bangalore
              for Science & Mathematics Tuition classes for{" "}
              <b>CBSE, ICSE & State Board for class 11th & 12th</b> students.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              KotaGuru is also known as an excellent study centre for Innovative
              and Creative learning with latest teaching methodologies applied.
            </p>
          </div>
        </div>
        <div className="w-full md:flex justify-between space-y-14 md:space-y-0">
          <div className="w-full md:w-2/5 space-y-5">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              Overview
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              This course crafted for students of I & II PUC and 11th & 12th.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              This course is for the students starting their preparation from
              the scratch.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              The course will enhance the level of the student from ground to
              top gradually and to train them for both BOARD examination and
              entrance examination.
            </p>
          </div>
          <div className="w-full md:w-2/5 space-y-5 font-medium text-base text-slate-700 tracking-wider">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              Eligibility Criteria
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              Student must be passed class 10th to get eligible for class 11th.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              Student must be passed class 11th to get eligible for class 12th.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course2;
