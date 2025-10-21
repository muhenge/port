import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20 sm:pt-24 pb-20 sm:pb-8 animated-bg relative">
      {/* Enhanced Background Effects */}
      <div className="bg-shapes"></div>
      <div className="particles"></div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="min-h-[calc(100vh-10rem)] sm:min-h-[calc(100vh-8rem)] flex flex-col justify-center items-center text-center">
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto">
            {/* Intro Text */}
            <div className="text-lg sm:text-xl text-gray-600 mb-4 font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Hi, my name is
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-800 mb-6 leading-tight animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
              Hervé M. <span className="block sm:inline">NGENZI</span>
            </h1>

            {/* Title & Description */}
            <div className="mb-8 animate-slide-in-right" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 mb-4">
                Full-Stack Web Developer
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                I build scalable and efficient web applications with modern frameworks and clean, maintainable code.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Link
                href="/contact"
                className="bg-black text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black hover:border-2 hover:border-black hover:shadow-lg transition-all duration-300 w-full sm:w-auto transform hover:scale-105 interactive-element hover-glow"
              >
                Let's get in touch →
              </Link>
              <Link
                href="/work"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold hover:border-black hover:text-black hover:shadow-lg transition-all duration-300 w-full sm:w-auto transform hover:scale-105 interactive-element hover-glow"
              >
                View my work
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center items-center space-x-8 animate-scale-in" style={{ animationDelay: '1.0s' }}>
              <a
                href="https://github.com/muhenge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-700 hover:text-black transition-colors duration-300 group transform hover:scale-110 hover-glow"
              >
                <div className="p-3 border-2 border-gray-200 group-hover:border-black transition-colors duration-300 mb-2">
                  <GitHubIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className="text-sm font-medium">GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/mugungaherve"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-gray-700 hover:text-black transition-colors duration-300 group transform hover:scale-110 hover-glow"
              >
                <div className="p-3 border-2 border-gray-200 group-hover:border-black transition-colors duration-300 mb-2">
                  <LinkedInIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href="mailto:ngenziherve1@gmail.com"
                className="flex flex-col items-center text-gray-700 hover:text-black transition-colors duration-300 group transform hover:scale-110 hover-glow"
              >
                <div className="p-3 border-2 border-gray-200 group-hover:border-black transition-colors duration-300 mb-2">
                  <EmailIcon className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className="text-sm font-medium">Email</span>
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
            </div>
          </div> */}
        </section>
      </div>
    </main>
  );
}
