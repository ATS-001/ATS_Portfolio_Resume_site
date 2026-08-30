"use client";

import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, Cookie } from 'lucide-react';

export default function CookiePolicyPage() {
  return (
    <main className="relative min-h-screen pt-28 pb-20 overflow-hidden font-sans">
      <ParticleBackground />
      
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-zinc-500/5 dark:bg-zinc-500/5 rounded-full blur-[120px] -z-10" />

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
            <Cookie size={28} />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-zinc-900 mb-6 tracking-tight">
            Cookie <span className="text-zinc-400 dark:text-zinc-500">Policy</span>
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
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">1. What Are Cookies</h2>
            <p className="mb-4">
               Cookies are small text files that are placed on your computer or mobile device when you browse websites. 
               They are widely used to make websites work more efficiently and provide information to the owners of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">2. How I Use Cookies</h2>
            <div className="space-y-6">
               <div>
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-2">Preference Cookies</h3>
                  <p>
                     This website uses cookies or local storage to remember your preferences. Specifically, I store your preference for &quot;Light&quot; or &quot;Dark&quot; theme so that your experience is consistent across visits.
                  </p>
               </div>
               <div>
                  <h3 className="text-lg font-bold text-zinc-800 dark:text-zinc-200 mb-2">Analytics Cookies</h3>
                  <p>
                     I may use third-party tools like Google Analytics or Vercel Analytics that utilize cookies to collect aggregated data about how visitors use the website. This helps me improve the website&apos;s performance and structure. This data does not personally identify you.
                  </p>
               </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">3. User Controls</h2>
            <p className="mb-4">
               You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites. Note that disabling certain storage mechanisms might affect your ability to save preferences like the dark mode theme.
            </p>
          </section>

          <section className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-3xl p-8 shadow-inner">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">4. Updates to This Policy</h2>
            <p>
               I may update this Cookie Policy from time to time in order to reflect changes to the cookies I use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed.
            </p>
          </section>

        </motion.div>
      </div>
    </main>
  );
}
