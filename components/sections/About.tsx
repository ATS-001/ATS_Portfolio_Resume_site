'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Briefcase, User, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-zinc-900 mb-4 tracking-tight">
            About <span className="text-zinc-900 dark:text-zinc-100">Me</span>
          </h2>
          <div className="w-20 h-1 bg-zinc-900 dark:bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 md:col-span-2 lg:col-span-2 p-8 rounded-3xl bg-card border border-border backdrop-blur-md shadow-sm dark:shadow-none"
          >
            <h3 className="text-2xl font-semibold dark:text-white text-zinc-900 mb-6 flex items-center gap-3">
              <User className="text-blue-500 dark:text-blue-400" /> Who I Am
            </h3>
            <p className="dark:text-zinc-400 text-zinc-700 text-lg leading-relaxed mb-6">
              I am a Computer Science Engineering student from Kerala who focuses on web systems, AI-assisted development, creative digital experiences, and search-driven platforms.
            </p>
            <p className="dark:text-zinc-400 text-zinc-700 text-lg leading-relaxed">
              I actively experiment with AI-powered development environments and modern creator tools to rapidly prototype ideas, websites, and digital experiences. My workflow heavily integrates vibe-coding methodologies to bridge the gap between design intent and functional code.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-3xl bg-card border border-border backdrop-blur-md flex flex-col justify-center shadow-sm dark:shadow-none"
          >
            <h3 className="text-2xl font-semibold dark:text-white text-zinc-900 mb-6 flex items-center gap-3">
              <Briefcase className="text-zinc-900 dark:text-zinc-100" /> Roles & Titles
            </h3>
            <ul className="space-y-3">
              {[
                { title: 'Founder & Owner of ATS_PDZ', color: 'bg-zinc-900 dark:bg-white' },
                { title: 'Founder of HexnicAI & C-WATS', color: 'bg-zinc-500' },
                { title: 'Co-Founder of StudyAI', color: 'bg-blue-500' },
                { title: 'Computer Science Engineering Student', color: 'bg-zinc-400 dark:bg-zinc-600' },
                { title: 'AI-Assisted Creator', color: 'bg-zinc-400 dark:bg-zinc-600' },
                { title: 'Vibe-Coder & Web Designer', color: 'bg-zinc-400 dark:bg-zinc-600' },
                { title: 'Creative Systems Builder', color: 'bg-zinc-400 dark:bg-zinc-600' },
                { title: 'Experimental Web Developer', color: 'bg-zinc-400 dark:bg-zinc-600' },
                { title: 'Search Platform Enthusiast', color: 'bg-zinc-400 dark:bg-zinc-600' },
                { title: 'Digital Branding Explorer', color: 'bg-zinc-400 dark:bg-zinc-600' }
              ].map((role, idx) => (
                <li key={idx} className="flex items-start">
                  <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${role.color}`} />
                  <span className="dark:text-zinc-300 text-zinc-700">{role.title}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
