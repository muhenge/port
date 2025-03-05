import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: "loan-payment-system",
      title: "Online Loan Payment System",
      description:
        "A comprehensive loan payment system featuring USSD and Android applications for accessibility.",
      features: [
        "Enabled clients to apply for loans and make payments.",
        "Developed a USSD app for basic mobile phones.",
        "Created employee portals for loan verification.",
      ],
      techStack: ["NestJS", "React.js", "Flutter", "PHP Laravel", "SQL"],
      link: "https://example.com",
    },
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
      link: "https://example.com",
    },
    {
      id: "hotel-management-system",
      title: "Hotel Management System",
      description:
        "A desktop application for managing hotel services and client payments.",
      features: [
        "Connected all hotel services into one platform.",
        "Secured client payment processing.",
        "Generated automated reports for management.",
      ],
      techStack: ["Java Swing", "Java"],
      link: "https://example.com",
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
      link: "https://example.com",
    },
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on, showcasing my skills and
          experience in building scalable and efficient web applications.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-black text-white px-3 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-white hover:text-black hover:shadow-md transition-all duration-300"
              >
                View Project
              </Link>
            )}
          </div>
        ))}
      </section>
    </main>
  );
}
