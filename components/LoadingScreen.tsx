'use client';

import React, { useState, useEffect, useRef, useTransition } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import { Terminal, ShieldCheck, ExternalLink, Compass } from 'lucide-react';

const INITIAL_STEPS = [
  'INITIALIZING KERNEL & GRAPHICS RUNTIME...',
  'BUFFERING SHADERS & QUANTUM PARTICLES...',
  'SYNCHRONIZING ATS_PDZ LEADERSHIP & ECOSYSTEM...',
  'INDEXING ARCHIVES, PROJECTS & CERTIFICATES...',
  'SYSTEM BUFFER COMPLETE — ACCESS GRANTED.',
];

export default function LoadingScreen() {
  const pathname = usePathname();
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isExternalRedirect, setIsExternalRedirect] = useState(false);
  const [externalUrl, setExternalUrl] = useState('');
  const [targetLabel, setTargetLabel] = useState('');
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('BUFFERING SYSTEM ASSETS...');
  const [, startTransition] = useTransition();

  const prevPathnameRef = useRef(pathname);
  const animationFrameRef = useRef<number | null>(null);

  // 1. Initial Page Load Handshake
  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1200; // 1.2s realistic initial buffer

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setProgress(pct);

      const stepIndex = Math.min(Math.floor((pct / 100) * INITIAL_STEPS.length), INITIAL_STEPS.length - 1);
      setStatusText(INITIAL_STEPS[stepIndex]);

      if (pct < 100) {
        animationFrameRef.current = requestAnimationFrame(step);
      } else {
        setTimeout(() => {
          setIsInitialLoad(false);
        }, 200);
      }
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // 2. Trigger buffer on internal route changes
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;

      // Start buffer for route transition
      startTransition(() => {
        setIsNavigating(true);
        setProgress(0);
        const routeName = pathname === '/' ? 'HOME / ABOUT ME' : pathname.replace('/', '').toUpperCase().replace('-', ' ');
        setStatusText(`BUFFERING ROUTE [ ${routeName} ]...`);
      });

      let startTimestamp: number | null = null;
      const duration = 400; // Snappy 400ms buffer for seamless page transitions

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
        setProgress(pct);

        if (pct < 100) {
          animationFrameRef.current = requestAnimationFrame(step);
        } else {
          setTimeout(() => {
            setIsNavigating(false);
          }, 150);
        }
      };

      animationFrameRef.current = requestAnimationFrame(step);

      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }
  }, [pathname]);

  // 3. Global Click Interceptor for external links & button navigations
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const anchor = target.closest('a') as HTMLAnchorElement | null;
      if (!anchor || !anchor.href) return;

      const href = anchor.href;
      const isInternal = href.startsWith(window.location.origin) || href.startsWith('/') || href.startsWith('#');

      // If clicking internal link that changes pathname
      if (isInternal) {
        const url = new URL(href, window.location.origin);
        if (url.pathname !== pathname && !href.startsWith('#')) {
          setIsNavigating(true);
          setProgress(10);
          const targetName = url.pathname === '/' ? 'HOME / ABOUT ME' : url.pathname.replace('/', '').toUpperCase().replace('-', ' ');
          setStatusText(`ROUTING TO [ ${targetName} ]...`);
        }
        return;
      }

      // External link clicked! (e.g. GitHub, LinkedIn, Live Demos, PDFs, etc.)
      if (href.startsWith('http://') || href.startsWith('https://') || href.endsWith('.pdf')) {
        // Prevent instant jump to allow buffer to play
        e.preventDefault();
        e.stopPropagation();

        let host = '';
        try {
          host = new URL(href).hostname.replace('www.', '');
        } catch {
          host = 'EXTERNAL RESOURCE';
        }

        setExternalUrl(href);
        setTargetLabel(anchor.innerText.trim() || host);
        setIsExternalRedirect(true);
        setProgress(0);
        setStatusText(`CONNECTING TO EXTERNAL HOST [ ${host.toUpperCase()} ]...`);

        let startTimestamp: number | null = null;
        const duration = 480; // 480ms external buffer

        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const elapsed = timestamp - startTimestamp;
          const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
          setProgress(pct);

          if (pct < 100) {
            animationFrameRef.current = requestAnimationFrame(step);
          } else {
            // Buffer complete: open destination
            const targetAttr = anchor.getAttribute('target') || '_blank';
            if (targetAttr === '_blank') {
              window.open(href, '_blank', 'noopener,noreferrer');
            } else {
              window.location.href = href;
            }

            setTimeout(() => {
              setIsExternalRedirect(false);
              setExternalUrl('');
            }, 300);
          }
        };

        animationFrameRef.current = requestAnimationFrame(step);
      }
    };

    // Listen for custom trigger-buffer events
    const handleCustomBuffer = (event: Event) => {
      const customEvent = event as CustomEvent<{ label?: string; url?: string }>;
      const { label, url } = customEvent.detail || {};

      setIsNavigating(true);
      setProgress(0);
      setStatusText(label ? `BUFFERING: ${label.toUpperCase()}...` : 'BUFFERING SYSTEM ASSETS...');

      let startTimestamp: number | null = null;
      const duration = 400;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsed = timestamp - startTimestamp;
        const pct = Math.min(Math.floor((elapsed / duration) * 100), 100);
        setProgress(pct);

        if (pct < 100) {
          animationFrameRef.current = requestAnimationFrame(step);
        } else {
          if (url) {
            window.location.href = url;
          }
          setTimeout(() => {
            setIsNavigating(false);
          }, 150);
        }
      };

      animationFrameRef.current = requestAnimationFrame(step);
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    window.addEventListener('ats-trigger-buffer', handleCustomBuffer);

    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
      window.removeEventListener('ats-trigger-buffer', handleCustomBuffer);
    };
  }, [pathname]);

  const isVisible = isInitialLoad || isNavigating || isExternalRedirect;

  const handleSkip = () => {
    setIsInitialLoad(false);
    setIsNavigating(false);
    if (isExternalRedirect && externalUrl) {
      window.open(externalUrl, '_blank', 'noopener,noreferrer');
      setIsExternalRedirect(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="system-buffer-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.01,
            filter: 'blur(6px)',
            transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } 
          }}
          className="fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-[#fdfdfd] dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 select-none overflow-hidden transition-colors duration-300"
        >
          {/* Theme-Adaptive Ambient Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff07_1px,transparent_1px),linear-gradient(to_bottom,#ffffff07_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          
          {/* Subtle Ambient Glows */}
          <div className="absolute w-80 h-80 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -top-16 -left-16" />
          <div className="absolute w-80 h-80 bg-indigo-500/10 dark:bg-purple-600/15 rounded-full blur-[120px] pointer-events-none -bottom-16 -right-16" />

          <div className="relative z-10 w-full max-w-sm sm:max-w-md px-6 flex flex-col items-center">
            
            {/* SPINNER + EMBLEM DUAL-RING ANIMATION */}
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
              
              {/* Outer Counter-Rotating Segmented Tech Spinner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-500 dark:border-t-blue-400 border-r-cyan-400 dark:border-r-cyan-300"
              />

              {/* Inner Pulsing Reverse Spinner Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-dashed border-zinc-300 dark:border-zinc-700/80"
              />

              {/* Central Glowing Shield with ATS Logo */}
              <div className="relative w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center justify-center p-2.5 z-10">
                <div className="relative w-full h-full">
                  <Image
                    src="/favLogo.png"
                    alt="ATS_PDZ"
                    fill
                    className="object-contain"
                    priority
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

            {/* Title & Context Header */}
            <div className="text-center mb-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[11px] font-mono tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-1.5 shadow-sm">
                {isExternalRedirect ? <ExternalLink className="w-3 h-3 text-blue-500 animate-pulse" /> : <Terminal className="w-3 h-3 text-blue-500" />}
                <span>
                  {isExternalRedirect 
                    ? 'EXTERNAL DESTINATION GATEWAY' 
                    : isNavigating 
                    ? 'TRANSITIONING VIEW' 
                    : 'ATS_PDZ // SYSTEM DOSSIER'}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white font-mono">
                {isExternalRedirect && targetLabel ? targetLabel : 'AARON THALAKKOTTOR SOORAJ'}
              </h2>
            </div>

            {/* LOADING BAR & PERCENTAGE PROGRESS CONTAINER */}
            <div className="w-full bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-xl dark:shadow-2xl mb-4">
              
              {/* Numerical 0-100% Progress & Status Tag */}
              <div className="flex justify-between items-center text-xs font-mono text-zinc-600 dark:text-zinc-400 mb-2.5">
                <span className="flex items-center gap-1.5 font-medium text-zinc-800 dark:text-zinc-200">
                  <Compass className="w-3.5 h-3.5 text-blue-500 dark:text-blue-400 animate-spin" style={{ animationDuration: '3s' }} />
                  {isExternalRedirect ? 'CONNECTING...' : 'BUFFERING...'}
                </span>
                <span className="text-zinc-900 dark:text-white font-bold text-sm sm:text-base tabular-nums">
                  {progress}%
                </span>
              </div>

              {/* Progress Bar Track (0 to 100%) */}
              <div className="w-full h-2.5 bg-zinc-100 dark:bg-zinc-950 rounded-full overflow-hidden p-0.5 border border-zinc-200/80 dark:border-zinc-800 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full relative"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut", duration: 0.05 }}
                >
                  {/* Glowing Leading Edge */}
                  <div className="absolute right-0 top-0 bottom-0 w-2.5 bg-white rounded-full shadow-[0_0_10px_#38bdf8]" />
                </motion.div>
              </div>

              {/* Dynamic Status Text Step */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                <span className="truncate pr-2 font-medium text-zinc-700 dark:text-zinc-300">
                  {statusText}
                </span>
                <span className="text-zinc-400 dark:text-zinc-500 shrink-0 font-bold">
                  {progress === 100 ? 'READY' : 'ACTIVE'}
                </span>
              </div>
            </div>

            {/* Protocol Footer & Optional Skip */}
            <div className="w-full flex items-center justify-between text-[10px] font-mono text-zinc-400 dark:text-zinc-500 px-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
                <span>ENCRYPTED ATS_PDZ PROTOCOL</span>
              </div>
              <button
                type="button"
                onClick={handleSkip}
                className="hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors uppercase underline underline-offset-4 cursor-pointer"
              >
                Skip Buffer →
              </button>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
