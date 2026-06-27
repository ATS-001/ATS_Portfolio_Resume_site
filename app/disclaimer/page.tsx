"use client";

import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <main className="relative min-h-screen pt-28 pb-20 overflow-hidden font-sans">
      <ParticleBackground />
      
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-500/5 dark:bg-red-500/5 rounded-full blur-[120px] -z-10" />

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
            <AlertTriangle size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-zinc-900 mb-6 tracking-tight">
            <span className="text-zinc-400 dark:text-zinc-500">Disclaimer</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium mb-2">
            Important Information & Notices
          </p>
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
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">1. Informational Purposes</h2>
            <p className="mb-4">
               The information contained on this portfolio website is for general information and demonstration purposes only. While I endeavor to keep the structural and professional information accurate and correct, I make no representations or warranties of any kind about the completeness, accuracy, reliability, or availability with respect to the website contents.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">2. Third-Party Links</h2>
            <p className="mb-4">
               Through this portfolio you are able to link to other websites or resources (such as GitHub, CodePen, or organization pages) which are not under the control of ATS_PDZ. I have no control over the nature, content, and availability of those external sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">3. Credential Verification Links</h2>
            <p className="mb-4">
               Links provided for verifying certifications, diplomas, or credentials redirect to third-party issuing platforms (such as Credly, Microsoft, Coursera). Verification accuracy relies wholly on the issuing organization's database and continued hosting capabilities.
            </p>
          </section>

          <section className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-3xl p-8 shadow-inner">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">4. Project Showcase Disclaimer</h2>
            <p>
               Projects displayed represent a mix of personal projects, academic work, mockups, and professional collaborations. Code snippets, architectures, and strategies showcased reflect past approaches and may not represent current production-level implementations or best practices natively depending on aging.
            </p>
          </section>

        </motion.div>
      </div>
    </main>
  );
}
