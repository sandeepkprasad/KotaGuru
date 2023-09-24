import React from "react";
import Heading from "../Helpers/Heading";

const data = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1547005327-ef75a6961556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1480926965639-9b5f63a0817b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1566024287286-457247b70310?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1494791368093-85217fbbf8de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2NlYW58ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1551405780-03882d5a2ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG9jZWFufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const HomeGallery = () => {
  return (
    <div className="w-full p-14 space-y-14 bg-sky-400/25">
      <Heading heading={"Special Memories"} />
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-8">
        {data.map((item) => {
          return (
            <img
              width={200}
              height={200}
              src={item.img}
              alt="..."
              key={item.id}
              className="rounded-3xl hover:scale-110 duration-300"
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeGallery;
