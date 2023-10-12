import React from "react";
import Heading from "../Helpers/Heading";
import { Link } from "react-router-dom";
import img1 from "../assests/kotaguru-1.jpg";
import img2 from "../assests/kotaguru-2.jpg";
import img3 from "../assests/kotaguru-3.jpg";
import img4 from "../assests/kotaguru-4.jpg";
import img6 from "../assests/kotaguru-6.jpg";

const data = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
  {
    id: 5,
    img: img6,
  },
];

const HomeGallery = () => {
  return (
    <>
      <div className="w-full p-14 space-y-14 bg-sky-400/25 hidden md:block">
        <Heading heading={"Gallery"} />
        <div className="w-full grid grid-cols-5 gap-8">
          {data.map((item) => {
            return (
              <Link to="/gallery">
                <img
                  src={item.img}
                  alt="..."
                  key={item.id}
                  className="w-[320px] h-[220px] rounded-3xl hover:scale-105 duration-300"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full px-3 py-14 space-y-14 bg-sky-400/25 md:hidden text-center">
        <Heading heading={"Gallery"} />
        <div className="w-full flex overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide space-x-5">
          {data.map((item) => {
            return (
              <Link to="/gallery">
                <img
                  src={item.img}
                  alt="..."
                  key={item.id}
                  className="w-[320px] h-[220px] rounded-xl hover:scale-105 duration-300"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomeGallery;
