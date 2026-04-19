import React from "react";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Computer Engineering (BE)",
    institution: "Kantipur Engineering College",
    location: "Dhapakhel, Lalitpur, Nepal",
    duration: "Apr 2020 – Apr 2025",
    logo: "KEC",
    color: "from-blue-500 to-indigo-600",
    gpa: "70.51%",
    status: "Graduated",
    description:
      "Completed a Bachelor of Computer Engineering with strong focus on software engineering, data structures, algorithms, and web technologies. Actively participated in college tech clubs, exhibitions, and hackathons throughout the program.",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
    ],
    achievements: [
      "NEC Registered Computer Engineer (Reg. No. 94520) – Nov 2025",
      "KEC Lite Exhibition 2025 – Presented 'Debug Adventure' 2D Platformer",
      "Learning Utsav Certificate 2024 – 30-Day Hands-On React/Next.js Challenge",
    ],
  },
  {
    id: 2,
    degree: "+2 Science (NEB)",
    institution: "Capital College and Research Center (CCRC)",
    location: "Kathmandu, Nepal",
    duration: "2018 – 2020",
    logo: "CCRC",
    color: "from-violet-500 to-purple-600",
    gpa: "GPA 3.31",
    status: "Completed",
    description:
      "Completed higher secondary education with a focus on the Science stream — Physics, Chemistry, Mathematics, and Computer Science. Built a strong foundation in analytical and logical thinking that directly supports my engineering career.",
    courses: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "English",
    ],
    achievements: [
      "Completed with Science stream distinction",
      "Strong foundation in mathematics and logical reasoning",
      "Developed early interest in programming and computer science",
    ],
  },
  {
    id: 3,
    degree: "Secondary Education Examination (SEE)",
    institution: "Marigold English Boarding School",
    location: "Bhaktapur, Nepal",
    duration: "Completed 2017",
    logo: "MEBS",
    color: "from-emerald-500 to-teal-600",
    gpa: "GPA 3.75",
    status: "Completed",
    description:
      "Completed secondary education with excellent academic performance. Developed an early passion for technology and mathematics, which laid the groundwork for pursuing computer engineering.",
    courses: [
      "Mathematics",
      "Science",
      "English",
      "Social Studies",
      "Optional Mathematics",
    ],
    achievements: [
      "Graduated with GPA 3.75",
      "Strong performance in Mathematics and Science",
      "Developed early interest in technology and computers",
    ],
  },
];

const statusColors = {
  Graduated: "bg-blue-50 text-blue-600",
  Ongoing: "bg-yellow-50 text-yellow-600",
  Completed: "bg-emerald-50 text-emerald-600",
};

const Education = () => {
  return (
    <section
      id="education"
      className="py-10 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The academic foundation that shaped my technical thinking and
            problem-solving abilities.
          </p>
        </div>

        {/* Education Cards */}
        <div className="flex flex-col gap-8">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group"
            >
              {/* Colored top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${edu.color}`} />

              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center text-white font-extrabold text-sm shadow-lg text-center leading-tight`}
                    >
                      {edu.logo}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Top Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 leading-tight">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mt-1">
                          <span className="flex items-center gap-1 font-semibold text-gray-700">
                            <GraduationCap size={14} /> {edu.institution}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} /> {edu.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} /> {edu.duration}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">
                          {edu.gpa}
                        </span>
                        <span
                          className={`px-3 py-1 text-xs font-semibold rounded-full ${statusColors[edu.status]}`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {edu.description}
                    </p>

                    {/* Courses + Achievements */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                          <BookOpen size={13} /> Key Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wide mb-2">
                          <Award size={13} /> Achievements
                        </h4>
                        <ul className="space-y-1.5">
                          {edu.achievements.map((item, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
