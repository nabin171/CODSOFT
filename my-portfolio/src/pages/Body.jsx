import React from "react";
import profilePicture from "../assets/profile_img.png";
const Body = () => {
  return (
    <div className="p-10 flex items-center justify-around">
      <div className=" flex flex-col gap-4">
        <div className=" flex flex-col gap-5">
          <div>
            <p className="text-6xl font-bold">Hello, I'm</p>
            <p className="text-6xl font-bold">Nabin Karki </p>
          </div>

          <div className="text-2xl">
            {" "}
            <p>I’m a passionate MERN Stack Developer and Technology</p>
            <p>
              Enthusiast based in Nepal. I focus on building modern,
              user-friendly
            </p>
            and scalable web applications through clean code and thoughtful
            design.
          </div>
          <button className="bg-gray-500 cursor-pointer rounded-2xl  w-[120px] h-[40px]">
            Say Hello!
          </button>
        </div>
        <div className="flex flex-row gap-6">
          <div className="bg-gray-300 w-40 h-24 rounded-xl shadow-md flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
            <span className="text-2xl font-bold">2+</span>
            <span className="text-sm text-center">Years Experience</span>
          </div>
          <div className="bg-gray-300 w-40 h-24 rounded-xl shadow-md flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
            <span className="text-2xl font-bold">20+</span>
            <span className="text-sm text-center">Projects</span>
          </div>
          <div className="bg-gray-300 w-40 h-24 rounded-xl shadow-md flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform duration-300">
            <span className="text-2xl font-bold">10+</span>
            <span className="text-sm text-center">Happy Clients</span>
          </div>
        </div>
      </div>
      <div className="image">
        <img
          src={profilePicture}
          className="h-[750px] w-[750px] rounded-2xl bg-gradient-to-b from-red-400 to-purple-500 px-2 py-2"
        ></img>
      </div>
    </div>
  );
};

export default Body;
