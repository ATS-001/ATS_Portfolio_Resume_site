"use client";

import React, { useState, useMemo } from 'react';
import ParticleBackground from '@/components/ParticleBackground';
import { Github, ExternalLink, Search, X, Users, Code, LayoutGrid, Tag, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type ProjectStatus = "Completed" | "Ongoing" | "Under Development" | "Active Development" | "Completed (Archived)";

type Project = {
  id: string;
  title: string;
  type?: string;
  description: string;
  longDescription?: string;
  contributors?: string[];
  organization?: string;
  techStack: string[];
  status: ProjectStatus;
  github?: string;
  live?: string;
  categories: string[];
};

const PROJECTS: Project[] = [
  {
    id: "vaazhas",
    title: "Vaazhas",
    type: "Digital Souvenir Website",
    description: "Built an interactive digital souvenir for the 12th grade batch using Google Sites.",
    contributors: ["https://sites.google.com/view/vaazhas-23-25/about"],
    techStack: ["Google Sites", "Media Tools"],
    status: "Completed",
    live: "https://sites.google.com/view/vaazhas-23-25/",
    categories: ["Web Development", "Creative Media"]
  },
  {
    id: "ecca",
    title: "Energy Consumption and Conservation App (ECCA)",
    description: "Designed a rural-focused energy tracking and conservation app concept; presented at Tachyon360’s Stogo Fest 2025.",
    contributors: ["Aaron", "Joel Jojan", "Ashvin Manoj"],
    techStack: ["Google Sites", "Basic UI Planning", "Websim.ai"],
    status: "Completed (Archived)",
    live: "https://sites.google.com/view/aja-ecca/",
    categories: ["Web Development", "Experimental Project"]
  },
  {
    id: "search-call",
    title: "Search&Call",
    description: "Built a functional business listing platform using Google Sites with category navigation, tag search, and SEO optimization.",
    contributors: ["Aaron", "Sooraj TS"],
    techStack: ["Google Sites", "Google Sheets", "JavaScript", "Google Apps Script"],
    status: "Active Development",
    live: "https://sites.google.com/view/searchandcall",
    categories: ["Search Systems", "Web Development", "Experimental Platform"]
  },
  {
    id: "t-dodecology",
    title: "T – Dodecology Series",
    type: "Novel & World-Building Series",
    description: "Writing a multi-title novel series with interconnected timelines, complex character arcs, and deep world-building.",
    techStack: ["Google Sites", "Creative Planning", "Websim.ai"],
    status: "Ongoing",
    live: "https://sites.google.com/view/t-dodecology-series",
    categories: ["Literature", "Creative Media", "Experimental Narrative"]
  },
  {
    id: "studyai",
    title: "StudyAI",
    description: "AI-generated personalized study timetable platform based on subjects and available study hours.",
    contributors: ["Aaron", "Alwin Thomas"],
    organization: "Part of HexnicAI",
    techStack: ["UI/UX", "Lovable", "Vercel", "Prompt Engineering"],
    status: "Completed",
    github: "https://github.com/ATS-001/studyai-2026",
    live: "https://studyai-2026.vercel.app/",
    categories: ["AI Tools", "Educational Technology", "Web Development"]
  },
  {
    id: "hexnicai",
    title: "HexnicAI",
    description: "AI-based personalized and inclusive learning platform.",
    contributors: ["Aaron", "Alwin Thomas", "Adithya Binesh", "Abhinav N", "Adhin Seby", "Akshay TS"],
    organization: "Part of ATS_PDZ | Brother organization to CommunityWATS",
    techStack: ["UI/UX", "V0 by Vercel", "Prompt Engineering", "Vercel Deployment"],
    status: "Completed",
    github: "https://github.com/ATS-001/HexnicAI",
    live: "https://hexnicai.vercel.app/",
    categories: ["AI Platform", "Educational Technology", "Experimental Tech"]
  },
  {
    id: "community-wats",
    title: "CommunityWATS (C-WATS)",
    description: "AI-based personalized and inclusive learning ecosystem covering multiple subjects.",
    organization: "Brother organization to HexnicAI",
    techStack: ["UI/UX", "Google AI Studio", "Prompt Engineering", "Vercel Deployment"],
    status: "Under Development",
    categories: ["Educational Technology", "AI Tools", "Experimental Platform"]
  },
  {
    id: "it-workshop",
    title: "IT-Workshop",
    description: "A comprehensive study guide platform for Computer Science viva and lab exam preparation.",
    organization: "Part of C-WATS",
    techStack: ["UI/UX", "Google AI Studio", "Vercel", "Prompt Engineering"],
    status: "Completed",
    github: "https://github.com/ATS-001/IT-Workshop",
    live: "https://it-workshops2-2024.vercel.app/",
    categories: ["Educational Technology", "AI Tools", "Learning Platform"]
  },
  {
    id: "ktu-discrete-math",
    title: "KTU Discrete Math",
    description: "Step-by-step solutions and explanations for KTU Discrete Mathematics syllabus 2024.",
    organization: "Part of C-WATS",
    techStack: ["UI/UX", "Google AI Studio", "Vercel", "Prompt Engineering"],
    status: "Completed",
    github: "https://github.com/ATS-001/Discrete-Maths-ModelPaper24",
    live: "https://discrete-maths-model-paper24.vercel.app/",
    categories: ["Educational Technology", "AI Tools", "Mathematics Learning"]
  },
  {
    id: "cimp",
    title: "CImp",
    description: "A complete guide to C Programming tailored for the KTU 2024 syllabus.",
    organization: "Part of C-WATS",
    techStack: ["UI/UX", "Google AI Studio", "Vercel", "Prompt Engineering"],
    status: "Completed",
    github: "https://github.com/ATS-001/CImp",
    live: "https://c-imp.vercel.app/",
    categories: ["Programming Education", "AI Tools", "Learning Platform"]
  },
  {
    id: "eeipr",
    title: "EEIPR",
    description: "Engineering, Entrepreneurship and Intellectual Property Rights resource repository for KTU students.",
    organization: "Part of C-WATS",
    techStack: ["UI/UX", "Google AI Studio", "Vercel", "Prompt Engineering"],
    status: "Completed",
    github: "https://github.com/ATS-001/EEIPR",
    live: "https://c-imp.vercel.app/",
    categories: ["Educational Technology", "Learning Repository", "AI-Assisted Platform"]
  },
  {
    id: "focfhwtwd",
    title: "FOCFHWTWD",
    description: "Foundations of Computing — From Hardware Essentials to Web Design. A KTU-indexed learning resource repository.",
    organization: "Part of C-WATS",
    techStack: ["UI/UX", "Google AI Studio", "Vercel", "Prompt Engineering"],
    status: "Completed",
    github: "https://github.com/ATS-001/FOCFHWTWD",
    live: "https://focfhwtwd.vercel.app/",
    categories: ["Educational Technology", "Learning Platform", "Computing Education"]
  }
];

// Extract unique categories
const ALL_CATEGORIES = Array.from(new Set(PROJECTS.flatMap(p => p.categories))).sort();

const getStatusStyles = (status: ProjectStatus) => {
  switch (status) {
    case 'Completed': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
    case 'Ongoing': return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
    case 'Under Development': 
    case 'Active Development': return 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20';
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

        {/* Filters & Search */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {/* Search */}
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400 group-focus-within:text-blue-500 transition-colors">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Search projects, tech stacks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-zinc-200 dark:border-white/10 rounded-2xl leading-5 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 sm:text-sm transition-all shadow-sm"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null 
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md' 
                  : 'bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              All
            </button>
            {ALL_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/30' 
                    : 'bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-white/10 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {category}
              </button>
            ))}
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
                className="group relative bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md rounded-3xl border border-zinc-200 dark:border-white/5 overflow-hidden hover:shadow-2xl hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Glow behind card on hover */}
                <div className="absolute inset-0 bg-zinc-900/0 hover:bg-zinc-900/[0.02] dark:hover:bg-white/[0.02] transition-colors duration-500" />
                
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
              className="fixed bottom-0 left-0 right-0 md:bottom-auto md:top-1/2 md:left-1/2 md:right-auto md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[768px] md:max-w-[90vw] bg-white dark:bg-zinc-900 rounded-t-3xl md:rounded-3xl shadow-2xl z-50 overflow-hidden border border-zinc-200 dark:border-white/10 max-h-[85vh] flex flex-col pointer-events-auto"
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
                  
                  {/* Description */}
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
                      <Info size={16} /> About Project
                    </h4>
                    <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

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
                         <ExternalLink size={18} /> View Live Project
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

