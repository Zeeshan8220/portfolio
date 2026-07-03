"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiServer,
  FiSmartphone,
  FiAward,
  FiBriefcase,
  FiSmile,
} from "react-icons/fi";

const stats = [
  { icon: FiBriefcase, value: "3+", label: "Years Building" },
  { icon: FiAward, value: "10+", label: "Projects Done" },
  { icon: FiSmile, value: "BS AI", label: "Final Year" },
];

const highlights = [
  {
    icon: FiCode,
    title: "AI/ML Engineering",
    description: "Building end-to-end ML pipelines, computer vision models, and LLM-powered applications with Python and modern frameworks.",
  },
  {
    icon: FiServer,
    title: "Full-Stack Development",
    description: "Architecting production-grade systems with FastAPI, React, TypeScript, PostgreSQL, and Docker deployment.",
  },
  {
    icon: FiLayout,
    title: "LLMs & GenAI",
    description: "Integrating LangChain, LlamaIndex, OpenAI, Claude, and Gemini APIs for intelligent agent-based solutions.",
  },
  {
    icon: FiSmartphone,
    title: "DevOps & Deployment",
    description: "Containerizing applications with Docker Compose, configuring Nginx, and deploying to cloud infrastructure.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-dark via-transparent to-bg-dark pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6">
              Final-year BS Artificial Intelligence student with proven ability
              to architect and deploy production-grade full-stack AI applications.
              Experienced in building end-to-end systems — from machine learning
              pipelines and computer vision models to RESTful APIs and interactive
              frontends.
            </p>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
              Proficient in Python, FastAPI, React, TypeScript, SQL, and Docker
              deployment. Passionate about applying AI to solve real-world
              problems across fintech, healthcare, and automation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card p-5 sm:p-6 hover:!border-primary/30 cursor-default"
              >
                <item.icon className="text-primary w-7 h-7 mb-3" />
                <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 sm:gap-8"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              variants={itemVariants}
              className="text-center glass-card p-5 sm:p-8"
            >
              <Icon className="text-primary w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
