import React from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Education from '@/components/sections/Education';
import Languages from '@/components/sections/Languages';
import Interests from '@/components/sections/Interests';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col pt-20 pb-20">
        <Hero />
        
        <About />

        {/* Featured Skills (Preview) */}
        <div className="mt-12">
          <Skills />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="border-t border-zinc-200 dark:border-white/10 my-12" />
          <Education />
          <div className="border-t border-zinc-200 dark:border-white/10 my-12" />
          <Languages />
          <div className="border-t border-zinc-200 dark:border-white/10 my-12" />
          <Interests />
        </div>
        
        {/* Featured Projects Preview area */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold dark:text-white text-zinc-900 mb-4 tracking-tight">
              Featured <span className="text-zinc-500 dark:text-zinc-400">Projects</span>
            </h2>
            <div className="w-12 h-1 bg-zinc-300 dark:bg-zinc-700 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card Placeholder 1 */}
            <div className="bg-card border border-border rounded-3xl p-6 hover:shadow-lg transition-all shadow-sm text-foreground">
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-4 overflow-hidden relative group">
                <div className="absolute inset-0 bg-zinc-200/50 dark:bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-semibold dark:text-white text-zinc-900 mb-2 tracking-tight">Search&amp;Call</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-5 font-medium leading-relaxed">Built a functional business listing platform using Google Sites with category navigation, tag search, and SEO optimization.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full dark:text-zinc-300 text-zinc-600 border border-zinc-200 dark:border-zinc-800">Google Sites</span>
                <span className="text-xs font-semibold px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full dark:text-zinc-300 text-zinc-600 border border-zinc-200 dark:border-zinc-800">JavaScript</span>
              </div>
            </div>
            
            {/* Project Card Placeholder 2 */}
            <div className="bg-card border border-border rounded-3xl p-6 hover:shadow-lg transition-all shadow-sm text-foreground">
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-4 overflow-hidden relative group">
                <div className="absolute inset-0 bg-zinc-200/50 dark:bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-semibold dark:text-white text-zinc-900 mb-2 tracking-tight">Vaazhas</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-5 font-medium leading-relaxed">Built an interactive digital souvenir for the 12th grade batch using Google Sites.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full dark:text-zinc-300 text-zinc-600 border border-zinc-200 dark:border-zinc-800">Google Sites</span>
                <span className="text-xs font-semibold px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full dark:text-zinc-300 text-zinc-600 border border-zinc-200 dark:border-zinc-800">Media Tools</span>
              </div>
            </div>
            
            {/* Project Card Placeholder 3 */}
            <div className="bg-card border border-border rounded-3xl p-6 hover:shadow-lg transition-all shadow-sm text-foreground">
              <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-4 overflow-hidden relative group">
                <div className="absolute inset-0 bg-zinc-200/50 dark:bg-zinc-800/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-semibold dark:text-white text-zinc-900 mb-2 tracking-tight">StudyAI</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-5 font-medium leading-relaxed">AI-generated personalized study timetable platform based on subjects and available study hours.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-semibold px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full dark:text-zinc-300 text-zinc-600 border border-zinc-200 dark:border-zinc-800">UI/UX</span>
                <span className="text-xs font-semibold px-3 py-1 bg-zinc-100 dark:bg-zinc-900 rounded-full dark:text-zinc-300 text-zinc-600 border border-zinc-200 dark:border-zinc-800">Prompt Engineering</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
             <a href="/projects" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
               View All Projects
             </a>
          </div>
        </section>
      </div>
    </main>
  );
}
