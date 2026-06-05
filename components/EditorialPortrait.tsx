"use client";

import React, { useRef, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

interface EditorialPortraitProps {
  imageSrc?: string;
}

export default function EditorialPortrait({ imageSrc = '/portrait.png.png' }: EditorialPortraitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageSrc;

    img.onload = () => {
      setImageLoaded(true);
      initParticles(img);
      animate();
    };

    img.onerror = () => {
      console.warn(`Could not load image from ${imageSrc}. Please ensure the file is uploaded to the public directory.`);
      // Add some default abstract particles if image fails to load
      initParticles();
      animate();
    };

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
        
        // Sharper, smaller particles based on pixel darkness
        let darkness = 1 - brightness;
        this.size = Math.pow(darkness, 1.5) * 2.0 + 0.3; 
        this.density = (Math.random() * 2) + 1;
        this.shapeType = Math.floor(Math.random() * 3);
        this.shapeTimer = Math.random() * 300;
        
        // Mostly grayscale/charcoal, minimal colorful noise
        const rand = Math.random();
        if (rand < 0.92) this.colorIndex = 0; // base gray
        else if (rand < 0.96) this.colorIndex = 1; // secondary gray
        else if (rand < 0.98) this.colorIndex = 2; // subtle warm
        else if (rand < 0.99) this.colorIndex = 3; // subtle cool
        else this.colorIndex = 4; // stark contrast dot
      }

      update() {
        this.shapeTimer += 1;
        if (this.shapeTimer > 1000) {
           this.shapeType = (this.shapeType + 1) % 3;
           this.shapeTimer = 0;
        }

        // Extremely subtle, calm Brownian motion
        this.x += (Math.random() - 0.5) * 0.05;
        this.y += (Math.random() - 0.5) * 0.05;

        // Mouse interaction
        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let maxDistance = 80; // reduced interaction radius

        if (distance < maxDistance) {
           let forceDirectionX = dx / distance;
           let forceDirectionY = dy / distance;
           let force = (maxDistance - distance) / maxDistance;
           let directionX = forceDirectionX * force * this.density * 0.02; // subtle movement
           let directionY = forceDirectionY * force * this.density * 0.02;
           
           this.x -= directionX;
           this.y -= directionY;
        } else {
           if (this.x !== this.baseX) {
               let dx = this.x - this.baseX;
               this.x -= dx / 15; // fast sharp return to base
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
        
        // Base opacity depends on the brightness of the source image pixel
        // High contrast rendering
        let darkness = 1 - this.brightness;
        let contrastFactor = Math.pow(darkness, 1.5);
        
        let baseAlpha = contrastFactor * (isDark ? 0.95 : 0.85);
        if (baseAlpha < 0.08) return; // aggressively clip light pixels to maintain contrast

        let alpha = baseAlpha;
        let currentSize = this.size;
        
        if (distance < 80) {
           const factor = (80 - distance) / 80;
           alpha += factor * 0.15; // subtle hover brighten
           currentSize += factor * 0.5; // subtle size increase
        }

        // Monochrome & grayscale palette for editorial feel
        const colorsDark = [
           '210, 210, 215', // main: soft white/light gray
           '150, 150, 155', // secondary: mid gray
           '230, 220, 210', // tint: subtle warm paper
           '180, 190, 200', // tint: subtle cool digital
           '255, 255, 255'  // pop: stark white
        ];
        
        const colorsLight = [
           '40, 40, 45',    // main: charcoal
           '80, 80, 85',    // secondary: medium gray
           '60, 55, 50',    // tint: warm dark
           '45, 55, 65',    // tint: cool dark
           '10, 10, 10'     // pop: stark black
        ];

        let rgb = isDark ? colorsDark[this.colorIndex] : colorsLight[this.colorIndex];
        
        ctx.fillStyle = `rgba(${rgb}, ${Math.min(alpha, 1)})`;
        ctx.beginPath();
        
        // Sharper geometric shapes
        switch (this.shapeType) {
          case 0:
             // perfect sharp squares
             ctx.rect(this.x - currentSize / 2, this.y - currentSize / 2, currentSize, currentSize);
             break;
          case 1:
             // smaller tighter circles
             ctx.arc(this.x, this.y, currentSize * 0.6, 0, Math.PI * 2);
             break;
          case 2:
             // tiny precise dots
             ctx.arc(this.x, this.y, currentSize * 0.4, 0, Math.PI * 2);
             break;
        }
        ctx.closePath();
        ctx.fill();
      }
    }

    const initParticles = (sourceImg?: HTMLImageElement) => {
      particles = [];
      const width = canvas!.width;
      const height = canvas!.height;

      const isMobile = window.innerWidth < 768;

      if (sourceImg) {
        // Draw image to a temporary canvas to get pixel data
        const tempCanvas = document.createElement('canvas');
        const tempCtx = tempCanvas.getContext('2d');
        if (!tempCtx) return;

        // Size to sample pixels from (higher resolution for sharper edges)
        // Adjust these to change the density of the portrait. Reduce on mobile.
        const sampleSize = isMobile ? 80 : 130; 
        const aspect = sourceImg.height / sourceImg.width;
        
        tempCanvas.width = sampleSize;
        tempCanvas.height = sampleSize * aspect;
        
        // Draw and stretch image to fill
        tempCtx.drawImage(sourceImg, 0, 0, tempCanvas.width, tempCanvas.height);
        
        const imageData = tempCtx.getImageData(0, 0, tempCanvas.width, tempCanvas.height);
        const data = imageData.data;

        // Calculate scaling to fit into our display canvas
        const scaleX = width / tempCanvas.width;
        const scaleY = height / tempCanvas.height;
        
        // To center it if there's a discrepancy
        const offsetX = 0;
        const offsetY = (height - (tempCanvas.height * scaleY)) / 2;

        for (let y = 0; y < tempCanvas.height; y++) {
          for (let x = 0; x < tempCanvas.width; x++) {
            const index = (y * tempCanvas.width + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const a = data[index + 3];

            if (a > 128) { // Only process opaque pixels
              // Calculate perceived brightness (0 to 1)
              const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
              
              // Only create particles for darker areas 
              // Higher contrast threshold to keep backgrounds clean and edges sharp
              if (brightness < 0.88) { 
                  const posX = x * scaleX + offsetX + (scaleX / 2);
                  const posY = y * scaleY + offsetY + (scaleY / 2);
                  particles.push(new Particle(posX, posY, brightness));
              }
            }
          }
        }
      } else {
        // Fallback procedural pattern if no image
        const fallbackCount = isMobile ? 200 : 500;
        for (let i = 0; i < fallbackCount; i++) {
           const x = Math.random() * width;
           const y = Math.random() * height;
           particles.push(new Particle(x, y, Math.random() * 0.5 + 0.2));
        }
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
       if (!canvas) return;
       const rect = canvas.getBoundingClientRect();
       mouseRef.current = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
       };
    };

    const handleTouchMove = (event: TouchEvent) => {
       if (!canvas || event.touches.length === 0) return;
       const rect = canvas.getBoundingClientRect();
       mouseRef.current = {
          x: event.touches[0].clientX - rect.left,
          y: event.touches[0].clientY - rect.top
       };
    };

    const handleMouseLeave = () => {
       mouseRef.current = { x: -1000, y: -1000 };
    };

    const resizeCanvas = () => {
       if (!containerRef.current || !canvas) return;
       const rect = containerRef.current.getBoundingClientRect();
       canvas.width = rect.width;
       canvas.height = rect.height;
       
       if (imageLoaded) {
          initParticles(img);
       } else if (!img.src) {
          initParticles();
       }
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    canvas.addEventListener('touchstart', handleTouchMove, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleMouseLeave);

    // Initial size
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (canvas) {
         canvas.removeEventListener('mousemove', handleMouseMove);
         canvas.removeEventListener('mouseleave', handleMouseLeave);
         canvas.removeEventListener('touchstart', handleTouchMove);
         canvas.removeEventListener('touchmove', handleTouchMove);
         canvas.removeEventListener('touchend', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme, imageSrc]);

  return (
    <div ref={containerRef} className="w-full h-full relative flex items-center justify-center group overflow-hidden rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transition-opacity duration-1000"
        style={{ opacity: imageLoaded ? 1 : 0 }}
        aria-label="Editorial Particle Portrait"
      />
      
      {/* Subtle overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-200/20 to-transparent dark:from-black/20 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
}
