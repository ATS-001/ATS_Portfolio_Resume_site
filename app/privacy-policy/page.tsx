"use client";

import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen pt-28 pb-20 overflow-hidden font-sans">
      <ParticleBackground />
      
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-12">
           <ArrowLeft size={16} /> Back to Home
        </Link>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white mb-6">
            <Shield size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-zinc-900 mb-6 tracking-tight">
            Privacy <span className="text-zinc-400 dark:text-zinc-500">Policy</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
            Effective Date: June 14, 2026<br />
            Last Updated: June 14, 2026
          </p>
        </motion.div>

        <motion.div 
          className="space-y-12 text-zinc-600 dark:text-zinc-400 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          
          <section className="bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">1. Introduction</h2>
            <p className="mb-4">
               Welcome to ATS-PDZ by Aaron Thalakkottor Sooraj. This Privacy Policy outlines how your information is collected, 
               used, and protected when you visit this personal dossier website. 
            </p>
            <p>
               My primary goal is to showcase my digital projects, creative media, and web development skills. 
               I respect your privacy and am committed to maintaining a secure and transparent digital environment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">2. Information Collection</h2>
            <div className="space-y-6">
               <div>
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-2">A. Information You Provide</h3>
                  <p>
                     When you use the contact form or feedback forms on this website, you voluntarily provide personal information such as your name, email address, and your message content. This information is strictly used to reply to your inquiry.
                  </p>
               </div>
               <div>
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-2">B. Automated Data & Analytics</h3>
                  <p>
                     This website uses analytics tools, including Google Analytics and Vercel Analytics, to understand website performance, visitor geography, and engagement. This data is aggregated and does not identify you personally. It may include your browser type, device type, referring URLs, and interaction with the site. The site is hosted on Vercel, which also collects basic server logs.
                  </p>
               </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">3. External Links & Third-Party Platforms</h2>
            <p className="mb-4">
               This dossier actively links to external services and projects, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 marker:text-zinc-400">
               <li>GitHub repositories</li>
               <li>Vercel deployments</li>
               <li>Live project demonstrations (Google Sites, etc.)</li>
               <li>Social media profiles (LinkedIn, X, YouTube)</li>
            </ul>
            <p>
               Once you click an external link and leave this website, you are no longer governed by this Privacy Policy. 
               I encourage you to read the privacy statements of every designated third-party platform.
            </p>
          </section>

          <section className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-3xl p-8 shadow-inner">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">4. Selling & Sharing of Data</h2>
            <p>
               <strong>Your personal information is never sold.</strong> Any data collected via forms is kept confidential 
               and is not shared with third-party advertisers or brokers. It remains purely for direct communication regarding projects or opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">5. Cookies</h2>
            <p>
               This website uses minimal cookies primarily for functional purposes (like preserving your theme preference between Light and Dark mode). 
               No aggressive tracking cookies are deployed by this core dossier application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">6. Contact Info</h2>
            <p>
               If you have any questions or concerns regarding this Privacy Policy, or if you wish to request deletion of any information you have submitted, please email me at:
               <br/><br/>
               <a href="mailto:aaronsooraj001@gmail.com" className="font-semibold text-zinc-900 dark:text-white hover:underline">
                 aaronsooraj001@gmail.com
               </a>
            </p>
          </section>

        </motion.div>
      </div>
    </main>
  );
}
