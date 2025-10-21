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
        "Developed a USSD app for basic mobile phones.",
        "Created employee portals for loan verification.",
      ],
      techStack: ["NestJS", "React.js", "PHP Laravel", "SQL", "Nginx"],
      link: "https://play.google.com/store/apps/details?id=koipay.co.koipay&pli=1",
    },
    {
      id: "open-source-contributions",
      title: "Open Source Contributions",
      description:
        "Collaborated with Andela's open-source program to improve existing projects.",
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
    <main className="min-h-screen bg-gray-50 pt-20 sm:pt-24 pb-20 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <section className="text-center mb-16 sm:mb-20 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            My Work
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on, showcasing my skills and
            experience in building scalable and efficient web applications.
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white p-6 lg:p-8 border-2 border-gray-200 shadow-md hover:shadow-xl hover:border-black transition-all duration-300 flex flex-col transform hover:-translate-y-2 animate-fade-in-up"
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
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1.5 text-sm font-medium hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {project.link && (
                <div className="mt-auto">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-black text-white px-6 py-3 hover:bg-white hover:text-black hover:border-2 hover:border-black hover:shadow-md transition-all duration-300 font-semibold"
                  >
                    View Project →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </main >
  );
}
