import React from "react";
import Heading from "../Helpers/Heading";
import course10th from "../assests/10th-students.png";
import course12th from "../assests/12th-students.jpg";
import courseIIT from "../assests/iit-students.png";
import courseNEET from "../assests/neet-students.png";
import Card from "../Helpers/Card";

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

const OurCourses = () => {
  return (
    <div className="w-full bg-white pt-[320px] pb-14 px-14">
      <div className="space-y-14">
        <Heading heading={"Our Popular Courses"} />
        <div className="w-full flex justify-around">
          {courses.map((course, index) => {
            return <Card data={course} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
