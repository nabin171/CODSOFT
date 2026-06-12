import React from "react";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

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
      "Completed a Bachelor of Computer Engineering with a strong focus on software engineering, data structures, algorithms, and web technologies. Actively participated in tech clubs, exhibitions, and hackathons.",
    courses: [
      "Data Structures & Algorithms",
      "OOP",
      "Database Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Technologies",
    ],
    achievements: [
      "NEC Registered Computer Engineer (Reg. No. 94520) – Nov 2025",
      "KEC Lite Exhibition 2025 – Presented 'Debug Adventure' 2D Platformer",
      "Learning Utsav 2024 – 30-Day Hands-On React/Next.js Challenge",
    ],
  },
  {
    id: 2,
    degree: "+2 Science (NEB)",
    institution: "Capital College and Research Center",
    location: "Kathmandu, Nepal",
    duration: "2018 – 2020",
    logo: "CCRC",
    color: "from-sky-500 to-blue-600",
    gpa: "GPA 3.31",
    status: "Completed",
    description:
      "Completed higher secondary education in the Science stream — Physics, Chemistry, Mathematics, and Computer Science — building a strong foundation in analytical and logical thinking.",
    courses: ["Physics", "Chemistry", "Mathematics", "Computer Science", "English"],
    achievements: [
      "Completed with Science stream distinction",
      "Strong foundation in mathematics and logical reasoning",
      "Developed early interest in programming",
    ],
  },
  {
    id: 3,
    degree: "Secondary Education Examination (SEE)",
    institution: "Marigold English Boarding School",
    location: "Bhaktapur, Nepal",
    duration: "Completed 2017",
    logo: "MEBS",
    color: "from-indigo-500 to-violet-600",
    gpa: "GPA 3.75",
    status: "Completed",
    description:
      "Completed secondary education with excellent academic performance, developing an early passion for technology and mathematics that laid the groundwork for computer engineering.",
    courses: [
      "Mathematics",
      "Science",
      "English",
      "Social Studies",
      "Opt. Mathematics",
    ],
    achievements: [
      "Graduated with GPA 3.75",
      "Strong performance in Mathematics and Science",
      "Developed early interest in technology",
    ],
  },
];

const statusColors = {
  Graduated: "bg-brand-50 text-brand-700 ring-brand-100",
  Completed: "bg-emerald-50 text-emerald-700 ring-emerald-100",
};

const Education = () => {
  return (
    <section id="education" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Academics"
          title="My"
          accent="Education"
          subtitle="The academic foundation that shaped my technical thinking and problem-solving abilities."
        />

        <div className="flex flex-col gap-6">
          {educationData.map((edu) => (
            <Reveal key={edu.id}>
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card card-hover">
                <div className={`h-1 w-full bg-gradient-to-r ${edu.color}`} />
                <div className="p-6 md:p-8">
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div
                      className={`grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${edu.color} text-center font-display text-sm font-extrabold leading-tight text-white shadow-glow`}
                    >
                      {edu.logo}
                    </div>

                    <div className="flex-1">
                      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-display text-lg font-bold leading-tight text-slate-900">
                            {edu.degree}
                          </h3>
                          <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-500">
                            <span className="flex items-center gap-1.5 font-medium text-slate-700">
                              <GraduationCap size={14} /> {edu.institution}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <MapPin size={14} /> {edu.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Calendar size={14} /> {edu.duration}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-shrink-0 items-center gap-2">
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 ring-1 ring-slate-200">
                            {edu.gpa}
                          </span>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusColors[edu.status]}`}
                          >
                            {edu.status}
                          </span>
                        </div>
                      </div>

                      <p className="mb-5 text-sm leading-relaxed text-slate-600">
                        {edu.description}
                      </p>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-600">
                            <BookOpen size={13} /> Key Courses
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course) => (
                              <span key={course} className="pill">
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-brand-600">
                            <Award size={13} /> Achievements
                          </h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2.5 text-sm text-slate-600"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-gradient" />
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
