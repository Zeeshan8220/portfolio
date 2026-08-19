"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

const contactInfo = [
  { icon: FiMail, label: "Email", value: "zeeshanism1@gmail.com", href: "mailto:zeeshanism1@gmail.com" },
  { icon: FiPhone, label: "Phone", value: "+92 318 465 4967", href: "tel:+923184654967" },
  { icon: FiMapPin, label: "Location", value: "Muridke, Punjab", href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <p className="text-gray-500 leading-relaxed">
              Have an AI project in mind or want to collaborate? Fill out the
              form and I&apos;ll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                  {...(label !== "Location" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <div className="w-12 h-12 rounded-full bg-white border border-black/5 flex items-center justify-center group-hover:border-primary/50 transition-colors shadow-sm">
                    <Icon className="text-primary w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-gray-700 text-sm group-hover:text-primary transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-white border border-black/10 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/30 transition-all duration-300 text-sm shadow-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-white border border-black/10 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/30 transition-all duration-300 text-sm shadow-sm"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3.5 bg-white border border-black/10 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/30 transition-all duration-300 text-sm resize-none shadow-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3.5 rounded-xl font-medium hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm"
              >
                <FiSend className="w-4 h-4" />
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
