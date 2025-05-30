import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Spotlight from "./components/Spotlight";
import ChatWidget from "./components/ChatWidget";

export default function Home() {
  return (
    <main className="relative flex flex-col md:flex-row bg-black text-white min-h-screen">
      <Spotlight />
      <Sidebar />

      <section className="w-full md:w-2/3 lg:w-3/4 px-6 md:px-16 relative z-10">
        <Hero />
        <Experience />
        <Projects />
        {/* <ChatWidget /> */}
      </section>
    </main>
  );
}
