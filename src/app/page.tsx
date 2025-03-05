import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub"; // GitHub icon
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // LinkedIn icon
import EmailIcon from "@mui/icons-material/Email"; // Email icon

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      {/* Intro Text */}
      <div className="text-lg text-gray-600 mb-2">
        Hi, my name is
      </div>

      {/* Name and Title */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          HERVE M. Ngenzi
        </h1>
        <span className="text-xl text-gray-600">
          I am a full-stack web developer
        </span>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-8">
        <Link
          href="/contact"
          className="bg-black p-4 relative group text-lg font-semibold text-white hover:bg-white hover:text-black hover:shadow-lg hover:shadow-black/50 hover:border-black transition-all duration-300"
        >
          Let&apos;s get in touch
        </Link>
      </div>

      {/* Social Links */}
      <div className="mt-12 flex space-x-6">
        {/* GitHub */}
        <a
          href="https://github.com/muhenge"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-colors duration-300"
        >
          <GitHubIcon className="w-8 h-8" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/mugungaherve"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-black transition-colors duration-300"
        >
          <LinkedInIcon className="w-8 h-8" />
        </a>

        {/* Email */}
        <a
          href="mailto:ngenziherve1@gmail.com"
          className="text-gray-700 hover:text-black transition-colors duration-300"
        >
          <EmailIcon className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
