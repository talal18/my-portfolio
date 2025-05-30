"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-start px-6 md:px-16 py-12"
    >
      <div className="space-y-6 max-w-3xl">
        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-gray-300 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          variants={fadeUp}
        >
          I craft elegant, scalable web applications with a passion for UX and
          clean, efficient code.
        </motion.h2>

        <motion.p
          className="text-gray-400 text-lg leading-loose"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
          variants={fadeUp}
        >
          With over 3 years of experience in front-end development, I specialize
          in building performant, accessible web applications using React,
          TypeScript, and modern JavaScript. I’m deeply passionate about
          creating seamless user experiences through clean, maintainable code
          and thoughtful UI architecture.
          <br />
          Beyond the front-end, I have hands-on experience with back-end
          technologies like Express.js and MongoDB, allowing me to build and
          maintain full-stack applications when needed. I also bring a strong
          UI/UX background, collaborating with designers or creating custom
          interfaces myself.
          <br />
          My roots in graphic design continue to influence my work — crafting
          polished layouts and ensuring pixel-perfect visual consistency. I take
          pride in bridging the gap between design and development while
          optimizing for performance and responsiveness.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block border border-teal-400 text-teal-400 px-6 py-2 rounded hover:bg-teal-400 hover:text-black transition"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          variants={fadeUp}
        >
          View My Projects
        </motion.a>
      </div>
    </section>
  );
}
