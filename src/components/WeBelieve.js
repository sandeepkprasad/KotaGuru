import React from "react";
import Heading from "../Helpers/Heading";

const WeBelieve = () => {
  return (
    <div className="w-full flex justify-center items-center p-14">
      <div className="w-full space-y-10 text-center">
        <Heading heading={"We Believe That"} />
        <div className="flex justify-between space-x-10">
          <h4 className="w-1/2 h-[100px] shadow-lg shadow-slate-400 rounded-3xl font-bold text-2xl p-5 tracking-wide text-white bg-lime-400 ">
            Quality education must be accessible and affordable to every
            aspirants.
          </h4>
          <h4 className="w-1/2 h-[100px] shadow-lg shadow-slate-400 rounded-3xl font-bold text-2xl p-5 tracking-wide text-white bg-cyan-400">
            Imparting education is part of social responsibility.
          </h4>
        </div>
        <div className="flex justify-between space-x-10">
          <h4 className="w-1/2 h-[100px] shadow-lg shadow-slate-400 rounded-3xl font-bold text-2xl p-5 tracking-wide text-white bg-teal-400">
            Education enhances the quality of life.
          </h4>
          <h4 className="w-1/2 h-[100px] shadow-lg shadow-slate-400 rounded-3xl font-bold text-2xl p-5 tracking-wide text-white bg-indigo-400">
            Education leads to betterment of life.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default WeBelieve;
