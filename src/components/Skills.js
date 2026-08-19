"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiCode,
  FiServer,
  FiLayout,
  FiCpu,
  FiDatabase,
  FiTool,
} from "react-icons/fi";

const skillCategories = [
  {
    icon: FiCode,
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "HTML5", "CSS3"],
  },
  {
    icon: FiServer,
    title: "Backend",
    skills: ["FastAPI", "Flask", "REST APIs", "JWT Auth", "SQLAlchemy", "PostgreSQL", "MySQL"],
  },
  {
    icon: FiLayout,
    title: "Frontend",
    skills: ["React 18", "Vite", "Tailwind CSS", "Recharts", "Axios"],
  },
  {
    icon: FiCpu,
    title: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "LLMs", "RAG", "Prompt Engineering"],
  },
  {
    icon: FiDatabase,
    title: "LLMs / GenAI",
    skills: ["LangChain", "LlamaIndex", "OpenAI API", "Claude API", "Gemini API", "Hugging Face"],
  },
  {
    icon: FiTool,
    title: "Tools & DevOps",
    skills: ["Docker", "Docker Compose", "Nginx", "Git", "GitHub"],
  },
];

function SkillCategory({ category, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <category.icon className="text-primary w-5 h-5" />
        <h3 className="text-gray-900 font-semibold text-base">{category.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="text-xs px-3 py-1.5 rounded-full bg-rose-50 text-primary border border-rose-100 font-medium"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
