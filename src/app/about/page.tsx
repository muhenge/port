"use client"; // Required for interactivity (accordions)

import { useState } from "react";
import Link from "next/link";

export default function AboutPage() {
  // State to manage accordion open/close
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

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
    <main className="min-h-screen p-8 bg-gray-50">
      {/* Introduction Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          About Me
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hi, I&apos;m HERVE M. Ngenzi, a full-stack web developer with a passion for building scalable and efficient web applications. I have professional experience working with modern frameworks and tools, and I love solving complex problems with clean and maintainable code.
        </p>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Backend Skills */}
          <div className="bg-white p-6 border-2 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Nest.js", "PHP Laravel", "Ruby on Rails"].map((skill) => (
                <span
                  key={skill}
                  className="bg-black text-white px-4 py-2 text-sm hover:bg-white hover:text-black hover:shadow-md transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Frontend Skills */}
          <div className="bg-white p-6 border-2 shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React.js", "Next.js"].map((skill) => (
                <span
                  key={skill}
                  className="bg-black text-white px-4 py-2 text-sm hover:bg-white hover:text-black hover:shadow-md transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Database Skills */}
          <div className="bg-white p-6 shadow-md border-2 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "PostgreSQL", "MongoDB"].map((skill) => (
                <span
                  key={skill}
                  className="bg-black text-white px-4 py-2 text-sm hover:bg-white hover:text-black hover:shadow-md transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="bg-white p-6 shadow-md border-2 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {["Ubuntu", "Nginx", "Docker"].map((skill) => (
                <span
                  key={skill}
                  className="bg-black text-white px-4 py-2  text-sm hover:bg-white hover:text-black hover:shadow-md transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Professional Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-white p-6 border-2 border-black shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {exp.title} | {exp.company}
              </h3>
              <p className="text-gray-600 mb-2">
                {exp.duration} | {exp.location}
              </p>
              <button
                onClick={() => toggleAccordion(exp.id)}
                className="text-black p-2 border-2 hover:text-white hover:bg-black focus:outline-none"
              >
                {openAccordion === exp.id ? "Hide Details" : "View Details"}
              </button>
              {openAccordion === exp.id && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold text-gray-800 mt-4 mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-black text-white px-3 py-1 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Let&apos;s Work Together</h2>
        <p className="text-lg text-gray-600 mb-6">
          Interested in collaborating or have a project in mind? Feel free to reach out!
        </p>
        <Link
          href="/contact"
          className="bg-black p-4 relative group text-lg font-semibold text-white hover:bg-white hover:text-black hover:shadow-lg hover:shadow-black/50 transition-all duration-300"
        >
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
