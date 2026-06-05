"use client";

import React, { useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      shapeType: number; // 0: square, 1: triangle, 2: circle
      shapeTimer: number;
      colorIndex: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 1.5 + 0.5;
        this.density = (Math.random() * 5) + 1;
        this.shapeType = Math.floor(Math.random() * 3);
        this.shapeTimer = Math.random() * 300;
        
        // 85% base (gray/black/white), 15% muted accents (red, blue, green, yellow)
        const rand = Math.random();
        if (rand < 0.85) this.colorIndex = 0;
        else if (rand < 0.88) this.colorIndex = 1; // red
        else if (rand < 0.92) this.colorIndex = 2; // blue
        else if (rand < 0.96) this.colorIndex = 3; // green
        else this.colorIndex = 4; // yellow
      }

      update() {
        // Shape morphing
        this.shapeTimer += 1;
        if (this.shapeTimer > 800) {
           this.shapeType = (this.shapeType + 1) % 3;
           this.shapeTimer = 0;
        }

        // Brownian motion
        this.x += (Math.random() - 0.5) * 0.2;
        this.y += (Math.random() - 0.5) * 0.2;

        // Keep within bounds gently
        if (this.x < 0 || this.x > canvas!.width) this.x = this.baseX;
        if (this.y < 0 || this.y > canvas!.height) this.y = this.baseY;

        // Mouse interaction (Halftone reaction)
        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let maxDistance = 200;

        if (distance < maxDistance) {
           let forceDirectionX = dx / distance;
           let forceDirectionY = dy / distance;
           let force = (maxDistance - distance) / maxDistance;
           let directionX = forceDirectionX * force * this.density * 0.05;
           let directionY = forceDirectionY * force * this.density * 0.05;
           
           this.x -= directionX;
           this.y -= directionY;
        } else {
           if (this.x !== this.baseX) {
               let dx = this.x - this.baseX;
               this.x -= dx / 100;
           }
           if (this.y !== this.baseY) {
               let dy = this.y - this.baseY;
               this.y -= dy / 100;
           }
        }
      }

      draw() {
        if (!ctx) return;
        
        const isDark = document.documentElement.className.includes("dark");
        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        // Halftone effects based on distance
        let alpha = isDark ? 0.3 : 0.15;
        let currentSize = this.size;
        
        if (distance < 200) {
           const factor = (200 - distance) / 200;
           alpha += factor * (isDark ? 0.5 : 0.6); // Darken/Brighten nearby
           currentSize += factor * 1.5; // Slight dot expansion
        }

        const colorsDark = [
           '228, 228, 231', // zinc-200
           '248, 113, 113', // red-400
           '96, 165, 250',  // blue-400
           '52, 211, 153',  // green-400
           '250, 204, 21'   // yellow-400
        ];
        
        const colorsLight = [
           '63, 63, 70',    // zinc-700
           '153, 27, 27',   // red-800
           '30, 58, 138',   // blue-900
           '6, 78, 59',     // green-900
           '133, 77, 14'    // yellow-900
        ];

        let baseColor = isDark ? colorsDark[this.colorIndex] : colorsLight[this.colorIndex];
        
        ctx.fillStyle = `rgba(${baseColor}, ${alpha})`;
        ctx.beginPath();
        
        switch (this.shapeType) {
          case 0: // Square
             ctx.rect(this.x - currentSize, this.y - currentSize, currentSize * 2, currentSize * 2);
             break;
          case 1: // Triangle
             ctx.moveTo(this.x, this.y - currentSize * 1.2);
             ctx.lineTo(this.x + currentSize * 1.2, this.y + currentSize * 1.2);
             ctx.lineTo(this.x - currentSize * 1.2, this.y + currentSize * 1.2);
             break;
          case 2: // Circle
             ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
             break;
        }
        ctx.closePath();
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      // denser halftone feel, but reduced on mobile
      const isMobile = window.innerWidth < 768;
      const density = isMobile ? 18000 : 8000;
      const particleCount = Math.floor((canvas!.width * canvas!.height) / density);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      
      const isDark = document.documentElement.className.includes("dark");
      const isMobile = window.innerWidth < 768;
      
      // Procedural dot grid layer (computational print style)
      // On mobile, space dots further apart for performance
      const dotSpacing = isMobile ? 36 : 24;
      ctx.fillStyle = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)';
      for(let x = 0; x < canvas!.width; x += dotSpacing) {
         for(let y = 0; y < canvas!.height; y += dotSpacing) {
            ctx.fillRect(x, y, 1, 1);
         }
      }
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
       mouseRef.current = {
          x: event.clientX,
          y: event.clientY
       };
    };

    const handleTouchMove = (event: TouchEvent) => {
       if (event.touches.length > 0) {
          mouseRef.current = {
             x: event.touches[0].clientX,
             y: event.touches[0].clientY
          };
       }
    };

    const handleMouseLeave = () => {
       mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseLeave);
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!prefersReducedMotion.matches) {
       resizeCanvas();
       animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-700 ease-in-out">
      {/* Background gradients for dark mode / light mode */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-slate-200/50 dark:bg-zinc-900/40 blur-[120px] pointer-events-none transition-colors duration-700 ease-in-out" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-zinc-200/50 dark:bg-zinc-800/30 blur-[120px] pointer-events-none transition-colors duration-700 ease-in-out" />
      
      {/* Gigantic Watermark Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden mix-blend-multiply dark:mix-blend-screen">
        <img 
          src="/favLogo.png" 
          alt="" 
          className="w-[150vw] sm:w-[80vw] lg:w-[60vw] max-w-[1200px] opacity-[0.02] dark:opacity-[0.03] grayscale dark:invert transition-all duration-700 ease-in-out object-contain blur-[2px] dark:blur-[1px]" 
        />
      </div>

      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-10"
        aria-hidden="true"
      />
      {/* SVG Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03] pointer-events-none mix-blend-overlay z-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
}
