'use client';

import React, { useState, useSyncExternalStore } from 'react';
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

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [direction, setDirection] = useState(1);
  const [prevPath, setPrevPath] = useState(pathname);

  if (prevPath !== pathname) {
    const prevIndex = ROUTES_ORDER.indexOf(prevPath);
    const currentIndex = ROUTES_ORDER.indexOf(pathname);
    setPrevPath(pathname);
    setDirection(prevIndex !== -1 && currentIndex !== -1 && currentIndex < prevIndex ? -1 : 1);
  }

  // Reduced motion check
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const variants = {
    initial: (dir: number) => ({
      x: prefersReducedMotion ? 0 : (dir > 0 ? 50 : -50),
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    },
    exit: (dir: number) => ({
      x: prefersReducedMotion ? 0 : (dir > 0 ? -50 : 50),
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 300, damping: 30 },
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
