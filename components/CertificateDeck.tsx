'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificatesData, Certificate } from '@/data/certificates';
import { Award, Calendar, Building2, Link as LinkIcon, Eye, Search, ChevronDown } from 'lucide-react';

const FILTERS = [
  { label: 'All', value: 'All' },
  { label: 'Hackathons & Innovation', value: 'Hackathons & Innovation' },
  { label: 'Courses & Certifications', value: 'Courses & Certifications' },
  { label: 'Job Simulations', value: 'Job Simulations' },
  { label: 'Workshops & Webinars', value: 'Workshops & Webinars' },
  { label: 'Other Achievements', value: 'Other Achievements' }
];

const CertificateDetail = ({ cert }: { cert: Certificate }) => (
  <div className="flex flex-col gap-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cert.issueDate && (
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/30 border border-border">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1 flex items-center gap-2">
            <Calendar className="w-3 h-3" /> Issue Date
          </p>
          <p className="font-medium text-foreground">{cert.issueDate}</p>
        </div>
      )}
      
      {cert.credentialId && (
        <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/30 border border-border md:col-span-1 border-dashed">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Credential ID</p>
          <p className="font-mono text-sm font-medium text-foreground break-all">{cert.credentialId}</p>
        </div>
      )}
    </div>

    <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/30 border border-border">
      <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-1">Category</p>
      <p className="font-medium text-foreground">{cert.category}</p>
    </div>

    {cert.description && (
      <div>
        <h4 className="text-sm font-semibold text-zinc-900 dark:text-white mb-2 uppercase tracking-wider flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-500" /> Description
        </h4>
        <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-sm md:text-base">
          {cert.description}
        </p>
      </div>
    )}

    {/* Action Buttons */}
    {cert.credentialUrl && (
      <div className="flex flex-col pt-4 border-t border-border">
        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-md active:scale-95 w-fit"
        >
          <LinkIcon className="w-4 h-4" />
          Verify Credential
        </a>
      </div>
    )}
  </div>
);

export default function CertificateDeck() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeId, setActiveId] = useState<string | null>(null);
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'a-z' | 'z-a'>('newest');

  // Compute filtered and sorted cards
  const filteredCards = useMemo(() => {
    let result = certificatesData.filter(cert => {
      const matchesCategory = filter === 'All' || cert.category === filter;
      const lowerQuery = searchQuery.toLowerCase();
      const matchesSearch = cert.title.toLowerCase().includes(lowerQuery) ||
                            cert.organization.toLowerCase().includes(lowerQuery) ||
                            cert.category.toLowerCase().includes(lowerQuery);
      return matchesCategory && matchesSearch;
    });

    result.sort((a, b) => {
      const dateA = a.issueDate ? new Date(a.issueDate).getTime() : 0;
      const dateB = b.issueDate ? new Date(b.issueDate).getTime() : 0;
      
      if (sortOrder === 'a-z' || sortOrder === 'z-a') {
        const titleComparison = a.title.localeCompare(b.title);
        if (titleComparison !== 0) {
            return sortOrder === 'a-z' ? titleComparison : -titleComparison;
        }
        return dateB - dateA;
      }
      
      if (dateA !== dateB) {
        return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
      }
      
      return a.title.localeCompare(b.title); 
    });

    return result;
  }, [filter, searchQuery, sortOrder]);

  // Compute counts for the category filters based on the CURRENT search query
  const filterCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    FILTERS.forEach(f => {
      if (f.label === 'All') {
        counts[f.label] = certificatesData.filter(cert => {
          const lowerQuery = searchQuery.toLowerCase();
          return cert.title.toLowerCase().includes(lowerQuery) ||
                 cert.organization.toLowerCase().includes(lowerQuery) ||
                 cert.category.toLowerCase().includes(lowerQuery);
        }).length;
      } else {
        counts[f.label] = certificatesData.filter(cert => {
          const lowerQuery = searchQuery.toLowerCase();
          const matchesSearch = cert.title.toLowerCase().includes(lowerQuery) ||
                                cert.organization.toLowerCase().includes(lowerQuery) ||
                                cert.category.toLowerCase().includes(lowerQuery);
          return cert.category === f.value && matchesSearch;
        }).length;
      }
    });
    return counts;
  }, [searchQuery]);

  useEffect(() => {
    if (activeId && !filteredCards.find(c => c.id === activeId)) {
      setActiveId(null);
    }
  }, [filteredCards, activeId]);

  const handleCardClick = (cert: Certificate, e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('a') || target.closest('button')) return;
    
    if (window.innerWidth >= 768) {
      setActiveModalCert(cert);
    } else {
      setActiveId(activeId === cert.id ? null : cert.id);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto py-12 px-4 relative">
      <div className="flex flex-col items-center gap-8 mb-12">
        
        {/* Search Field and Sort Selector */}
        <div className="w-full max-w-4xl flex flex-col sm:flex-row gap-4 items-center relative">
          <div className="w-full relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-zinc-400" />
            </div>
            <input
              type="text"
              placeholder="Search by title, organization, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
            />
          </div>

          <div className="w-full sm:w-auto relative flex-shrink-0">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest' | 'a-z' | 'z-a')}
              className="w-full sm:w-auto px-5 py-4 pr-12 rounded-2xl bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all appearance-none cursor-pointer font-medium"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <ChevronDown className="w-5 h-5 text-zinc-400" />
            </div>
          </div>
        </div>

        {/* Real-time Achievement Counter */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>Showing <strong className="text-blue-600 dark:text-blue-400 font-bold">{filteredCards.length}</strong> of <strong className="text-zinc-900 dark:text-white font-bold">{certificatesData.length}</strong> Credentials & Achievements</span>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {FILTERS.map(f => (
            <button
              key={f.label}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border flex items-center gap-2 ${
                filter === f.value
                  ? 'bg-zinc-900 border-zinc-900 text-white dark:bg-white dark:border-white dark:text-zinc-900 shadow-lg'
                  : 'bg-card border-border text-foreground hover:border-zinc-400 dark:hover:border-zinc-600 shadow-sm'
              }`}
            >
              {f.label}
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                filter === f.value 
                  ? 'bg-white/20 dark:bg-zinc-900/20 text-current'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400'
              }`}>
                {filterCounts[f.label] || 0}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid / Mobile Accordion Container */}
      <div className="w-full relative">
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          <AnimatePresence>
            {filteredCards.map((cert) => {
              const isActive = activeId === cert.id;
              
              return (
                <motion.div
                  layout
                  key={cert.id}
                  onClick={(e) => handleCardClick(cert, e)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className={`
                    w-full cursor-pointer rounded-2xl md:rounded-3xl border backdrop-blur-md overflow-hidden transition-all duration-300 relative
                    ${isActive
                      ? 'bg-blue-50/50 dark:bg-blue-900/10 border-blue-500/30'
                      : 'bg-card dark:bg-zinc-900/40 border-border hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 md:hover:-translate-y-1 md:hover:shadow-lg'
                    }
                  `}
                >
                  {/* Mobile View (Unchanged Structure) */}
                  <div className="p-5 flex flex-col md:hidden w-full">
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${isActive ? 'bg-blue-100 dark:bg-blue-900/30 border-blue-500/30' : 'bg-zinc-100 dark:bg-zinc-800 border-border'}`}>
                        <Award className={`w-5 h-5 ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-500 dark:text-zinc-400'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold transition-colors leading-snug mb-1.5 ${isActive ? 'text-blue-700 dark:text-blue-400' : 'text-foreground'}`} style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                          {cert.title}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3 leading-tight flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5" />
                          {cert.organization}
                        </p>
                        <span className="inline-flex text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-border text-zinc-600 dark:text-zinc-300 font-semibold">
                          {cert.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Desktop Grid Card View */}
                  <div className="hidden md:flex p-6 lg:p-8 flex-col h-full w-full relative">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border bg-zinc-100 dark:bg-zinc-800 border-border mb-5">
                      <Award className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground leading-snug mb-3" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                      {cert.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 mb-5 leading-tight flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{cert.organization}</span>
                    </p>
                    
                    <div className="mt-auto pt-5 border-t border-border/50 flex flex-col gap-3">
                      <span className="inline-flex w-fit text-[11px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-border text-zinc-600 dark:text-zinc-300 font-semibold">
                        {cert.category}
                      </span>
                      {cert.issueDate && (
                        <div className="text-sm text-zinc-500 flex items-center gap-2 font-medium">
                          <Calendar className="w-4 h-4" /> {cert.issueDate}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile expansion accordion */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden px-5 pb-5 border-t border-border pt-5"
                      >
                       <CertificateDetail cert={cert} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {filteredCards.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="col-span-full text-center py-20 text-zinc-500 w-full bg-card rounded-2xl border border-dashed border-border"
            >
              No certificates found matching your search.
            </motion.div>
          )}
        </div>
      </div>

      {/* Desktop/Tablet Modal */}
      <AnimatePresence>
        {activeModalCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-zinc-950/60 backdrop-blur-sm hidden md:flex"
            onClick={() => setActiveModalCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-card w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl border border-border shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveModalCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>

              <div className="p-8">
                <div className="flex flex-col gap-6 border-b border-border pb-8 mb-8 pr-12">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-500/20 shadow-inner">
                    <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight" style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}>
                      {activeModalCert.title}
                    </h2>
                    <p className="text-lg text-zinc-500 dark:text-zinc-400 flex items-center gap-2 font-medium">
                      <Building2 className="w-5 h-5 flex-shrink-0" />
                      <span className="truncate">{activeModalCert.organization}</span>
                    </p>
                  </div>
                </div>

                <CertificateDetail cert={activeModalCert} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


