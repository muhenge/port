import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-20 sm:pt-24 pb-20 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Title */}
        <section className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Contact Me
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </section>

        {/* Two Column Layout: Contact Form & Social Links */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 lg:p-8 border-2 border-gray-200 hover:border-black shadow-sm hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-8 bg-black mr-3"></span>
              Send me a message
            </h2>
            <form
              action="https://formspree.io/f/xrgynnpl"
              method="POST"
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-gray-800 font-semibold mb-2 text-base">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-black transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800 font-semibold mb-2 text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-black transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-gray-800 font-semibold mb-2 text-base">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-black transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-800 font-semibold mb-2 text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:outline-none focus:border-black transition-colors duration-300 resize-vertical"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 hover:bg-white hover:text-black hover:border-2 hover:border-black hover:shadow-md transition-all duration-300 font-semibold"
              >
                Send Message →
              </button>
            </form>
          </div>

          {/* Social Links & Info */}
          <div className="bg-white p-6 lg:p-8 border-2 border-gray-200 hover:border-black shadow-sm hover:shadow-lg transition-all duration-300">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <span className="w-2 h-8 bg-black mr-3"></span>
              Let&apos;s Connect
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              You can also find me on these platforms or reach out directly. I&apos;m always open to discussing new opportunities and interesting projects.
            </p>

            <div className="space-y-6">
              <a
                href="https://github.com/muhenge"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-black transition-colors duration-300 group p-4 border-2 border-gray-200 group-hover:border-black"
              >
                <div className="mr-4">
                  <GitHubIcon className="w-8 h-8" />
                </div>
                <div>
                  <div className="font-semibold">GitHub</div>
                  <div className="text-sm text-gray-600">Check out my repositories</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/mugungaherve"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-700 hover:text-black transition-colors duration-300 group p-4 border-2 border-gray-200 group-hover:border-black"
              >
                <div className="mr-4">
                  <LinkedInIcon className="w-8 h-8" />
                </div>
                <div>
                  <div className="font-semibold">LinkedIn</div>
                  <div className="text-sm text-gray-600">Professional network</div>
                </div>
              </a>

              <a
                href="mailto:ngenziherve1@gmail.com"
                className="flex items-center text-gray-700 hover:text-black transition-colors duration-300 group p-4 border-2 border-gray-200 group-hover:border-black"
              >
                <div className="mr-4">
                  <EmailIcon className="w-8 h-8" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm text-gray-600">ngenziherve1@gmail.com</div>
                </div>
              </a>
            </div>

            <div className="mt-8 p-4 bg-gray-50 border-l-4 border-black">
              <p className="text-sm text-gray-600">
                <strong>Response Time:</strong> I typically respond within 24 hours during weekdays.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
