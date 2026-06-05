"use client";

import React, { useRef, useEffect } from 'react';

export default function FooterParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      // Get the parent container's dimensions instead of window
      const parent = canvas.parentElement;
      if (parent) {
         canvas.width = parent.clientWidth;
         canvas.height = parent.clientHeight;
      } else {
         canvas.width = window.innerWidth;
         canvas.height = 400; // fallback
      }
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      shapeType: number; // 0: circle, 1: square, 2: triangle
      shapeTimer: number;

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.density = (Math.random() * 10) + 1;
        this.shapeType = Math.floor(Math.random() * 3);
        this.shapeTimer = Math.random() * 100;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
      }
      
      canvasWidth: number;
      canvasHeight: number;

      update() {
        // Morph shape occasionally
        this.shapeTimer += 1;
        if (this.shapeTimer > 300) {
           this.shapeType = (this.shapeType + 1) % 3;
           this.shapeTimer = 0;
        }

        // Brownian motion
        this.x += (Math.random() - 0.5) * 0.5;
        this.y += (Math.random() - 0.5) * 0.5;

        // Keep within bounds roughly
        if (this.x < 0 || this.x > this.canvasWidth) this.x = this.baseX;
        if (this.y < 0 || this.y > this.canvasHeight) this.y = this.baseY;

        // Mouse interaction
        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let maxDistance = 150;

        if (distance < maxDistance) {
           let forceDirectionX = dx / distance;
           let forceDirectionY = dy / distance;
           let force = (maxDistance - distance) / maxDistance;
           let directionX = forceDirectionX * force * this.density * 0.2;
           let directionY = forceDirectionY * force * this.density * 0.2;
           
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
        
        let dx = mouseRef.current.x - this.x;
        let dy = mouseRef.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let isThemeDark = document.documentElement.classList.contains('dark');
        
        // Darken color near cursor subtly
        let alpha = 0.15;
        if (distance < 150) {
           alpha = isThemeDark ? 0.3 : 0.4;
        }
        
        ctx.fillStyle = isThemeDark ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha})`;
        ctx.beginPath();
        
        if (this.shapeType === 0) {
           ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        } else if (this.shapeType === 1) {
           ctx.rect(this.x - this.size, this.y - this.size, this.size * 2, this.size * 2);
        } else {
           ctx.moveTo(this.x, this.y - this.size);
           ctx.lineTo(this.x + this.size, this.y + this.size);
           ctx.lineTo(this.x - this.size, this.y + this.size);
           ctx.closePath();
        }
        ctx.fill();
      }
    }

    const initParticles = () => {
      if (!canvas) return;
      particles = [];
      const particleCount = (canvas.width * canvas.height) / 10000;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isThemeDark = document.documentElement.classList.contains('dark');
      // Subtle dot grid background
      ctx.fillStyle = isThemeDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)';
      for(let x = 0; x < canvas.width; x += 30) {
         for(let y = 0; y < canvas.height; y += 30) {
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
       const rect = canvas.getBoundingClientRect();
       mouseRef.current = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top
       };
    };

    const handleMouseLeave = () => {
       mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('resize', resizeCanvas);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Initial setup
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!prefersReducedMotion.matches) {
       resizeCanvas();
       animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-0"
      aria-hidden="true"
    />
  );
}
