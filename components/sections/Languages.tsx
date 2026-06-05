'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Languages as LanguagesIcon, Globe } from 'lucide-react';

const LANGUAGES = [
  { name: 'Malayalam', level: 'Native/Bilingual', color: 'from-blue-600 to-blue-500' },
  { name: 'German', level: 'Native/Bilingual', color: 'from-zinc-600 to-zinc-500' },
  { name: 'English', level: 'Professional Working', color: 'from-zinc-800 to-zinc-700' },
  { name: 'Hindi', level: 'Limited Working', color: 'from-green-600 to-green-500' },
  { name: 'East Syriac', level: 'Limited Working', color: 'from-red-600 to-red-500' }
];

export default function Languages() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white text-zinc-900 mb-4 tracking-tight flex items-center justify-center gap-4">
            <LanguagesIcon className="w-8 h-8 text-zinc-900 dark:text-zinc-100" />
            Languages
          </h2>
          <div className="w-20 h-1 bg-zinc-900 dark:bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LANGUAGES.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-colors backdrop-blur-sm flex items-start gap-4 group shadow-sm dark:shadow-none"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-br ${lang.color} bg-opacity-10 shadow-md dark:shadow-lg mt-1 group-hover:scale-110 transition-transform`}>
                <Globe className="w-6 h-6 text-white drop-shadow-md" />
              </div>
              <div>
                <h3 className="text-xl font-bold dark:text-white text-zinc-900 mb-1">{lang.name}</h3>
                <p className="text-sm dark:text-zinc-400 text-zinc-600 font-mono">{lang.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
