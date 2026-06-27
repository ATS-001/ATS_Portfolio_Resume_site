'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

const ROUTES_ORDER = [
  '/',
  '/about-atspdz',
  '/projects',
  '/achievements',
  '/gallery',
  '/contact',
  '/feedback',
];

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [direction, setDirection] = useState(1);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (prevPath !== pathname) {
      const prevIndex = ROUTES_ORDER.indexOf(prevPath);
      const currentIndex = ROUTES_ORDER.indexOf(pathname);
      
      // Default to forward (1) if not found in list, otherwise calculate direction
      if (prevIndex !== -1 && currentIndex !== -1) {
        setDirection(currentIndex > prevIndex ? 1 : -1);
      } else {
        setDirection(1);
      }
      setPrevPath(pathname);
    }
  }, [pathname, prevPath]);

  // Reduced motion check
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const variants: any = {
    initial: (dir: number) => ({
      x: prefersReducedMotion ? 0 : (dir > 0 ? 50 : -50),
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: prefersReducedMotion ? 0 : (dir > 0 ? -50 : 50),
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={pathname}
        custom={direction}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
