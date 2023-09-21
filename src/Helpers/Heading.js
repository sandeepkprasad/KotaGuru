import React from "react";

const Heading = ({ heading }) => {
  return (
    <div className="font-bold text-gray-900 text-4xl tracking-wide">
      {heading + " |"}
    </div>
  );
};

export default Heading;
