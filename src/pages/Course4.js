import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../Helpers/Heading";

const Course1 = () => {
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
                Courses |
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-5 md:px-14 py-14 space-y-10">
        <Heading heading={"NEET Course"} />
        <div className="w-full md:flex justify-around pt-10 space-y-14 md:space-y-0">
          <div className="w-full md:w-2/5 space-y-5">
            <img
              src="images/neet-image.png"
              alt="..."
              className="rounded-2xl w-full h-[300px] opacity-90"
            />
          </div>
          <div className="w-full md:w-2/5 space-y-5 font-medium text-base text-slate-700 tracking-wider">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              About Course
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              KotaGuru is the renowned & prestigious Coaching centre in
              Bangalore for medical entrance exam preparations for <b>NEET</b>{" "}
              exams.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              KotaGuru is also known as an excellent study centre for Innovative
              and Creative learning with latest teaching methodologies applied.
            </p>
          </div>
        </div>
        <div className="w-full md:flex justify-between items-center space-y-14 md:space-y-0">
          <div className="w-full md:w-2/5 space-y-5">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              Overview
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              This is the course crafted for students of{" "}
              <b>I & II PUC and 11th & 12th</b> with Biology. This course is for
              the students starting their preparation from the scratch. The
              course will enhance the level of the student from ground to top
              gradually and to train them for <b>NEET</b> entrance examination.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              KotaGuru provides the best course for <b>NEET</b>. For grade 11
              and 12 students, our classroom programs will cover the complete
              syllabus of{" "}
              <b>11th and 12th for Physics, Chemistry and Biology</b> which
              helps students to score good marks in <b>NEET</b>
              and class <b>12th Board</b> exams.
            </p>
          </div>
          <div className="w-full md:w-2/5 space-y-5 font-medium text-base text-slate-700 tracking-wider">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              Eligibility Criteria
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              Student must be paased their 10th/metric from any secondary
              education board.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course1;
