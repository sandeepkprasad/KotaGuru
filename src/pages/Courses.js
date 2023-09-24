import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../Helpers/Heading";
import Card from "../Helpers/Card";
import course10th from "../assests/10th-students.png";
import course12th from "../assests/12th-students.jpg";
import courseIIT from "../assests/iit-students.png";
import courseNEET from "../assests/neet-students.png";

const courses = [
  {
    image: course10th,
    title: "Class 8th, 9th, 10th Course",
    route: "/school-course",
  },
  {
    image: course12th,
    title: "Class 11th & 12th Course",
    route: "/inter-course",
  },
  {
    image: courseIIT,
    title: "JEE Main & Advance Course",
    route: "/jee-course",
  },
  { image: courseNEET, title: "NEET Course", route: "/neet-course" },
];

const Courses = () => {
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
        <Heading heading={"Courses We Offer"} />
        <div className="w-full flex justify-between">
          {courses.map((course, index) => {
            return <Card data={course} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
