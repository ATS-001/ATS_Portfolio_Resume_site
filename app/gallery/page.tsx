import React from 'react';
import type { Metadata } from 'next';
import ParticleBackground from '@/components/ParticleBackground';
import { Palette, Sparkles, ExternalLink, Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery & Artwork',
  description: 'A collection of drawings, sketches, and creative artwork by Aaron Thalakkottor Sooraj.',
};

type ArtworkItem = {
  id: string;
  title: string;
  year: string;
  medium: string;
  imageUrl?: string;
};

// Sample artwork array structure for future additions
const artworkItems: ArtworkItem[] = [
  // Add entries here:
  // {
  //   id: '1',
  //   title: 'Sketch 1',
  //   year: '2026',
  //   medium: 'Digital',
  //   imageUrl: '/gallery/sample.jpg',
  // },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 relative">
      <ParticleBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="mb-16 md:mb-24 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">Creative Artwork</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-zinc-900 mb-6 tracking-tight flex items-center justify-center gap-4">
            <Palette className="w-10 h-10 md:w-12 md:h-12 text-pink-500" />
            Gallery
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            A showcase of my drawings, sketches, and creative visual projects.
          </p>
        </header>

        {artworkItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {artworkItems.map((art) => (
              <div key={art.id} className="group relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800/50 border border-border shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/5] relative w-full overflow-hidden bg-zinc-200 dark:bg-zinc-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ImageIcon className="w-10 h-10 text-zinc-400 opacity-50" />
                  </div>
                  {art.imageUrl && (
                    <Image 
                      src={art.imageUrl} 
                      alt={art.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 w-full p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-1">{art.title}</h3>
                  <div className="flex items-center gap-2 text-zinc-300 text-sm">
                    <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-md">{art.year}</span>
                    <span className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-md">{art.medium}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center py-20">
            <div className="p-8 rounded-3xl border border-border bg-card backdrop-blur-md shadow-xl max-w-md text-center">
              <Palette className="w-12 h-12 text-zinc-400 mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold mb-2">Gallery Coming Soon</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                I am currently curating my artwork collection. The gallery grid is ready for future additions.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
