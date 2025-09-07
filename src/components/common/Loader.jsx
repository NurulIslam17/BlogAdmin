import React from "react";

const Loader = ({ size = "w-12 h-12", color = "border-blue-500" }) => {
  return (
    <div className="flex justify-center items-center absolute top-1/2 left-1/2">
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${color} ${size}`}
      ></div>
    </div>
  );
};

export default Loader;
