import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../Helpers/Heading";

const About = () => {
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
                About |
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full p-14 space-y-10">
        <Heading heading={"About Us"} />
        <div className="w-full flex justify-between">
          <div className="w-2/5 space-y-5">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              Who We Are
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              Welcome to KotaGuru Coaching Institute, a renowned coaching center
              located in the Kota. With over 00 years of experience in the field
              of competitive exam preparation, we have established ourselves as
              a trusted institution for aspiring candidates aiming to excel in
              exams like IIT JEE, NEET. Our coaching center is dedicated to
              providing high-quality education and comprehensive guidance to
              help students achieve their dreams of a successful career.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              KotaGuru Coaching Institute is one of the Best coaching Center in
              Kota that has helped a lot of students to achieve their goal of
              IIT/NEET exams. If you also have a dream to achieve IIT/NEET
              exams, We will help you to fulfill your dream.
            </p>
          </div>
          <div className="w-2/5 space-y-5 font-medium text-base text-slate-700 tracking-wider">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              Our Approach
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              At KotaGuru Coaching Institute, we follow a student-centric
              approach that revolves around the individual needs and aspirations
              of each student.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              We understand that every student is unique and has different
              strengths and weaknesses.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              Therefore, we tailor our teaching methods to accommodate various
              learning styles and ensure that each student receives personalized
              attention and support.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-around items-center pt-10">
          <div className="w-2/5 space-y-5">
            <img src="images/bg-image.png" alt="..." className="rounded-2xl" />
            <h4 className="font-medium text-xl text-slate-700 tracking-wider">
              Mr. XYZ
            </h4>
          </div>
          <div className="w-2/5 space-y-5 font-medium text-base text-slate-700 tracking-wider">
            <h4 className="font-medium text-2xl text-slate-700 tracking-wider">
              Our Director
            </h4>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              It's our immense pleasure to introduce KotaGuru as a leader in
              career making of thousands of students in IIT, NEET & OTHER
              Competitive Exams. It became favourite institution amongst young
              generation for preparation of competitive exams.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              We understand that the previous year exam papers can give the
              glimpse of the pattern of exams, beside this, targeted preparation
              under expert guidance coupled with unmatched study materials makes
              the task much easier.
            </p>
            <p className="font-medium text-base text-slate-700 tracking-wider">
              At KotaGuru we are committed to providing you the best in the
              field whether it is the classroom atmosphere, the quality of
              lectures, the study materials the test series, the guidance &
              information, KotaGuru Consistently been the hundred percent
              benchmark setter in the past decade and with our innovation
              approaches and consistent efforts we will continue to define the
              future of quality education.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
