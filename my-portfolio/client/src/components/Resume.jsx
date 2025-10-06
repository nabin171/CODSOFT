import React from "react";
import { Download } from "lucide-react";

const Resume = () => {
  return (
    <div id="resume" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            My professional journey, education, and achievements
          </p>

          <a
            href="/Nabin_karki_resume.pdf"
            download="Nabin_Karki_Resume.pdf"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
