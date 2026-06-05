"use client";

import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <main className="relative min-h-screen pt-28 pb-20 overflow-hidden font-sans">
      <ParticleBackground />
      
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-zinc-500/5 dark:bg-zinc-500/5 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors mb-12">
           <ArrowLeft size={16} /> Back to Home
        </Link>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold dark:text-white text-zinc-900 mb-6 tracking-tight">
            Accessibility <br/>
            <span className="text-zinc-400 dark:text-zinc-500">Statement</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
            I am committed to ensuring digital accessibility for people with disabilities. 
            I am continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          
          <section className="bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
             <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
               <CheckCircle className="text-blue-500" size={24} />
               Commitment to Accessibility
             </h2>
             <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Accessibility is not an afterthought in my design process; it is a foundational principle. 
                I believe that a truly premium editorial aesthetic is one that can be enjoyed by everyone, regardless of their hardware, software, language, location, or ability.
             </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl p-8 shadow-xl">
               <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Semantic HTML</h3>
               <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  This website is built entirely using semantic HTML5 elements. Proper heading hierarchy (H1-H6) is maintained, ensuring screen readers can accurately interpret the structure and context of the content.
               </p>
            </section>
            
            <section className="bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl p-8 shadow-xl">
               <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Keyboard Navigation</h3>
               <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Full keyboard navigation support is implemented. Focus states are clearly visible without compromising the minimal aesthetic, ensuring users who rely on keyboards can navigate seamlessly.
               </p>
            </section>

            <section className="bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl p-8 shadow-xl">
               <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Motion & Animation</h3>
               <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  The website respects the <code>prefers-reduced-motion</code> media query. When enabled, complex animations, particle backgrounds, and intense transitions are simplified or removed to support users with vestibular motion disorders.
               </p>
            </section>
            
            <section className="bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl p-8 shadow-xl">
               <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Visual Contrast</h3>
               <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                  Careful consideration has been given to the color palette to ensure sufficient contrast ratios for text and interactive elements, passing standard WCAG contrast guidelines in both light and dark modes.
               </p>
            </section>
          </div>

          <section className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 rounded-3xl p-8 md:p-12 shadow-inner">
             <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Screen Reader Compatibility</h2>
             <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Interactive elements utilize appropriate ARIA attributes. Form inputs have associated labels, and structural landmarks are defined. Iconography is paired with visually hidden text or <code>aria-label</code> tags where appropriate to provide context.
             </p>
          </section>
          
          <section className="bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl">
             <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Ongoing Improvements</h2>
             <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                Building an accessible experience is an ongoing process. I regularly audit the site using tools like Lighthouse and axe-core. Despite my best efforts, there may be instances where certain aspects can be improved.
             </p>
             <h3 className="text-lg font-bold text-zinc-900 dark:text-white mt-8 mb-4">Contact for Accessibility Concerns</h3>
             <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                If you encounter any accessibility barriers on this website, please reach out so I can address them. 
                I value your feedback and am dedicated to swift resolution of any accessibility issues.
             </p>
             <a href="mailto:aaronsooraj001@gmail.com" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
               Contact at aaronsooraj001@gmail.com
             </a>
          </section>

        </motion.div>
      </div>
    </main>
  );
}
