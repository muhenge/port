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
      category: "Backend Frameworks",
      items: [
        {
          name: "NestJS",
          icon: "devicon-nestjs-plain",
          url: "https://nestjs.com/",
        },
        {
          name: "PHP Laravel",
          icon: "devicon-laravel-plain",
          url: "https://laravel.com/",
        },
        {
          name: "Ruby on Rails",
          icon: "devicon-rails-plain",
          url: "https://rubyonrails.org/",
        },
        {
          name: "Express.js",
          icon: "devicon-express-original",
          url: "https://expressjs.com/",
        },
      ],
    },
    {
      category: "Frontend Frameworks",
      items: [
        {
          name: "React.js",
          icon: "devicon-react-original",
          url: "https://reactjs.org/",
        },
        {
          name: "Next.js",
          icon: "devicon-nextjs-original",
          url: "https://nextjs.org/",
        },
      ],
    },
    {
      category: "Databases",
      items: [
        {
          name: "SQL (PostgreSQL, MySQL)",
          icon: "devicon-postgresql-plain",
          url: "#",
        },
        {
          name: "NoSQL (MongoDB)",
          icon: "devicon-mongodb-plain",
          url: "https://www.mongodb.com/",
        },
        {
          name: "Redis",
          icon: "devicon-redis-plain",
          url: "https://redis.io/",
        },
      ],
    },
    {
      category: "Infrastructure & Tools",
      items: [
        {
          name: "Docker",
          icon: "devicon-docker-plain",
          url: "https://www.docker.com/",
        },
        {
          name: "Nginx",
          icon: "devicon-nginx-original",
          url: "https://nginx.org/",
        },
        { name: "Git", icon: "devicon-git-plain", url: "https://git-scm.com/" },
        { name: "Linux", icon: "devicon-linux-plain", url: "" },
        // {
        //   name: "Cloud / System Design",
        //   icon: "devicon-amazonwebservices-original",
        //   url: "#",
        // },
      ],
    },
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
        "Enabled clients to apply for loans and make loan payments.",
        "Ensured accessibility for both smartphone apps and basic mobile phones by creating a USSD app.",
        "Created employee portals and dashboards for loan applicant verification and printing applicant information.",
        "Managed the developer team while actively contributing to the code and system architecture.",
        "Led the team in selecting the most appropriate technologies to build robust and scalable software solutions.",
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
        "Reviewed code and provided actionable feedback while maintaining high standards for project structure and adherence to SOLID, DRY, and YAGNI principles.",
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
      company: "kLab",
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
        "Built and integrated APIs into front-end React.js applications.",
      ],
      techStack: ["PHP Laravel", "React.js/Redux", "MySQL", "PostgreSQL"],
    },
    {
      id: "back-end-trainer",
      title: "Back-end Software Development Trainer",
      company: "Private Sector Federation - KLAB",
      duration: "2022 – 2023",
      location: "Kigali, Rwanda",
      achievements: [
        "Led training programs for tech enthusiasts and recent graduates, focusing on backend web development.",
        "Designed and proposed training curricula, ensuring alignment with industry best practices.",
        "Provided hands-on mentorship, guiding students through real-world development challenges.",
        "Equipped trainees with fundamental and advanced knowledge in REST API development and database management.",
        "Taught practical problem-solving techniques for debugging and optimizing code performance.",
      ],
      techStack: [
        "REST APIs",
        "Database Management",
        "OOP",
        "Mentoring",
        "Curriculum Design",
      ],
    },
    {
      id: "digital-literacy-trainer",
      title: "Digital Literacy Trainer Consultant",
      company: "Rwanda Management Institute",
      duration: "03/2020 – Present",
      location: "Kigali, Rwanda",
      achievements: [
        "Train public sector workers in ICT skills using ICDL modules.",
        "Ensure workers have the basic skills needed for day-to-day work efficiency.",
        "Develop digital literacy programs for government employees.",
      ],
      techStack: ["ICDL", "ICT Training", "Digital Literacy", "Public Sector"],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-20 sm:pt-24 pb-20 sm:pb-8 animated-bg relative">
      {/* Enhanced Background Effects */}
      <div className="bg-shapes"></div>
      <div className="particles"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Introduction Section */}
        <section className="text-center mb-16 sm:mb-20 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            About Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hi, I&apos;m HERVE M. Ngenzi, a full-stack web developer passionate
            about building scalable and efficient web applications. With
            professional experience working with modern frameworks and tools, I
            specialize in solving complex problems with clean, maintainable
            code.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center">
            My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 lg:p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white shadow-sm hover:shadow-lg transition-all duration-300 hover-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                  <span className="w-2 h-6 bg-black dark:bg-white mr-3"></span>
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) =>
                    skill.url && skill.url !== "#" ? (
                      <a
                        key={idx}
                        href={skill.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-1.5 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 cursor-pointer flex items-center gap-2 transform hover:scale-105"
                      >
                        {skill.icon && (
                          <i className={`${skill.icon} text-base`}></i>
                        )}
                        {skill.name}
                      </a>
                    ) : (
                      <span
                        key={idx}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-1.5 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 cursor-pointer flex items-center gap-2"
                      >
                        {skill.icon && (
                          <i className={`${skill.icon} text-base`}></i>
                        )}
                        {skill.name}
                      </span>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center">
            Professional Experience
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white dark:bg-gray-900 p-6 lg:p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white shadow-sm hover:shadow-lg transition-all duration-300 hover-glow animate-fade-in-up"
                style={{ animationDelay: `${experiences.indexOf(exp) * 0.1}s` }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-1">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      {exp.duration} | {exp.location}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleAccordion(exp.id)}
                    className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white hover:border-2 hover:border-black dark:hover:border-white transition-all duration-300 font-medium interactive-element"
                    suppressHydrationWarning
                  >
                    {openAccordion === exp.id ? "Hide Details" : "View Details"}
                  </button>
                </div>

                {openAccordion === exp.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                        Key Achievements
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-3">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="pl-2 leading-relaxed">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.techStack.map((tech, index) => {
                          // Map tech names to devicon classes
                          const getIcon = (techName: string) => {
                            const iconMap: { [key: string]: string } = {
                              "NestJS framework": "devicon-nestjs-plain",
                              "React.js": "devicon-react-original",
                              Flutter: "devicon-flutter-plain",
                              "PHP Laravel": "devicon-laravel-plain",
                              "SQL databases": "devicon-mysql-plain",
                              TypeScript: "devicon-typescript-plain",
                              "Express.js framework":
                                "devicon-express-original",
                              MongoDB: "devicon-mongodb-plain",
                              Firebase: "devicon-firebase-plain",
                              Redis: "devicon-redis-plain",
                              AWS: "devicon-amazonwebservices-original",
                              "Node.js": "devicon-nodejs-plain",
                              PostgreSQL: "devicon-postgresql-plain",
                              Docker: "devicon-docker-plain",
                              "React.js/Redux": "devicon-react-original",
                              MySQL: "devicon-mysql-plain",
                            };
                            return iconMap[techName] || "";
                          };

                          return (
                            <span
                              key={index}
                              className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-4 py-2 text-sm font-medium flex items-center gap-2"
                            >
                              {getIcon(tech) && (
                                <i className={`${getIcon(tech)} text-base`}></i>
                              )}
                              {tech}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-12 text-center">
            Education & Certifications
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div
              className="bg-white dark:bg-gray-900 p-6 lg:p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white shadow-sm hover:shadow-lg transition-all duration-300 hover-glow animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                <span className="w-2 h-6 bg-black dark:bg-white mr-3"></span>
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    Microverse - Remote Full Stack Web Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    2019 – 2020
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    Andela Learning Community - Full-stack JavaScript
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    2018 – 2019
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">
                    Adventist University of Central Africa
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Networks and Communication Systems (2014 – 2017)
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div
              className="bg-white dark:bg-gray-900 p-6 lg:p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white shadow-sm hover:shadow-lg transition-all duration-300 hover-glow animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 flex items-center">
                <span className="w-2 h-6 bg-black dark:bg-white mr-3"></span>
                Certifications
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "Ruby on Rails",
                  "Programming in Python",
                  "Ruby and Databases",
                  "Version Control / Git",
                ].map((cert, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 px-3 py-1.5 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300 cursor-pointer"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="text-center bg-white dark:bg-gray-900 p-8 lg:p-12 border-2 border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Interested in collaborating or have a project in mind? Feel free to
            reach out!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white hover:border-2 hover:border-black dark:hover:border-white hover:shadow-md transition-all duration-300 interactive-element hover-glow transform hover:scale-105"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </main>
  );
}
