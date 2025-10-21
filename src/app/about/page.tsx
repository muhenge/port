"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  // State to manage accordion open/close
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const skills = [
    {
      category: 'Backend',
      items: ['Nest.js', 'PHP Laravel', 'Ruby on Rails', 'Node.js', 'Express.js', 'TypeScript']
    },
    {
      category: 'Frontend',
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'JavaScript (ES6+)']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQL', 'Firebase']
    },
    {
      category: 'Tools & DevOps',
      items: ['Docker', 'Git', 'AWS', 'Nginx', 'Ubuntu', 'CI/CD']
    }
  ];
  const experiences = [
    {
      id: "jali-finance",
      title: "Senior Software Developer",
      company: "Jali Finance",
      duration: "03/2024 – 02/2025",
      location: "Remote",
      achievements: [
        "Developed an online loan payment system, featuring both USSD and Android applications.",
        "Enabled clients to apply for a loan or make loan payments.",
        "Ensured accessibility for both smartphone apps and basic mobile phones by creating the USSD app.",
        "Created employee portals and dashboards for loan applicant verification and printing new applicant information.",
        "Managed the developer team while actively contributing to the code and system architecture.",
        "Led the team in selecting the most appropriate technologies to build a robust and scalable software solution.",
      ],
      techStack: [
        "NestJS framework",
        "React.js",
        "Flutter",
        "PHP Laravel",
        "SQL databases",
        "TypeScript",
      ],
    },
    {
      id: "mensa-philosophical-circle",
      title: "Back-end Engineer",
      company: "Mensa Philosophical Circle",
      duration: "10/2023 – 05/2024",
      location: "Remote, Cyprus",
      achievements: [
        "Built performant and secure server-side applications and databases by selecting the right tools and technologies.",
        "Reviewed code for developers and ensured appropriate feedback, maintaining a 100% success rate in project structure, SOLID, DRY, and YAGNI principles.",
      ],
      techStack: [
        "TypeScript",
        "Express.js framework",
        "MongoDB",
        "Firebase",
        "React.js",
        "Redis",
        "AWS",
        "Render",
      ],
    },
    {
      id: "klab",
      title: "Full-stack Developer (Contractor)",
      company: "Klab",
      duration: "2022 – 2023",
      location: "Kigali, Rwanda",
      achievements: [
        "Contributed to the ihuzo project as a full-stack developer, leveraging PHP Laravel.",
        "Solved performance issues by handling extensive data from external APIs.",
        "Achieved a 100% cost reduction compared to the allocated budget for data acquisition.",
        "Reduced response times by nearly 70% using appropriate tools and server-side approaches.",
      ],
      techStack: ["PHP Laravel", "Node.js", "Redis", "PostgreSQL", "Livewire"],
    },
    {
      id: "globexcam-group",
      title: "Full-stack Developer",
      company: "GlobexCam Group",
      duration: "01/2021 – 07/2022",
      location: "Kigali, Rwanda",
      achievements: [
        "Built backend database applications with 100% normalization and no redundancy.",
        "Optimized large codebases for performance.",
        "Built and integrated APIs in frontend React.js applications.",
      ],
      techStack: ["PHP Laravel", "React.js/Redux", "MySQL", "PostgreSQL"],
    },
    {
      id: "andela",
      title: "ALC Open Source Project Contributor",
      company: "Andela",
      duration: "03/2023 – Present",
      location: "Remote",
      achievements: [
        "Participated as a back-end developer in Andela's open-source program.",
        "Collaborated with other developers to fix problems and improve existing projects.",
      ],
      techStack: ["PHP Laravel", "PostgreSQL", "Docker"],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-20 sm:pt-24 pb-20 sm:pb-8 animated-bg relative">
      {/* Enhanced Background Effects */}
      <div className="bg-shapes"></div>
      <div className="particles"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Introduction Section */}
        <section className="text-center mb-16 sm:mb-20 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hi, I'm HERVE M. Ngenzi, a full-stack web developer passionate about building scalable and efficient web applications. With professional experience working with modern frameworks and tools, I specialize in solving complex problems with clean, maintainable code.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white p-6 lg:p-8 border-2 border-gray-200 hover:border-black shadow-sm hover:shadow-lg transition-all duration-300 hover-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-6 bg-black mr-3"></span>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-12 text-center">
            Professional Experience
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white p-6 lg:p-8 border-2 border-gray-200 hover:border-black shadow-sm hover:shadow-lg transition-all duration-300 hover-glow animate-fade-in-up"
                style={{ animationDelay: `${experiences.indexOf(exp) * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-700 mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-600">
                      {exp.duration} | {exp.location}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleAccordion(exp.id)}
                    className="px-6 py-3 bg-black text-white hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 font-medium interactive-element"
                    suppressHydrationWarning
                  >
                    {openAccordion === exp.id ? "Hide Details" : "View Details"}
                  </button>
                </div>

                {openAccordion === exp.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-3">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="pl-2 leading-relaxed">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-800 px-4 py-2 text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center bg-white p-8 lg:p-12 border-2 border-gray-200">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">Let's Work Together</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Interested in collaborating or have a project in mind? Feel free to reach out!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-black hover:shadow-md transition-all duration-300 interactive-element hover-glow transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </main>
  );
}
