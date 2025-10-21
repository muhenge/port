import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: "ihuzo-project",
      title: "Ihuzo Project",
      description:
        "A full-stack project leveraging PHP Laravel to solve performance issues with external API data.",
      features: [
        "Reduced data acquisition costs by 100%.",
        "Improved response times by 70%.",
        "Integrated Redis for caching.",
      ],
      techStack: ["PHP Laravel", "Node.js", "Redis", "PostgreSQL"],
      link: "https://ihuzo.rw/?tab=dsp",
    },
    {
      id: "loan-payment-system",
      title: "Online Loan Payment System",
      description:
        "As a lead software developer, I developed the entire backend of the JaliKoi application, which is designed to simplify users' lives by bringing together a wide range of digital services—from financial tools to shopping and dining—all in one place.",
      features: [
        "Enabled clients to apply for loans and make payments.",
        "Developed a USSD application for basic mobile phones.",
        "Created employee portals for loan verification.",
      ],
      techStack: ["NestJS", "React.js", "PHP Laravel", "SQL", "Nginx"],
      link: "https://play.google.com/store/apps/details?id=koipay.co.koipay&pli=1",
    },
    {
      id: "globexcam-backend",
      title: "GlobexCam Backend Systems",
      description:
        "Architected and developed optimized backend database applications with focus on performance and scalability.",
      features: [
        "Built backend database applications with 100% normalization.",
        "Optimized large-scale codebase for performance and maintainability.",
        "Designed and integrated RESTful APIs for React.js frontend applications.",
      ],
      techStack: ["PHP Laravel", "React.js", "MySQL", "PostgreSQL", "REST APIs"],
      link: "#",
    },
    {
      id: "training-programs",
      title: "Backend Development Training Programs",
      description:
        "Led comprehensive training programs for tech enthusiasts and graduates, focusing on backend development and software engineering.",
      features: [
        "Designed training curricula aligned with industry best practices.",
        "Provided hands-on mentorship for real-world development challenges.",
        "Equipped trainees with REST API development and database management skills.",
      ],
      techStack: ["Training", "Mentoring", "REST APIs", "Database Design", "OOP"],
      link: "#",
    },
    {
      id: "open-source-contributions",
      title: "Open Source Contributions",
      description:
        "Collaborated with Andela's open-source program to improve existing projects and contribute to the developer community.",
      features: [
        "Fixed bugs and improved project structure.",
        "Worked with PHP Laravel and PostgreSQL.",
        "Used Docker for containerization.",
      ],
      techStack: ["PHP Laravel", "PostgreSQL", "Docker"],
      link: "https://github.com/ALCOpenSource/Mentor-Management-System-Team-1",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-20 sm:pt-24 pb-20 sm:pb-8 animated-bg relative">
      {/* Enhanced Background Effects */}
      <div className="bg-shapes"></div>
      <div className="particles"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <section className="text-center mb-16 sm:mb-20 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Featured Work
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Here are some selected highlights from my portfolio, showcasing my skills and
            experience in building scalable and efficient web applications.
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <span className="text-sm font-medium">Selected from other projects</span>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <span className="text-sm font-medium">More available upon request</span>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white p-6 lg:p-8 border-2 border-gray-200 shadow-md hover:shadow-xl hover:border-black transition-all duration-300 flex flex-col transform hover:-translate-y-2 animate-fade-in-up hover-glow"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 flex items-center">
                  <span className="w-2 h-8 bg-black mr-3"></span>
                  {project.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-base lg:text-lg">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Key Features
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="pl-2 leading-relaxed">{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => {
                      // Map tech names to devicon classes and URLs
                      const getTechInfo = (techName: string) => {
                        const techMap: { [key: string]: { icon: string; url: string } } = {
                          'PHP Laravel': { icon: 'devicon-laravel-plain', url: 'https://laravel.com/' },
                          'Node.js': { icon: 'devicon-nodejs-plain', url: 'https://nodejs.org/' },
                          'Redis': { icon: 'devicon-redis-plain', url: 'https://redis.io/' },
                          'PostgreSQL': { icon: 'devicon-postgresql-plain', url: 'https://www.postgresql.org/' },
                          'NestJS': { icon: 'devicon-nestjs-plain', url: 'https://nestjs.com/' },
                          'React.js': { icon: 'devicon-react-original', url: 'https://reactjs.org/' },
                          'SQL': { icon: 'devicon-mysql-plain', url: 'https://www.w3schools.com/sql/' },
                          'Nginx': { icon: 'devicon-nginx-original', url: 'https://nginx.org/' },
                          'Docker': { icon: 'devicon-docker-plain', url: 'https://www.docker.com/' },
                          'REST APIs': { icon: 'devicon-fastapi-plain', url: 'https://restfulapi.net/' },
                          'Database Design': { icon: 'devicon-postgresql-plain', url: '#' },
                          'OOP': { icon: 'devicon-java-plain', url: '#' },
                          'Training': { icon: '', url: '#' },
                          'Mentoring': { icon: '', url: '#' }
                        };
                        return techMap[techName] || { icon: '', url: '#' };
                      };

                      const techInfo = getTechInfo(tech);

                      return techInfo.url !== '#' ? (
                        <a
                          key={index}
                          href={techInfo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer flex items-center gap-2 transform hover:scale-105"
                        >
                          {techInfo.icon && (
                            <i className={`${techInfo.icon} text-base`}></i>
                          )}
                          {tech}
                        </a>
                      ) : (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer flex items-center gap-2"
                        >
                          {techInfo.icon && (
                            <i className={`${techInfo.icon} text-base`}></i>
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {project.link && (
                <div className="mt-auto">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-black text-white px-6 py-3 hover:bg-white hover:text-black hover:border-2 hover:border-black hover:shadow-md transition-all duration-300 font-semibold interactive-element"
                  >
                    View Project →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* More Projects CTA */}
        <section className="text-center mt-16 sm:mt-20 bg-white p-8 lg:p-12 border-2 border-gray-200 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Want to See More?
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            These are just a few highlights from my portfolio. I have worked on many more projects across different technologies and industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-black text-white px-6 py-3 font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-black transition-all duration-300 transform hover:scale-105 interactive-element hover-glow"
            >
              Request Full Portfolio
            </Link>
            <Link
              href="/about"
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 font-semibold hover:border-black hover:text-black transition-all duration-300 transform hover:scale-105 interactive-element hover-glow"
            >
              Learn More About Me
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
