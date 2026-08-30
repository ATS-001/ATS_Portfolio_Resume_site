"use client";

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import ParticleBackground from '@/components/ParticleBackground';
import { Github, ExternalLink, Search, X, Users, Code, LayoutGrid, Tag, Info, Figma, Target, CheckCircle2, FileText, Sparkles, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import { PROJECTS, Project, ProjectStatus } from '@/data/projects';

// Extract unique categories
const ALL_CATEGORIES = Array.from(new Set(PROJECTS.flatMap(p => p.categories))).sort();

const getStatusStyles = (status: ProjectStatus) => {
  switch (status) {
    case 'Completed': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
    case 'Completed & CI/CD': return 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20';
    case 'Ongoing': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
    case 'Under Development': 
    case 'Active Development': return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20';
    case 'Continuous Integration / Continuous Deployment (CI/CD)': return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
    case 'Completed (Archived)': return 'bg-zinc-500/10 text-zinc-600 dark:text-zinc-400 border-zinc-500/20';
  }
};

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
        
      const matchesCategory = selectedCategory ? project.categories.includes(selectedCategory) : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="relative min-h-screen pt-28 pb-20 overflow-hidden font-sans">
      <ParticleBackground />
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-zinc-500/10 dark:bg-zinc-500/5 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white text-zinc-900 tracking-tight">
              Project <span className="text-zinc-900 dark:text-zinc-100">Showcase</span>
            </h1>
            <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
              A curated collection of digital products, AI integrations, organizational ecosystems, and creative media platforms.
            </p>
          </motion.div>
        </div>

        {/* Filters & Search - Centralized Layout */}
        <motion.div 
          className="flex flex-col items-center justify-center gap-6 mb-12 max-w-4xl mx-auto w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Centralized Search Bar */}
          <div className="relative w-full max-w-xl group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-500 transition-colors">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search projects, tech stacks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-12 pr-4 py-3.5 border border-zinc-200 dark:border-white/10 rounded-2xl leading-5 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-sm md:text-base transition-all shadow-md"
            />
          </div>

          {/* Real-time Websites & Projects Counter */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/80 dark:border-zinc-700/60 text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Live Count: <strong className="text-blue-600 dark:text-blue-400 font-bold">{filteredProjects.length}</strong> of <strong className="text-zinc-900 dark:text-white font-bold">{PROJECTS.length}</strong> Websites & Projects</span>
          </div>

          {/* Sorting Categories - Positioned Centered Below Search */}
          <div className="flex flex-wrap items-center justify-center gap-2 w-full pt-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                selectedCategory === null 
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md' 
                  : 'bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              All ({PROJECTS.length})
            </button>
            {ALL_CATEGORIES.map((category) => {
              const count = PROJECTS.filter(p => p.categories.includes(category)).length;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                    selectedCategory === category 
                      ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30 font-semibold' 
                      : 'bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-card backdrop-blur-md rounded-3xl border border-border text-foreground overflow-hidden hover:shadow-2xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Glow behind card on hover */}
                <div className="absolute inset-0 bg-zinc-900/0 hover:bg-zinc-900/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-500" />

                {/* Optional Project Image / CAD Preview */}
                {project.image && (
                  <div className="relative w-full h-44 bg-zinc-950 flex items-center justify-center border-b border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-zinc-900/80 text-white text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md border border-white/10">
                      3D Model
                    </div>
                  </div>
                )}
                
                <div className="p-6 md:p-8 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold dark:text-white text-zinc-900 tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      {project.type && (
                        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mt-1 uppercase tracking-wider">{project.type}</p>
                      )}
                    </div>
                  </div>

                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/50">
                         {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-50 dark:bg-zinc-800/50 text-zinc-500 border border-zinc-100 dark:border-zinc-800/50">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="pt-6 border-t border-zinc-200 dark:border-white/5 flex items-center justify-between mt-auto">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusStyles(project.status)}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 opacity-70"></span>
                      {project.status}
                    </span>
                    <button className="p-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors bg-zinc-50 dark:bg-zinc-800 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <LayoutGrid className="mx-auto h-12 w-12 text-zinc-300 dark:text-zinc-700 mb-4" />
            <h3 className="text-lg font-medium text-zinc-900 dark:text-white">No projects found</h3>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">Try adjusting your category or search filters.</p>
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 md:bottom-auto md:top-1/2 md:left-1/2 md:right-auto md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[768px] md:max-w-[90vw] bg-card text-foreground rounded-t-3xl md:rounded-3xl shadow-2xl z-50 overflow-hidden border border-border max-h-[85vh] flex flex-col pointer-events-auto"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-8 flex items-start justify-between border-b border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-800/20">
                <div>
                   <div className="flex items-center gap-3 mb-2">
                     <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusStyles(selectedProject.status)}`}>
                        {selectedProject.status}
                     </span>
                     {selectedProject.type && (
                       <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">{selectedProject.type}</span>
                     )}
                   </div>
                   <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">{selectedProject.title}</h2>
                   {selectedProject.organization && (
                     <div className="flex items-center gap-2 mt-3 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 w-fit px-3 py-1 rounded-full border border-blue-100 dark:border-blue-500/20">
                       <Tag size={14} />
                       {selectedProject.organization}
                     </div>
                   )}
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-white dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white rounded-full border border-zinc-200 dark:border-white/10 hover:shadow-md transition-all shrink-0"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="space-y-8">
                  
                  {/* Image / 3D Model Attachment if available */}
                  {selectedProject.image && (
                    <div className="relative w-full rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-4">
                      <div className="relative w-full max-w-md h-64 sm:h-72">
                        <Image
                          src={selectedProject.image}
                          alt={selectedProject.title}
                          fill
                          className="object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  )}

                  {/* Problem Statement & Context if available */}
                  {selectedProject.problemStatement && (
                    <div className="p-5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100 dark:border-blue-900/30">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-1.5">
                        <Target size={14} /> Problem Statement & Theme
                      </h4>
                      <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                        {selectedProject.problemStatement}
                      </p>
                      {selectedProject.targetUsers && (
                        <div className="mt-3 pt-3 border-t border-blue-200/50 dark:border-blue-900/40 text-xs text-zinc-600 dark:text-zinc-400">
                          <strong className="text-zinc-900 dark:text-zinc-200">Target Users:</strong> {selectedProject.targetUsers}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Description */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
                      <Info size={16} /> About Project
                    </h4>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Specifications Table/Grid if available */}
                  {selectedProject.specifications && selectedProject.specifications.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
                        <FileText size={16} /> Design Specifications
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {selectedProject.specifications.map((spec, i) => (
                          <div key={i} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800">
                            <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 mb-1">{spec.label}</div>
                            <div className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">{spec.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Features & Advantages if available */}
                  {(selectedProject.features || selectedProject.advantages) && (
                    <div className="grid sm:grid-cols-2 gap-6">
                      {selectedProject.features && (
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
                            <Sparkles size={16} /> Key Features
                          </h4>
                          <ul className="space-y-2">
                            {selectedProject.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                                <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {selectedProject.advantages && (
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
                            <Layers size={16} /> Advantages
                          </h4>
                          <ul className="space-y-2">
                            {selectedProject.advantages.map((adv, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                                <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                                <span>{adv}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
                        <Code size={16} /> Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map(tech => (
                          <span key={tech} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200/80 dark:border-zinc-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Categories */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3">
                         Categories
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.categories.map(cat => (
                          <span key={cat} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/30">
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contributors */}
                  {selectedProject.contributors && selectedProject.contributors.length > 0 && (
                    <div className="pt-6 border-t border-zinc-200 dark:border-white/5">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
                        <Users size={16} /> Contributors
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.contributors.map(contributor => (
                           contributor.startsWith('http') ? (
                             <a key={contributor} href={contributor} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                               View Contributors <ExternalLink size={12} />
                             </a>
                           ) : (
                             <span key={contributor} className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-medium bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300">
                               {contributor}
                             </span>
                           )
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="pt-6 border-t border-zinc-200 dark:border-white/5 flex flex-wrap gap-4">
                    {selectedProject.live && (
                       <a 
                         href={selectedProject.live} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-lg shadow-zinc-900/20 dark:shadow-white/20 active:scale-95"
                       >
                         <ExternalLink size={18} /> {selectedProject.live.includes('youtube.com') || selectedProject.live.includes('youtu.be') ? 'Watch YouTube Demo' : 'View Live Project'}
                       </a>
                    )}
                    {selectedProject.github && (
                       <a 
                         href={selectedProject.github} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl font-semibold border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all active:scale-95"
                       >
                         <Github size={18} /> Source Code
                       </a>
                    )}
                    {selectedProject.figma && (
                       <a 
                         href={selectedProject.figma} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl font-semibold border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-all active:scale-95"
                       >
                         <Figma size={18} /> Figma Design
                       </a>
                    )}
                    {selectedProject.pdf && (
                       <a 
                         href={selectedProject.pdf} 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/20 active:scale-95"
                       >
                         <FileText size={18} /> View Document Abstract (PDF)
                       </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

