"use client";

import React, { useRef } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import { motion } from 'motion/react';
import { Download, FileText, Globe, Mail, MapPin } from 'lucide-react';

import { PROJECTS } from '@/data/projects';
import { certificatesData } from '@/data/certificates';
import { SKILL_CATEGORIES } from '@/components/sections/Skills';
import { EDUCATION_DATA } from '@/components/sections/Education';
import { LANGUAGES } from '@/components/sections/Languages';
import { ABOUT_TEXTS, ROLES } from '@/components/sections/About';

export default function ResumePage() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    if (typeof window !== "undefined") {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = resumeRef.current;
      if (!element) return;
      const opt = {
        margin: 10,
        filename: 'ATS_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      } as any;
      html2pdf().set(opt).from(element).save();
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-16 relative">
      <ParticleBackground />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-zinc-900 mb-4 tracking-tight flex items-center gap-3">
                <FileText className="w-10 h-10 text-blue-500" />
                Dynamic Resume
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                Automatically generated from the website&apos;s live database.
              </p>
            </div>
            
            <button
              onClick={handleDownloadPdf}
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-full font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-md shrink-0"
            >
              <Download className="w-5 h-5" />
              Download PDF Resume
            </button>
          </motion.div>
        </header>

        {/* This div is the exact output rendered into the PDF */}
        <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl overflow-hidden p-8 sm:p-12 mb-12">
          
          <div ref={resumeRef} className="bg-white text-black p-4 resume-container">
            <style dangerouslySetInnerHTML={{__html: `
              .resume-container {
                font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                background-color: #ffffff;
                color: #000000;
              }
            `}} />

            {/* HEADER */}
            <div className="border-b border-[#ccc] pb-6 mb-6">
              <h1 className="text-3xl font-bold mb-2 text-[#000]">Aaron Thalakkottor Sooraj (ATS_PDZ)</h1>
              <p className="text-[#555] text-sm mb-4">Computer Science Engineering Student & Developer</p>
              
              <div className="flex flex-wrap gap-4 text-sm font-medium text-[#444]">
                <div className="flex items-center gap-1.5"><Mail className="w-4 h-4"/> aaronsooraj001@gmail.com</div>
                <div className="flex items-center gap-1.5"><Globe className="w-4 h-4"/> ats-pdz.vercel.app</div>
                <div className="flex items-center gap-1.5"><MapPin className="w-4 h-4"/> Kerala, India</div>
                <div className="flex items-center gap-1.5"><Globe className="w-4 h-4"/> github.com/ATS-001</div>
              </div>
            </div>

            {/* PROFILE */}
            <section className="mb-8">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-[#333] underline decoration-[#ccc] underline-offset-4">Profile</h2>
              {ABOUT_TEXTS.map((text, idx) => (
                <p key={idx} className="mb-2 text-sm leading-relaxed text-[#333]">{text}</p>
              ))}
              <div className="mt-3 text-sm">
                <span className="font-semibold text-[#333]">Roles:</span> <span className="text-[#333]">{ROLES.map(r => r.title).join(' • ')}</span>
              </div>
            </section>

            {/* EDUCATION */}
            <section className="mb-8">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-[#333] underline decoration-[#ccc] underline-offset-4">Education</h2>
              <div className="space-y-4">
                {EDUCATION_DATA.map((ed, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-[#111]">{ed.course || ed.level}</h3>
                      <span className="text-sm font-medium text-[#555]">{ed.period || ed.year}</span>
                    </div>
                    <p className="text-sm text-[#333] font-medium">{ed.institution}</p>
                    <div className="flex gap-2 mt-1 text-xs text-[#555]">
                      {ed.boardServer && <span>Board/University: {ed.boardServer}</span>}
                      {ed.board && <span>Board: {ed.board}</span>}
                      {ed.result && <span className="font-semibold px-2 py-0.5 bg-[#f4f4f4] rounded text-[#333]">Score/Result: {ed.result}</span>}
                    </div>
                    {ed.details && <p className="text-sm mt-2 text-[#444]">{ed.details}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* SKILLS */}
            <section className="mb-8">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-[#333] underline decoration-[#ccc] underline-offset-4">Skills & Arsenal</h2>
              <div className="grid grid-cols-2 gap-4">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="text-sm">
                    <span className="font-bold text-[#111] block mb-1">{cat.title}:</span>
                    <p className="text-[#444]">{cat.skills.join(', ')}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS */}
            <section className="mb-8">
              <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-[#333] underline decoration-[#ccc] underline-offset-4">Key Projects & Ecosystems</h2>
              <div className="space-y-5">
                {PROJECTS.filter(p => !p.status.includes('Archived')).map((project) => (
                  <div key={project.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="font-bold text-[#111]">{project.title} {project.type ? `(${project.type})` : ''}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 bg-[#f4f4f4] rounded border border-[#eaeaea] text-[#333]">{project.status}</span>
                    </div>
                    {project.organization && (
                      <p className="text-xs font-semibold text-[#555] mb-1">{project.organization}</p>
                    )}
                    <p className="text-sm text-[#333] mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-1 text-xs text-[#111]">
                      <span className="font-semibold text-[#111]">Tech Stack:</span>
                      {project.techStack.join(', ')}
                    </div>
                    {project.live && (
                      <p className="text-xs text-[#2563eb]"><span className="font-semibold text-[#333]">Live:</span> {project.live}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* ACHIEVEMENTS & CERTIFICATES */}
            <section className="mb-8 p-1">
              {/* Ensure it splits properly or is contained */}
              <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-[#333] underline decoration-[#ccc] underline-offset-4">Certifications & Achievements</h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {certificatesData.map((cert) => (
                  <div key={cert.id} className="text-sm border-l-2 border-[#eaeaea] pl-3">
                    <h3 className="font-bold text-[#111] leading-tight mb-0.5">{cert.title}</h3>
                    <p className="text-xs text-[#444]">{cert.organization} — <span className="font-medium text-[#555]">{cert.issueDate}</span></p>
                    {cert.credentialId && <p className="text-xs text-[#555] font-mono mt-0.5">ID: {cert.credentialId}</p>}
                  </div>
                ))}
              </div>
            </section>

            {/* LANGUAGES */}
            <section>
              <h2 className="text-xl font-bold uppercase tracking-wider mb-3 text-[#333] underline decoration-[#ccc] underline-offset-4">Languages</h2>
              <div className="flex flex-wrap text-sm gap-x-6 gap-y-2">
                {LANGUAGES.map((lang, idx) => (
                  <div key={idx}>
                    <span className="font-bold text-[#111]">{lang.name}</span>
                    <span className="text-[#555] ml-1">({lang.level})</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

      </div>
    </main>
  );
}
