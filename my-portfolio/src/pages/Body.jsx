import React from "react";
import profilePicture from "../assets/profile_img.png";

const Body = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8 order-2 md:order-1">
          <div className="flex flex-col gap-6">
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm w-fit">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">
                Available for work
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">
                Hello, I'm
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Nabin Karki
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
              I'm a passionate{" "}
              <span className="font-semibold text-gray-900">
                MERN Stack Developer
              </span>{" "}
              and Technology Enthusiast based in Nepal. I focus on building
              modern, user-friendly and scalable web applications through clean
              code and thoughtful design.
            </p>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-fit">
              Say Hello! 👋
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                2+
              </span>
              <span className="text-xs md:text-sm text-gray-600 text-center font-medium">
                Years Experience
              </span>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                20+
              </span>
              <span className="text-xs md:text-sm text-gray-600 text-center font-medium">
                Projects
              </span>
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                10+
              </span>
              <span className="text-xs md:text-sm text-gray-600 text-center font-medium">
                Happy Clients
              </span>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative group">
            {/* Gradient Background Blob */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>

            {/* Image Container */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-1 rounded-3xl shadow-2xl">
                <img
                  src={profilePicture}
                  alt="Nabin Karki"
                  className="w-full h-full max-w-md md:max-w-lg rounded-3xl object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 transform group-hover:scale-110 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💻</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">MERN Stack</p>
                    <p className="text-xs text-gray-600">Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
