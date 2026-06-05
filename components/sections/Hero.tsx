'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Youtube, Twitter, Download, ArrowRight, Code2, Code, Gamepad2 } from 'lucide-react';
import Link from 'next/link';
import EditorialPortrait from '../EditorialPortrait';

const ROLES = [
  'Computer Science Engineering Student',
  'Developer',
  'Web Designer',
  'Founder',
  'AI-Assisted Creator',
  'Vibe-Coder'
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center lg:text-left">
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600 dark:bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300 tracking-wide uppercase">Available for work</span>
            </div>

            <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.05] font-medium tracking-tight text-zinc-900 dark:text-white mb-6">
              I&apos;m <span className="text-zinc-950 dark:text-zinc-50">Aaron</span>
              <br />
              Thalakkottor Sooraj
            </h1>

            <div className="h-10 mb-6 flex items-center justify-center lg:justify-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg sm:text-xl font-medium text-zinc-500 dark:text-zinc-400 font-mono tracking-tight"
                >
                  &gt; {ROLES[currentRole]}<span className="animate-pulse">_</span>
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              &quot;Building creative digital systems where technology, AI, design, and storytelling intersect.&quot;
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Link href="/projects" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group">
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-black/5 dark:bg-white/5 text-zinc-900 dark:text-white font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-colors border border-black/10 dark:border-white/10 backdrop-blur-md flex items-center justify-center gap-2">
                Contact Me
              </Link>
              <a href="#" className="w-full sm:w-auto p-3.5 rounded-full bg-black/5 dark:bg-white/5 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors border border-black/10 dark:border-white/10 backdrop-blur-md flex items-center justify-center group" title="Download Resume">
                <Download className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/aaronts127pdz/', name: 'LinkedIn' },
                { icon: Github, href: 'https://github.com/ATS-001', name: 'GitHub' },
                { icon: Youtube, href: 'https://www.youtube.com/@ats_pdz', name: 'YouTube' },
                { icon: Twitter, href: 'https://x.com/ATSpdz', name: 'X (Twitter)' },
                { icon: Code2, href: 'https://www.freecodecamp.org/Atspdz-001', name: 'FreeCodeCamp' },
                { icon: Code, href: 'https://codepen.io/prime-dot-zip', name: 'CodePen' },
                { icon: Gamepad2, href: 'https://scratch.mit.edu/users/APPU02112007/', name: 'Scratch' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 dark:hover:border-white/20 transition-all hover:-translate-y-1"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Subtle background layer instead of bright neon blur */}
              <div className="absolute inset-0 bg-zinc-100/50 dark:bg-zinc-900/50 rounded-full blur-3xl" />
              <div className="absolute inset-4 border border-zinc-200/80 dark:border-zinc-800 rounded-full border-dashed animate-[spin_40s_linear_infinite]" />
              
              <div className="absolute inset-8">
                 <EditorialPortrait imageSrc="/portrait.png.png" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-zinc-400 dark:via-zinc-500 to-transparent animate-[pulse_2s_ease-in-out_infinite]" />
      </motion.div>
    </section>
  );
}
