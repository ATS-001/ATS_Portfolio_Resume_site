import React from 'react';
import { Metadata } from 'next';
import ParticleBackground from '@/components/ParticleBackground';

export const metadata: Metadata = {
  title: 'About ATS_PDZ',
  description: 'Learn about ATS_PDZ, the creative-tech identity and umbrella organization created by Aaron Thalakkottor Sooraj.',
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-16">
      <ParticleBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-zinc-900 mb-6 tracking-tight">
            About <span className="text-zinc-900 dark:text-zinc-100">ATS_PDZ</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            The parent creative-tech identity and umbrella organization created by Aaron Thalakkottor Sooraj. It acts as a digital identity, creative technology initiative, experimental development space, and media ecosystem.
          </p>
        </div>

        {/* Ecosystem Visualization */}
        <div className="mb-24 bg-zinc-50 dark:bg-white/[0.02] border border-zinc-200 dark:border-white/5 rounded-3xl p-8 lg:p-12 hover:shadow-lg transition-all text-center">
           <h2 className="text-2xl font-bold dark:text-white text-zinc-900 mb-8">The ATS_PDZ Ecosystem</h2>
           <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
             <div className="w-full max-w-xs p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
               <h3 className="text-xl font-bold dark:text-white text-zinc-900 mb-2">HexnicAI</h3>
               <p className="text-zinc-600 dark:text-zinc-400 text-sm">AI research, integration, and development division focusing on next-gen tools.</p>
             </div>
             <div className="hidden md:flex flex-col items-center justify-center text-zinc-300 dark:text-zinc-600 font-mono text-xs">
                &lt;-- Brother Orgs --&gt;
             </div>
             <div className="w-full max-w-xs p-6 rounded-2xl bg-zinc-50/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
               <h3 className="text-xl font-bold dark:text-white text-zinc-900 mb-2">CommunityWATS</h3>
               <p className="text-zinc-600 dark:text-zinc-400 text-sm">Community-driven tech, education, and collaborative ecosystem space.</p>
             </div>
           </div>
        </div>
      </div>
    </main>
  );
}
