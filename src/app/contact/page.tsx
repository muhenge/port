import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function ContactPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      {/* Page Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto mb-12">
        <form
          action="https://formspree.io/f/xrgynnpl"
          method="POST"
          className="bg-white p-6 border-2 border-black shadow-md"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-800 font-semibold mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-800 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 hover:bg-white hover:text-black hover:shadow-md transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Social Links */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Let&apos;s Connect</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/muhenge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors duration-300"
          >
            <GitHubIcon className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/mugungaherve"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition-colors duration-300"
          >
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a
            href="mailto:ngenziherve1@gmail.com"
            className="text-gray-700 hover:text-black transition-colors duration-300"
          >
            <EmailIcon className="w-8 h-8" />
          </a>
        </div>
      </section>
    </main>
  );
}
