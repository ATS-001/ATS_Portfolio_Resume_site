"use client";

import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="relative min-h-screen pt-28 pb-20 overflow-hidden font-sans">
      <ParticleBackground />
      
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-zinc-500/5 dark:bg-zinc-500/5 rounded-full blur-[150px] -z-10" />

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
            <FileText size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-zinc-900 mb-6 tracking-tight">
            Terms & <span className="text-zinc-400 dark:text-zinc-500">Conditions</span>
          </h1>
        </motion.div>

        <motion.div 
          className="space-y-12 text-zinc-600 dark:text-zinc-400 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          
          <section className="bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p>
               By accessing and viewing this personal portfolio website (ATS-PDZ), you accept and agree to be bound by the terms and provisions of this agreement. 
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">2. Intellectual Property & Usage</h2>
            <p className="mb-4">
               All original content, designs, texts, and source code associated with this specific portfolio website are the intellectual property of Aaron Thalakkottor Sooraj unless otherwise noted.
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-zinc-400">
               <li>You may not reproduce, distribute, or create derivative works from the original portfolio design without explicit permission.</li>
               <li>Open-source projects linked in the portfolio follow their respective repository licenses (e.g., MIT, Apache).</li>
               <li>Unauthorized cloning or reposting of this website&apos;s content for commercial gain is strictly prohibited.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">3. Project Showcase Rights</h2>
            <p>
               The projects displayed in the &apos;Projects&apos; directory represent my personal work, collaborative efforts, or organizational contributions (e.g., HexnicAI, CommunityWATS). 
               Trademarks, logos, and names of third-party organizations shown in relation to projects belong to their respective owners and are used purely for demonstrative and portfolio purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">4. External Links Disclaimer</h2>
            <p>
               This website contains links to external websites and project domains. I do not guarantee the permanent availability, accuracy, or safety of any external site. 
               These links are provided for convenience and demonstrative purposes. Usage of linked external services is governed by their own policies.
            </p>
          </section>

          <section className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-3xl p-8 shadow-inner">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">5. Content Accuracy</h2>
            <p>
               While I strive to keep the information on this website accurate and up-to-date (including skills, status of projects, and achievements), 
               I provide no warranties regarding the absolute completeness or reliability of the information. The content is subject to change at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">6. Contact Information</h2>
            <p>
               For inquiries regarding these Terms & Conditions, project usage rights, or general questions, please contact me via my email at:
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
