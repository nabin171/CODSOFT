import React from "react";
import { Code2, Lightbulb, Target, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex problems into simple, elegant solutions",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that exceed expectations",
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Love what I do and always eager to learn new technologies",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Visual */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-md transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-2">💻</div>
                    <h3 className="font-bold text-gray-900">Developer</h3>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-2">🎨</div>
                    <h3 className="font-bold text-gray-900">Designer</h3>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-2">🚀</div>
                    <h3 className="font-bold text-gray-900">Innovator</h3>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-md transform hover:scale-105 transition-transform">
                    <div className="text-4xl mb-2">⚡</div>
                    <h3 className="font-bold text-gray-900">Fast Learner</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Hi, I'm Nabin Karki
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a passionate{" "}
                <span className="font-semibold text-gray-900">
                  MERN Stack Developer
                </span>{" "}
                from Nepal with over 2 years of experience in building modern
                web applications. I specialize in creating responsive,
                user-friendly interfaces and robust backend systems.
              </p>
              <p>
                My journey in web development started with a curiosity about how
                websites work, and it has evolved into a deep passion for
                creating digital experiences that make a difference. I love
                turning complex problems into simple, beautiful, and intuitive
                solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                with the developer community.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 hover:shadow-md transition-shadow"
                  >
                    <Icon className="text-blue-600 mb-2" size={24} />
                    <h4 className="font-bold text-gray-900 text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
