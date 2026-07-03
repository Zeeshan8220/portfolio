"use client";

import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {year} Zeeshan Ahmad Afzal. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
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
                className="text-gray-500 hover:text-primary transition-colors duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
