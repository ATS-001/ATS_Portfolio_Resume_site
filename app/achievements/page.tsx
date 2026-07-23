import React from "react";
import type { Metadata } from "next";
import CertificateDeck from "@/components/CertificateDeck";
import { certificatesData } from "@/data/certificates";
import { Award, Sparkles, Linkedin, ExternalLink } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

export const metadata: Metadata = {
  title: "Achievements & Certifications | Aaron Sooraj",
  description:
    "Explore certifications, hackathons, innovation programs, courses, and technical achievements earned by Aaron Sooraj.",
  openGraph: {
    title: 'Achievements & Certifications | Aaron Sooraj',
    description: 'Explore certifications, hackathons, innovation programs, courses, and technical achievements earned by Aaron Sooraj.',
    url: 'https://aaronts127pdz.vercel.app/achievements',
    siteName: 'Aaron Thalakkottor Sooraj | Developer Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Achievements & Certifications | Aaron Sooraj',
    description: 'Explore certifications, hackathons, innovation programs, courses, and technical achievements earned by Aaron Sooraj.',
  }
};

export default function AchievementsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 relative">
      <ParticleBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="mb-12 md:mb-16 text-center max-w-3xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
              Track Record
            </span>
          </div>
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/30 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-6 shadow-sm">
            <Award className="w-4 h-4 text-blue-500" />
            <span>Total Achievements & Certifications: <strong className="text-zinc-900 dark:text-white font-bold">{certificatesData.length}</strong></span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-zinc-900 mb-6 tracking-tight flex items-center justify-center gap-4">
            <Award className="w-10 h-10 md:w-12 md:h-12 text-blue-500" />
            Achievements
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400">
            A collectible deck of my certifications, job simulations, and
            hackathon accomplishments. Explore the credentials that validate my
            continuous learning journey.
          </p>
        </header>

        <section className="mb-12">
          <CertificateDeck />
        </section>

        {/* Premium LinkedIn CTA Section */}
        <section className="max-w-4xl mx-auto mb-20 px-4">
          <div className="p-8 md:p-12 rounded-3xl bg-card border border-border backdrop-blur-xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-500 pointer-events-none" />
            <div className="flex-1 text-center md:text-left z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Explore My Complete Certification Collection</h2>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">
                View all certifications, credentials, and learning achievements on LinkedIn.
              </p>
            </div>
            <div className="z-10 flex-shrink-0">
              <a 
                href="https://www.linkedin.com/in/aaronts127pdz/details/certifications/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-[#0a66c2] hover:bg-[#084e96] text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20 active:scale-95 group-hover:shadow-blue-500/30"
              >
                <Linkedin className="w-5 h-5 fill-current" />
                View All Certifications
                <ExternalLink className="w-4 h-4 opacity-70" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
