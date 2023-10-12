import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Heading from "../Helpers/Heading";
import img1 from "../assests/kotaguru-1.jpg";
import img2 from "../assests/kotaguru-2.jpg";
import img3 from "../assests/kotaguru-3.jpg";
import img4 from "../assests/kotaguru-4.jpg";
import img5 from "../assests/kotaguru-5.jpg";
import img6 from "../assests/kotaguru-6.jpg";
import kotaContext from "../context/kotaContext";
import { FaWindowClose } from "react-icons/fa";

const data = [
  {
    id: 1,
    img: img1,
    text: "Happy Learning",
  },
  {
    id: 2,
    img: img2,
    text: "Happy Learning",
  },
  {
    id: 3,
    img: img3,
    text: "Happy Learning",
  },
  {
    id: 4,
    img: img4,
    text: "Happy Learning",
  },
  {
    id: 5,
    img: img5,
    text: "Happy Learning",
  },
  {
    id: 6,
    img: img6,
    text: "Happy Learning",
  },
];

const Gallery = () => {
  const { getImg, img, showImg, setShowImg } = useContext(kotaContext);

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
                Gallery |
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-5 md:px-14 py-14 space-y-10">
        <Heading heading={"Our Memories"} />
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
          {data.map((item) => {
            return (
              <div
                className="space-y-3 font-bold text-lg tracking-wider"
                key={item.id}
              >
                <img
                  src={item.img}
                  alt="..."
                  className="w-[420px] h-[260px] rounded-2xl hover:scale-105 duration-500 cursor-pointer"
                  onClick={() => getImg(item.img)}
                />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`w-full flex justify-center bg-black absolute top-0 z-50 ${
          showImg ? "block" : "hidden"
        }`}
      >
        <div className="w-full h-full">
          <img src={img} alt="..." className="w-full h-full" />
          <div className="absolute top-5 right-5">
            <FaWindowClose
              className="font-bold text-3xl text-white cursor-pointer"
              onClick={() => setShowImg(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
