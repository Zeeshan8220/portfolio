"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiChevronDown } from "react-icons/fi";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Scene3D />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-dark pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-8"
        >
          <div className="text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="text-primary font-medium text-lg mb-4 tracking-wider"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-gray-900"
            >
              <span className="text-gradient-animated">Zeeshan Ahmad Afzal</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-600 font-medium mb-4"
            >
              AI Engineer | Full-Stack Developer | Computer Vision
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-500 max-w-xl mb-8 text-base sm:text-lg leading-relaxed"
            >
              Architecting production-grade AI applications — from ML pipelines and
              computer vision models to RESTful APIs and interactive frontends.
            </motion.p>
          </div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-xl shadow-rose-500/10 border-2 border-white">
              <Image
                src="/my pic.jpeg"
                alt="Zeeshan Ahmad Afzal"
                width={256}
                height={256}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10 blur-sm" />
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 hover:scale-105 glow"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="bg-white text-gray-700 px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all duration-300 border border-black/10 shadow-sm"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: FiGithub, href: "https://github.com/Zeeshan8220", label: "GitHub" },
            { icon: FiLinkedin, href: "https://www.linkedin.com/in/zeeshan-ahmad-81440a29a/", label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-400 hover:text-primary transition-colors duration-300 hover:scale-110 inline-block"
            >
              <Icon size={22} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.5, duration: 0.5 },
          y: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <FiChevronDown size={28} />
      </motion.div>
    </section>
  );
}
