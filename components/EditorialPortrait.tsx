"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

interface EditorialPortraitProps {
  imageSrc?: string;
}

export default function EditorialPortrait({ imageSrc = '/portrait.png.png' }: EditorialPortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;
      colorIndex: number;
      shapeType: number; // 0: square, 1: triangle, 2: circle
      shapeTimer: number;
      brightness: number;

      constructor(x: number, y: number, brightness: number = 0.5) {
        this.x = x + (Math.random() - 0.5) * 2;
        this.y = y + (Math.random() - 0.5) * 2;
        this.baseX = x;
        this.baseY = y;
        this.brightness = brightness; // 0 is dark, 1 is light
        
        let darkness = 1 - brightness;
        this.size = Math.pow(darkness, 1.5) * 2.0 + 0.3; 
        this.density = (Math.random() * 2) + 1;
        this.shapeType = Math.floor(Math.random() * 3);
        this.shapeTimer = Math.random() * 300;
        
        const rand = Math.random();
        if (rand < 0.92) this.colorIndex = 0;
        else if (rand < 0.96) this.colorIndex = 1;
        else if (rand < 0.98) this.colorIndex = 2;
        else if (rand < 0.99) this.colorIndex = 3;
        else this.colorIndex = 4;
      }

      update() {
        this.shapeTimer += 1;
        if (this.shapeTimer > 1000) {
           this.shapeType = (this.shapeType + 1) % 3;
           this.shapeTimer = 0;
        }

        this.x += (Math.random() - 0.5) * 0.05;
        this.y += (Math.random() - 0.5) * 0.05;

        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let maxDistance = 80;

        if (distance < maxDistance) {
           let forceDirectionX = dx / distance;
           let forceDirectionY = dy / distance;
           let force = (maxDistance - distance) / maxDistance;
           let directionX = forceDirectionX * force * this.density * 0.02;
           let directionY = forceDirectionY * force * this.density * 0.02;
           
           this.x -= directionX;
           this.y -= directionY;
        } else {
           if (this.x !== this.baseX) {
               let dx = this.x - this.baseX;
               this.x -= dx / 15;
           }
           if (this.y !== this.baseY) {
               let dy = this.y - this.baseY;
               this.y -= dy / 15;
           }
        }
      }

      draw() {
        if (!ctx) return;
        
        const isDark = document.documentElement.className.includes("dark");
        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        let darkness = 1 - this.brightness;
        let contrastFactor = Math.pow(darkness, 1.5);
        
        let baseAlpha = contrastFactor * (isDark ? 0.8 : 0.6);
        if (baseAlpha < 0.05) return;

        let alpha = baseAlpha;
        let currentSize = this.size;
        
        if (distance < 80) {
           const factor = (80 - distance) / 80;
           alpha += factor * 0.15;
           currentSize += factor * 0.5;
        }

        const colorsDark = [
           '210, 210, 215',
           '150, 150, 155',
           '230, 220, 210',
           '180, 190, 200',
           '255, 255, 255'
        ];
        
        const colorsLight = [
           '40, 40, 45',
           '80, 80, 85',
           '60, 55, 50',
           '45, 55, 65',
           '10, 10, 10'
        ];

        let rgb = isDark ? colorsDark[this.colorIndex] : colorsLight[this.colorIndex];
        
        ctx.fillStyle = `rgba(${rgb}, ${Math.min(alpha, 1)})`;
        ctx.beginPath();
        
        switch (this.shapeType) {
          case 0:
             ctx.rect(this.x - currentSize / 2, this.y - currentSize / 2, currentSize, currentSize);
             break;
          case 1:
             ctx.arc(this.x, this.y, currentSize * 0.6, 0, Math.PI * 2);
             break;
          case 2:
             ctx.arc(this.x, this.y, currentSize * 0.4, 0, Math.PI * 2);
             break;
        }
        ctx.closePath();
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const width = canvas!.width;
      const height = canvas!.height;
      const isMobile = window.innerWidth < 768;
      
      const fallbackCount = isMobile ? 150 : 300;
      for (let i = 0; i < fallbackCount; i++) {
         const x = Math.random() * width;
         const y = Math.random() * height;
         particles.push(new Particle(x, y, Math.random() * 0.5 + 0.2));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
       if (!containerRef.current) return;
       const rect = containerRef.current.getBoundingClientRect();
       mouseRef.current = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
       };

       // Subtle parallax effect on the image container
       const centerX = rect.width / 2;
       const centerY = rect.height / 2;
       const moveX = (mouseRef.current.x - centerX) / 30;
       const moveY = (mouseRef.current.y - centerY) / 30;
       if (imageRef.current) {
         imageRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
       }
    };

    const handleTouchMove = (event: TouchEvent) => {
       if (!containerRef.current || event.touches.length === 0) return;
       const rect = containerRef.current.getBoundingClientRect();
       mouseRef.current = {
          x: event.touches[0].clientX - rect.left,
          y: event.touches[0].clientY - rect.top
       };
    };

    const handleMouseLeave = () => {
       mouseRef.current = { x: -1000, y: -1000 };
       if (imageRef.current) {
         imageRef.current.style.transform = `translate(0px, 0px) scale(1)`;
       }
    };

    const resizeCanvas = () => {
       if (!containerRef.current || !canvas) return;
       const rect = containerRef.current.getBoundingClientRect();
       canvas.width = rect.width;
       canvas.height = rect.height;
       
       initParticles();
    };

    window.addEventListener('resize', resizeCanvas);
    const node = containerRef.current;
    if (node) {
      node.addEventListener('mousemove', handleMouseMove);
      node.addEventListener('mouseleave', handleMouseLeave);
      node.addEventListener('touchstart', handleTouchMove, { passive: true });
      node.addEventListener('touchmove', handleTouchMove, { passive: true });
      node.addEventListener('touchend', handleMouseLeave);
    }

    // Initial size
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (node) {
         node.removeEventListener('mousemove', handleMouseMove);
         node.removeEventListener('mouseleave', handleMouseLeave);
         node.removeEventListener('touchstart', handleTouchMove);
         node.removeEventListener('touchmove', handleTouchMove);
         node.removeEventListener('touchend', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center group overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 transition-all duration-500 hover:border-zinc-300 dark:hover:border-white/20">
      
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        <Image
          ref={imageRef}
          src={imageSrc}
          alt="Aaron Thalakkottor Sooraj"
          fill
          className="object-cover transition-transform duration-700 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
          onLoad={() => setImageLoaded(true)}
          style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 1s ease-in-out, transform 0.7s ease-out' }}
        />
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-difference opacity-50"
        aria-label="Editorial Ambient Particles"
      />
      
      {/* Subtle overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200/20 to-transparent dark:from-black/20 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
}
