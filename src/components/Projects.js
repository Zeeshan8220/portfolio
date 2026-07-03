"use client";

import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiFolder } from "react-icons/fi";

const projects = [
  {
    title: "Bill Negotiator",
    subtitle: "AI Personal Finance Negotiator",
    description:
      "Full-stack AI agent that connects to bank accounts via Plaid API, detects recurring bills, and autonomously negotiates lower rates via email and voice. FastAPI backend with JWT auth, React + TypeScript frontend, containerized with Docker Compose + Nginx.",
    tech: ["FastAPI", "React", "TypeScript", "PostgreSQL", "OpenAI", "Plaid", "Docker"],
    github: "https://github.com/Zeeshan8220/BillNegotiator-AI-Personal-Finance-Negotiator",
    live: null,
  },
  {
    title: "MedGenius AI",
    subtitle: "Clinical AI Assistant",
    description:
      "AI assistant for Pakistani medical professionals — patient summary generation, drug interaction checking with Pakistani brand names, differential diagnosis, and Urdu prescription writing. Built with Django REST Framework and Groq API (LLaMA 3.3 70B).",
    tech: ["Django REST", "React", "Vite", "Groq API", "LLaMA 3.3"],
    github: "https://github.com/Zeeshan8220/MedGenius-AI",
    live: null,
  },
  {
    title: "JARVIS",
    subtitle: "Voice-Controlled Desktop AI Assistant",
    description:
      "Iron Man-themed desktop assistant with weather, news, Gmail, WhatsApp automation, crypto price tracking, music playback, PC control, and hotword detection. Built with Python, PyQt6, and Groq/LLaMA.",
    tech: ["Python", "PyQt6", "Groq", "LLaMA", "Speech Recognition"],
    github: "https://github.com/Zeeshan8220/jarvis-assistant",
    live: null,
  },
  {
    title: "Smart Attendance System",
    subtitle: "Face Recognition Attendance",
    description:
      "Real-time face-recognition attendance pipeline with reliable detection under varied lighting. Flask + MySQL backend for logging and generating attendance reports.",
    tech: ["Python", "Flask", "OpenCV", "MySQL", "Face Recognition"],
    github: "https://github.com/Zeeshan8220/smart-attendance",
    live: null,
  },
  {
    title: "AI Medical Diagnosis",
    subtitle: "Symptom-to-Diagnosis Engine",
    description:
      "Symptom-to-diagnosis engine combining rule-based reasoning with ML classification. Extensible knowledge base architecture for adding new conditions and symptoms.",
    tech: ["Python", "Scikit-learn", "Flask", "Machine Learning"],
    github: "https://github.com/Zeeshan8220/ai-medical-diagnosis",
    live: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card overflow-hidden group cursor-default"
            >
              <div className="h-48 bg-gradient-to-br from-rose-500/10 via-primary/5 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                <FiFolder className="w-16 h-16 text-rose-500/30 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-primary/30 transition-colors"
                    aria-label="View source code"
                  >
                    <FiGithub className="w-5 h-5 text-white" />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-primary/30 transition-colors"
                      aria-label="View live demo"
                    >
                      <FiExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs text-rose-500/70 font-medium mb-1 uppercase tracking-wider">
                  {project.subtitle}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
