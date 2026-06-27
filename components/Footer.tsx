import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github, Twitter, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-zinc-200 dark:border-zinc-800 bg-transparent overflow-hidden text-zinc-600 dark:text-zinc-400 font-sans">
      {/* We can optionally keep FooterParticles or rely on global ParticleBackground. We'll keep it transparent to see global ParticleBackground. */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-8 lg:pt-24 lg:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 lg:mb-20">
          
          {/* Brand & Location */}
          <div className="lg:col-span-2 flex flex-col items-start space-y-6">
            <Link href="/" className="inline-block text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group">
              <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">ATS</span>_PDZ
            </Link>
            <p className="max-w-md text-base leading-relaxed text-zinc-500 dark:text-zinc-400 font-medium">
              Building creative digital systems, AI-assisted platforms, and exploring the intersection of design and technology.
            </p>
            <div className="flex items-center gap-2 mt-4 text-sm font-medium pt-2 text-zinc-900 dark:text-zinc-300">
              <MapPin size={16} className="text-zinc-400" />
              Kerala, India
            </div>
            <a href="mailto:aaronsooraj001@gmail.com" className="group flex items-center gap-2 text-sm font-medium hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              <Mail size={16} className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors" />
              aaronsooraj001@gmail.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-2">Connect</h3>
            <a href="https://github.com/ATS-001" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 w-fit text-sm font-medium hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              GitHub <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
            </a>
            <a href="https://www.linkedin.com/in/aaronts127pdz/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 w-fit text-sm font-medium hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              LinkedIn <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
            </a>
            <a href="https://x.com/ATSpdz" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 w-fit text-sm font-medium hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              X (Twitter) <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
            </a>
            <a href="https://www.youtube.com/@ats_pdz" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 w-fit text-sm font-medium hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">
              YouTube <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-4">
             <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 mb-2">Navigation</h3>
             <Link href="/" className="w-fit text-sm font-medium hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">About Me</Link>
             <Link href="/about-atspdz" className="w-fit text-sm font-medium hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">About ATS_PDZ</Link>
             <Link href="/projects" className="w-fit text-sm font-medium hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Projects</Link>
             <Link href="/contact" className="w-fit text-sm font-medium hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-zinc-200/80 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 relative z-10">
           {/* Legal Links */}
           <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
              <Link href="/accessibility" className="text-xs font-semibold hover:text-zinc-900 dark:hover:text-white transition-colors">Accessibility Statement</Link>
              <Link href="/privacy-policy" className="text-xs font-semibold hover:text-zinc-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="text-xs font-semibold hover:text-zinc-900 dark:hover:text-white transition-colors">Terms &amp; Conditions</Link>
              <Link href="/cookie-policy" className="text-xs font-semibold hover:text-zinc-900 dark:hover:text-white transition-colors">Cookie Policy</Link>
              <Link href="/disclaimer" className="text-xs font-semibold hover:text-zinc-900 dark:hover:text-white transition-colors">Disclaimer</Link>
           </div>
           
           {/* Copyright / Credits */}
           <div className="text-center md:text-right">
              <p className="text-xs font-medium dark:text-zinc-500 text-zinc-500 block">
                 <span className="font-bold text-zinc-900 dark:text-zinc-300 tracking-wide">Aaron Thalakkottor Sooraj</span>
                 <br className="hidden sm:block md:hidden"/>
                 <span className="hidden sm:inline md:hidden"> • </span>
                 <br className="md:block hidden"/>
                 Designed &amp; Developed by ATS-PDZ • &copy; Since 2023
              </p>
           </div>
        </div>
      </div>
    </footer>
  );
}
