"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-16 text-white">
      <h2 className="text-3xl font-bold mb-12 border-b border-gray-700 pb-2 w-fit">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i * 0.2}
            variants={fadeUp}
          >
            {/* Replace with real project cards */}
            <h3 className="text-xl font-semibold mb-2 text-teal-400">
              Project Title
            </h3>
            <p className="text-gray-300">Project description goes here.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
