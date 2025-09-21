import React from "react";

const Navbar = () => {
  return (
    <div className="mt-4 flex items-center justify-around gap-80">
      <div className="flex items-center gap-6 ">
        <div className="relative w-16 h-16">
          <div className="bg-gray-500 rounded-full w-full h-full"></div>
          <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
            NK
          </div>
        </div>
        <div className="font-bold  text-3xl">Nabin Karki</div>
      </div>
      <div className="flex gap-10">
        <button className=" text-2xl bg-gray-500 p-3 rounded-2xl">Home</button>
        <button className=" text-2xl">About</button>
        <button className=" text-2xl">Skills</button>
        <button className=" text-2xl">Projects</button>
        <button className=" text-2xl">Resume</button>
        <button className=" text-2xl">Contact</button>
      </div>{" "}
    </div>
  );
};

export default Navbar;
