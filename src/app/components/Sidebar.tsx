import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Sidebar() {
  return (
    <>
      {/* ✅ Desktop Left Sidebar */}
      <aside className="hidden md:flex flex-col justify-between w-1/3 lg:w-1/4 h-screen sticky top-0 px-8 py-12">
        <div>
          <h1 className="text-4xl font-extrabold text-white">Talal Qasem</h1>
          <p className="text-lg text-gray-400 mt-2">Front-End Developer</p>

          <nav className="mt-10 flex flex-col space-y-4 text-base">
            <a href="#about" className="hover:text-teal-400">
              About
            </a>
            <a
              href="#experience"
              id="experience"
              className="hover:text-teal-400"
            >
              Experience
            </a>
            <a href="#projects" className="hover:text-teal-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-teal-400">
              Contact
            </a>
          </nav>

          <div className="mt-10 flex space-x-4">
            <a
              href="https://linkedin.com/in/talal-qasem"
              target="_blank"
              className="text-gray-400 hover:text-teal-400"
            >
              <FaLinkedin size={24} color="#fff" />
            </a>
            <a
              href="https://github.com/talal18"
              target="_blank"
              className="text-gray-400 hover:text-teal-400"
            >
              <FaGithub size={24} color="#fff" />
            </a>
          </div>
        </div>
      </aside>

      {/* ✅ Mobile Top Header */}
      <header className="flex md:hidden flex-col items-center px-6 pt-8 pb-4 w-full bg-black">
        <h1 className="text-3xl font-bold text-white">Talal Qasem</h1>
        <p className="text-sm text-gray-400">Front-End Developer</p>
        <nav className="mt-4 flex flex-wrap gap-4 text-sm">
          <a href="#about" className="hover:text-teal-400">
            About
          </a>
          <a href="#experience" className="hover:text-teal-400">
            Experience
          </a>
          <a href="#projects" className="hover:text-teal-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-teal-400">
            Contact
          </a>
        </nav>
      </header>
    </>
  );
}
