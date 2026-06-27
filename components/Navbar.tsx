'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

const navItems = [
  { name: 'About me', href: '/' },
  { name: 'About ATS_PDZ', href: '/about-atspdz' },
  { name: 'Projects', href: '/projects' },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
  { name: 'Feedback', href: '/feedback' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-6 left-0 right-0 z-[100] flex justify-center w-full pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 px-3 sm:px-4 h-14 rounded-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg dark:shadow-none transition-colors duration-300 w-[95%] max-w-fit">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-2 pr-2 shrink-0 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image src="/navLogo.png" alt="ATS_PDZ Logo" width={32} height={32} className="object-contain dark:brightness-100" />
            </div>
            <span className="hidden lg:inline-block font-bold tracking-tighter text-sm">
              <span className="text-zinc-900 dark:text-zinc-100">ATS</span>
              <span className="text-zinc-400 dark:text-zinc-500">_</span>
              <span className="text-zinc-900 dark:text-white">PDZ</span>
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative px-3 py-1.5 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 group"
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={`relative z-10 transition-colors ${isActive ? 'text-zinc-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white'}`}>
                    {item.name}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-zinc-100 dark:bg-zinc-800 rounded-full"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2 pl-2 border-l border-zinc-200 dark:border-zinc-800 shrink-0">
            <a
              href="https://github.com/ATS-001/ATS_Portfolio_Resume_site"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              title="GitHub Source"
              aria-label="View source on GitHub"
            >
              <Github size={18} className="sm:w-5 sm:h-5 transition-transform" />
            </a>
            
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 sm:p-2.5 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {theme === 'dark' ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
              </button>
            )}

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 sm:p-2.5 ml-1 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-[90] bg-white/90 dark:bg-zinc-950/90 backdrop-blur-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl rounded-3xl overflow-hidden lg:hidden"
          >
            <div className="p-4 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`block px-4 py-3 rounded-2xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isActive
                        ? 'bg-blue-50/80 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                        : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
