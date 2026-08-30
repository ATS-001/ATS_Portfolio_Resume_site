import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Sparkles, Users, Linkedin, ArrowUpRight, Cpu, Globe, Layers, Building2, MapPin, Calendar, Clock, ShieldCheck } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import { TEAM_MEMBERS, ATS_PDZ_COMPANY_LINKEDIN, ATS_PDZ_DETAILS } from '@/data/team';

export const metadata: Metadata = {
  title: 'About ATS_PDZ & Executive Leadership Team',
  description: 'Official organization dossier and leadership profile for ATS_PDZ (founded Feb 2023, Thrissur, Kerala). Meet executive officers Aaron Thalakkottor Sooraj (CEO), Adithya Binesh (CVCO), Abhinav N (CTO), Alwin Thomas V (CXO), Adhin Seby (A-CXO UX), and Akshay T S (A-CXO UI).',
  keywords: [
    'ATS_PDZ',
    'ATS PDZ',
    'ATS_PDZ Leadership Team',
    'ATS_PDZ Kerala',
    'ATS_PDZ Thrissur',
    'Aaron Thalakkottor Sooraj',
    'Aaron T S',
    'Adithya Binesh',
    'Adithya Binesh ATS_PDZ',
    'Adithya Binesh CVCO',
    'Abhinav N',
    'Abhinav N ATS_PDZ',
    'Abhinav N CTO',
    'Alwin Thomas V',
    'Alwin Thomas ATS_PDZ',
    'Alwin Thomas CXO',
    'Adhin Seby',
    'Adhin Seby ATS_PDZ',
    'Adhin Seby UX',
    'Akshay T S',
    'Akshay TS',
    'Akshay T S ATS_PDZ',
    'Akshay T S UI',
    'HexnicAI',
    'CommunityWATS',
    'C-WATS',
    'ATS_PDZ Core',
    'Brooklyn-07',
    'Software Engineering Kerala',
    'Thrissur Tech Leadership'
  ],
  alternates: {
    canonical: 'https://aaronts127pdz.vercel.app/about-atspdz',
  },
  openGraph: {
    title: 'About ATS_PDZ & Executive Leadership Team | Aaron Thalakkottor Sooraj',
    description: 'Learn about ATS_PDZ (founded Feb 2023 in Thrissur, Kerala) and connect with the executive officers: Aaron Thalakkottor Sooraj, Adithya Binesh, Abhinav N, Alwin Thomas V, Adhin Seby, and Akshay T S.',
    url: 'https://aaronts127pdz.vercel.app/about-atspdz',
    siteName: 'ATS Developer Dossier',
    type: 'profile',
    images: [
      {
        url: '/favLogo.png',
        width: 1200,
        height: 630,
        alt: 'ATS_PDZ Executive Leadership Team — Thrissur, Kerala',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ATS_PDZ & Executive Leadership Team',
    description: 'Learn about ATS_PDZ (founded Feb 2023 in Thrissur, Kerala) and connect with the executive officers: Aaron Thalakkottor Sooraj, Adithya Binesh, Abhinav N, Alwin Thomas V, Adhin Seby, and Akshay T S.',
    images: ['/favLogo.png'],
  }
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About ATS_PDZ & Executive Leadership Team",
  "description": "Information about ATS_PDZ, its founding in February 2023 in Thrissur, Kerala, and its executive officers.",
  "url": "https://aaronts127pdz.vercel.app/about-atspdz",
  "mainEntity": {
    "@type": "ItemList",
    "name": "ATS_PDZ Executive Leadership Team",
    "itemListElement": TEAM_MEMBERS.map((member, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Person",
        "name": member.name,
        "jobTitle": member.roleFull,
        "roleName": member.roleShort,
        "description": member.description,
        "sameAs": member.linkedin,
        "worksFor": {
          "@type": "Organization",
          "name": "ATS_PDZ",
          "url": "https://aaronts127pdz.vercel.app"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Thrissur",
          "addressRegion": "Kerala",
          "addressCountry": "India"
        }
      }
    }))
  }
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <ParticleBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* Metadata Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-md text-xs font-medium text-zinc-800 dark:text-zinc-200">
              <Calendar className="w-3.5 h-3.5 text-blue-500" />
              <span>Founded February 2023</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-md text-xs font-medium text-zinc-800 dark:text-zinc-200">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Thrissur, Kerala, India</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-md text-xs font-medium text-zinc-800 dark:text-zinc-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Umbrella Organization</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-zinc-900 mb-6 tracking-tight">
            About <span className="text-zinc-900 dark:text-zinc-100">ATS_PDZ</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            Founded in <span className="font-semibold text-zinc-900 dark:text-zinc-100">February 2023</span> and based in <span className="font-semibold text-zinc-900 dark:text-zinc-100">Thrissur, Kerala</span>, ATS_PDZ is the parent creative-tech identity and umbrella organization created by <span className="font-semibold text-zinc-900 dark:text-zinc-100">Aaron Thalakkottor Sooraj</span>. It functions as a digital identity, creative technology initiative, experimental development lab, and media ecosystem.
          </p>

          {/* Hero Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={ATS_PDZ_COMPANY_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#0077b5] text-white hover:bg-[#006097] shadow-sm hover:shadow-md transition-all group focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Visit ATS_PDZ Company LinkedIn Page"
            >
              <Linkedin className="w-4 h-4 fill-current" />
              <span>ATS_PDZ on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            <a
              href="#team"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-zinc-100 dark:bg-zinc-800/80 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 transition-all focus:outline-none focus:ring-2 focus:ring-zinc-400"
            >
              <Users className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <span>Meet Leadership Team</span>
            </a>
          </div>
        </div>

        {/* Company Overview & Key Fast Facts */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
              <Calendar className="w-3.5 h-3.5 text-blue-500" /> Founded
            </div>
            <div className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
              February 2023
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
              <MapPin className="w-3.5 h-3.5 text-rose-500" /> Location
            </div>
            <div className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
              Thrissur, Kerala
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
              <Users className="w-3.5 h-3.5 text-purple-500" /> Team
            </div>
            <div className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
              6 Officers
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-1">
              <Layers className="w-3.5 h-3.5 text-emerald-500" /> Ecosystem
            </div>
            <div className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white">
              3 Divisions
            </div>
          </div>
        </div>

        {/* Company Overview & Ecosystem */}
        <div className="mb-20 bg-zinc-50/80 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-zinc-900 mb-2">The ATS_PDZ Ecosystem</h2>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Interconnected divisions dedicated to technical innovation, community collaboration, and digital creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 text-blue-500">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold dark:text-white text-zinc-900 mb-2">HexnicAI</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  AI research, integration, and development division focusing on next-generation intelligence tools and experimental systems.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 text-xs font-medium text-blue-600 dark:text-blue-400">
                AI & Systems Division
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-purple-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4 text-purple-500">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold dark:text-white text-zinc-900 mb-2">ATS_PDZ Core</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Central identity and creative laboratory for rapid prototyping, web applications, search systems, and digital design.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between">
                <span className="text-xs font-medium text-purple-600 dark:text-purple-400">Parent Umbrella</span>
                <a
                  href={ATS_PDZ_COMPANY_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-[#0077b5] dark:hover:text-[#0077b5] transition-colors"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-500">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold dark:text-white text-zinc-900 mb-2">CommunityWATS</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Community-driven tech space, open learning initiatives, education hubs, and collaborative builder network.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Community & Education
              </div>
            </div>
          </div>

          {/* Dedicated Company LinkedIn Card */}
          <div className="mt-8 p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/90 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/20 flex items-center justify-center text-[#0077b5] shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base font-bold dark:text-white text-zinc-900 flex items-center gap-2">
                  Official ATS_PDZ Company Page
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  Follow ATS_PDZ on LinkedIn for organization announcements, product releases, and technology updates.
                </p>
              </div>
            </div>

            <a
              href={ATS_PDZ_COMPANY_LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-[#0077b5] text-white hover:bg-[#006097] transition-all group focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <Linkedin className="w-4 h-4 fill-current" />
              <span>Follow on LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Leadership & Team Section */}
        <section id="team" className="mb-12">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 backdrop-blur-md mb-4">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">Executive Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold dark:text-white text-zinc-900 mb-3 tracking-tight">
              Meet the Team
            </h2>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              The multidisciplinary team shaping strategy, technology, creative vision, and user experience across ATS_PDZ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <article
                key={member.id}
                id={`team-member-${member.id}`}
                itemScope
                itemType="https://schema.org/Person"
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-zinc-50/70 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 backdrop-blur-xl transition-all duration-300 hover:shadow-lg dark:hover:shadow-none"
              >
                <meta itemProp="worksFor" content="ATS_PDZ" />
                <meta itemProp="affiliation" content="ATS_PDZ" />
                <meta itemProp="addressLocality" content="Thrissur, Kerala, India" />
                <div>
                  {/* Top Row: Initials Badge, Role Tag & Tenure Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 font-bold text-sm flex items-center justify-center shadow-sm">
                      {member.initials}
                    </div>
                    <div className="flex flex-wrap items-center justify-end gap-1.5">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${member.badgeColor}`}>
                        {member.roleShort}
                      </span>
                    </div>
                  </div>

                  {/* Name & Designation */}
                  <h3 itemProp="name" className="text-xl font-bold dark:text-white text-zinc-900 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors mb-1">
                    {member.name}
                  </h3>
                  <div itemProp="jobTitle" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
                    {member.designation}
                  </div>

                  {/* Tenure Line */}
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-4">
                    {member.isFounder ? (
                      <>
                        <Sparkles className="w-3 h-3 text-blue-500" />
                        <span>Created {member.tenureDate}</span>
                      </>
                    ) : (
                      <>
                        <Clock className="w-3 h-3 text-purple-500" />
                        <span>Joined {member.tenureDate}</span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p itemProp="description" className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {member.description}
                  </p>
                </div>

                {/* Bottom Row: LinkedIn Link */}
                <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/80 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">
                    LinkedIn Profile
                  </span>
                  <a
                    href={member.linkedin}
                    itemProp="sameAs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-200/70 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] dark:hover:text-white transition-all group/btn focus:outline-none focus:ring-2 focus:ring-blue-500"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                    title={`Connect with ${member.name} on LinkedIn`}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>Connect</span>
                    <ArrowUpRight className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

