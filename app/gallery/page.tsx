'use client';

import React, { useState } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import { Palette, Sparkles, Camera, PenTool, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type TabType = 'picture-gallery' | 'drawings';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<TabType>('picture-gallery');

  return (
    <main className="min-h-screen pt-28 pb-20 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <header className="mb-12 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Visual Dossier</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-zinc-900 mb-6 tracking-tight flex items-center justify-center gap-4">
            <Palette className="w-10 h-10 md:w-12 md:h-12 text-pink-500" />
            Gallery & Artwork
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            A curated space celebrating photography, digital artwork, sketches, and visual media creations.
          </p>
        </header>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl shadow-md">
            <button
              onClick={() => setActiveTab('picture-gallery')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 relative ${
                activeTab === 'picture-gallery'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-md'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <Camera className="w-4 h-4 text-blue-500" />
              <span>Picture Gallery</span>
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                Coming Soon
              </span>
            </button>

            <button
              onClick={() => setActiveTab('drawings')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 relative ${
                activeTab === 'drawings'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-md'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <PenTool className="w-4 h-4 text-pink-500" />
              <span>Drawings</span>
              <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                Coming Soon
              </span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'picture-gallery' && (
              <motion.div
                key="picture-gallery"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12 rounded-3xl border border-border bg-card backdrop-blur-xl shadow-2xl text-center relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                  <Camera className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                  Picture Gallery
                </h3>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-4 border border-amber-500/20">
                  <Clock className="w-3.5 h-3.5" /> Coming Soon
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md mx-auto text-sm md:text-base">
                  A high-resolution photograph collection captured from events, travel, and creative visual projects is currently being curated for publication.
                </p>
              </motion.div>
            )}

            {activeTab === 'drawings' && (
              <motion.div
                key="drawings"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12 rounded-3xl border border-border bg-card backdrop-blur-xl shadow-2xl text-center relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-pink-500/10 dark:bg-pink-500/20 text-pink-500 flex items-center justify-center mx-auto mb-6 border border-pink-500/20">
                  <PenTool className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                  Drawings & Sketches
                </h3>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold mb-4 border border-amber-500/20">
                  <Clock className="w-3.5 h-3.5" /> Coming Soon
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md mx-auto text-sm md:text-base">
                  An upcoming digital art gallery featuring handmade sketches, digital illustrations, and creative concept designs.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
