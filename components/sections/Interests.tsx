'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Heart, Laptop, Bot, Library, Leaf, Play, Cpu } from 'lucide-react';

const INTERESTS = [
  { name: 'Web Development', icon: Laptop, color: 'text-blue-500 dark:text-blue-400' },
  { name: 'AI-Assisted Project Creation', icon: Bot, color: 'text-zinc-600 dark:text-zinc-400' },
  { name: 'Vibe-Coding', icon: Cpu, color: 'text-zinc-800 dark:text-zinc-300' },
  { name: 'Anime & Manga Culture', icon: Play, color: 'text-red-500 dark:text-red-400' },
  { name: 'Literature & Storytelling', icon: Library, color: 'text-yellow-600 dark:text-yellow-500' },
  { name: 'Sustainable Technology', icon: Leaf, color: 'text-green-600 dark:text-green-500' },
  { name: 'Creative Media', icon: Heart, color: 'text-blue-600 dark:text-blue-400' },
];

export default function Interests() {
  return (
    <section id="interests" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-zinc-900 mb-4 tracking-tight">
            My <span className="text-zinc-900 dark:text-zinc-100">Interests</span>
          </h2>
          <div className="w-20 h-1 bg-zinc-900 dark:bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {INTERESTS.map((interest, idx) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-50 dark:bg-white/[0.03] border border-zinc-200 dark:border-white/5 backdrop-blur-md cursor-default hover:bg-zinc-100 dark:hover:bg-white/[0.06] transition-all shadow-sm dark:shadow-none"
            >
              <interest.icon className={`w-5 h-5 ${interest.color}`} />
              <span className="text-lg font-medium dark:text-zinc-200 text-zinc-800">{interest.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
