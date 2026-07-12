'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Code2, PenTool, Database, Sparkles, Briefcase, Globe } from 'lucide-react';

export const SKILL_CATEGORIES = [
  {
    title: 'Programming',
    icon: Code2,
    skills: ['Python', 'C', 'HTML', 'CSS', 'JavaScript', 'C#', 'Java', 'Linux Shell Script'],
    color: 'text-blue-500 dark:text-blue-400'
  },
  {
    title: 'AI Tools',
    icon: Sparkles,
    skills: ['ChatGPT', 'Gemini', 'Suno', 'Websim.ai', 'AI Studio', 'V0', 'Lovable', 'Antigravity', 'Flow'],
    color: 'text-zinc-600 dark:text-zinc-400'
  },
  {
    title: 'Web & Design',
    icon: Globe,
    skills: ['Google Sites', 'Figma (Basics)', 'Google Stitch', 'Canva', 'Clipchamp', 'BandLab', 'Quillbot'],
    color: 'text-red-500 dark:text-red-400'
  },
  {
    title: 'Data & Database',
    icon: Database,
    skills: ['MySQL', 'Google Sheets', 'Excel'],
    color: 'text-green-500 dark:text-green-400'
  },
  {
    title: 'Software Suite',
    icon: Briefcase,
    skills: ['Microsoft Office', 'Google Workspace'],
    color: 'text-yellow-600 dark:text-yellow-500'
  },
  {
    title: 'Deployments & Tools',
    icon: Globe,
    skills: ['Vercel', 'Streamlit', 'GitHub', 'VS Code'],
    color: 'text-purple-500 dark:text-purple-400'
  },
  {
    title: 'Professional Skills',
    icon: PenTool,
    skills: ['Prompt Engineering', 'Project Structuring', 'Creative Thinking', 'UI Planning', 'SEO Optimization', 'Research', 'Digital Branding', 'Teamwork', 'Typing'],
    color: 'text-blue-500 dark:text-blue-400'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-4 tracking-tight">
            Technical <span className="text-zinc-900 dark:text-zinc-100">Arsenal</span>
          </h2>
          <div className="w-20 h-1 bg-zinc-900 dark:bg-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`p-6 rounded-3xl bg-card border border-border backdrop-blur-md shadow-sm dark:shadow-none hover:border-black/20 dark:hover:border-white/20 transition-colors group ${category.title === "Professional Skills" ? "md:col-span-2 lg:col-span-3" : ""}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 rounded-xl bg-white dark:bg-white/5 border border-zinc-100 dark:border-white/10 group-hover:scale-110 transition-transform shadow-sm dark:shadow-none">
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-white/5 text-sm font-medium text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-white/5 hover:bg-zinc-200 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
