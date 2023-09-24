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
        <Heading heading={"Class 8th, 9th, 10th Course"} />
        <div className="w-full flex justify-around pt-10">
          <div className="w-2/5 space-y-5">
            <img
              src="images/school-students.jpg"
              alt="..."
              className="rounded-2xl w-full h-[300px] opacity-90"
            />
          </div>
          <div className="w-2/5 space-y-5 font-medium text-base text-slate-700 tracking-wider">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              About Course
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              KotaGuru is the renowned & prestigious Tuition centre in Bangalore
              for Science & Mathematics Tuition classes for{" "}
              <b>CBSE, ICSE & State Board for class 8th, 9th, 10th Grade</b>{" "}
              students.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              KotaGuru is also known as an excellent study centre for Innovative
              and Creative learning with latest teaching methodologies applied.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-2/5 space-y-5">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              Overview
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              The complete syllabus of{" "}
              <b>class 8 Maths and Science (Physics, Chemistry, Biology)</b>,
              which helps students to score good marks in school exams and lays
              a strong foundation for future entrance examinations. Students
              will be taught basic concepts, problem solving strategies, time
              management, following a study schedule, etc., so that they will
              not face any problem when they start preparing as per the JEE/
              NEET syllabus later.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              The complete syllabus of{" "}
              <b>class 9 Maths and Science (Physics, Chemistry, Biology)</b>,
              which helps students to score good marks in school exams and lays
              a strong foundation for future entrance examinations. Students
              will be taught basic concepts, problem solving strategies, time
              management, following a study schedule, etc., so that they will
              not face any problem when they start preparing as per the JEE/
              NEET syllabus later.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              The complete syllabus of{" "}
              <b>class 10 Maths and Science (Physics, Chemistry, Biology)</b>,
              which helps students to score good marks in school exams and lays
              a strong foundation for future entrance examinations. Students
              will be taught basic concepts, problem solving strategies, time
              management, following a study schedule, etc., so that they will
              not face any problem when they start preparing as per the JEE/
              NEET syllabus later.
            </p>
          </div>
          <div className="w-2/5 space-y-5 font-medium text-base text-slate-700 tracking-wider">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              Eligibility Criteria
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              Student must be passed their previous class.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course1;
