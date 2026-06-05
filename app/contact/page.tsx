"use client";

import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import { Mail, MapPin, Linkedin, Github, Youtube, Twitter, Code2, Gamepad2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const SOCIAL_LINKS = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/aaronts127pdz/', name: 'LinkedIn', color: 'hover:text-blue-500', bg: 'hover:bg-blue-500/10' },
  { icon: Github, href: 'https://github.com/ATS-001', name: 'GitHub', color: 'hover:text-zinc-900 dark:hover:text-white', bg: 'hover:bg-zinc-200/50 dark:hover:bg-white/10' },
  { icon: Youtube, href: 'https://www.youtube.com/@ats_pdz', name: 'YouTube', color: 'hover:text-red-500', bg: 'hover:bg-red-500/10' },
  { icon: Twitter, href: 'https://x.com/ATSpdz', name: 'X (Twitter)', color: 'hover:text-zinc-900 dark:hover:text-white', bg: 'hover:bg-zinc-200/50 dark:hover:bg-white/10' },
  { icon: Code2, href: 'https://www.freecodecamp.org/Atspdz-001', name: 'FreeCodeCamp', color: 'hover:text-green-500', bg: 'hover:bg-green-500/10' },
  { icon: Code2, href: 'https://codepen.io/prime-dot-zip', name: 'CodePen', color: 'hover:text-zinc-900 dark:hover:text-white', bg: 'hover:bg-zinc-200/50 dark:hover:bg-white/10' },
  { icon: Gamepad2, href: 'https://scratch.mit.edu/users/APPU02112007/', name: 'Scratch', color: 'hover:text-amber-500', bg: 'hover:bg-amber-500/10' },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-pulse" />
            Available for new opportunities
          </motion.div>
          <h1 className="text-[clamp(3rem,8vw,5rem)] leading-[1.05] font-medium dark:text-zinc-50 text-zinc-950 mb-6 tracking-tight">
            Let&apos;s build something <br className="hidden md:block" />
            <span className="text-zinc-500 dark:text-zinc-400">
              extraordinary
            </span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            Whether you have a wild idea, a business challenge, or just want to connect—my inbox is always open. Let&apos;s make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          
          {/* Main Contact Card */}
          <motion.div 
            className="lg:col-span-3 bg-card text-card-foreground border border-border rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden group"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-zinc-50/50 dark:bg-zinc-900/10 pointer-events-none" />
            
            <h2 className="text-2xl font-semibold dark:text-white text-zinc-900 mb-8 tracking-tight">Reach Out directly</h2>
            
            <div className="space-y-6 relative z-10">
              <a href="mailto:aaronsooraj001@gmail.com" className="group/btn flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex-shrink-0 p-4 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover/btn:scale-105 group-hover/btn:bg-zinc-900 group-hover/btn:text-white dark:group-hover/btn:bg-zinc-100 dark:group-hover/btn:text-zinc-900 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">Email</p>
                    <p className="font-semibold text-base sm:text-lg dark:text-white text-zinc-900 truncate">aaronsooraj001@gmail.com</p>
                  </div>
                </div>
                <div className="hidden sm:flex flex-shrink-0 items-center justify-center p-3 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 group-hover/btn:bg-zinc-900 group-hover/btn:text-white dark:group-hover/btn:bg-zinc-100 dark:group-hover/btn:text-zinc-900 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 -rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                </div>
              </a>

              <div className="flex flex-col sm:flex-row sm:items-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 gap-4">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="flex-shrink-0 p-4 rounded-full bg-zinc-200/50 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-1">Location</p>
                    <p className="font-medium text-base dark:text-zinc-300 text-zinc-700 leading-snug">Mattom PO, Thrissur<br/>Kerala, India – 680602</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-card text-card-foreground border border-border rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-semibold dark:text-white text-zinc-900 mb-6 tracking-tight">Digital Presence</h2>
              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 ${social.bg}`}
                  >
                    <div className={`flex items-center gap-3 text-zinc-600 dark:text-zinc-400 transition-colors duration-300 ${social.color}`}>
                      <social.icon className="w-5 h-5 group-hover:scale-105 transition-transform duration-300" />
                      <span className="font-medium text-sm text-zinc-700 dark:text-zinc-300">{social.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Note */}
            <div className="bg-zinc-900 dark:bg-zinc-100 rounded-3xl p-8 text-white dark:text-zinc-900 shadow-sm relative overflow-hidden">
               <h3 className="text-lg font-semibold mb-2 tracking-tight">Fast Response Time</h3>
               <p className="text-zinc-400 dark:text-zinc-600 text-sm leading-relaxed font-medium">
                 I typically reply within 24-48 hours. Looking forward to discussing exciting ideas with you!
               </p>
            </div>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
