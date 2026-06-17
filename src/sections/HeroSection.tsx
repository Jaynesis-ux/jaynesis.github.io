import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { FadeIn } from '../components/FadeIn';
import { ThemeToggle } from '../components/ThemeToggle';
import { ParticleBackground } from '../components/ParticleBackground';

const BG_IMAGE_1 = "/jay-1.png";
const BG_IMAGE_2 = "/jay-2.png";
const SPOTLIGHT_R = 260;

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [maskSvg, setMaskSvg] = useState('');
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('About');
  
  const mouse = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  const smooth = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });

  useEffect(() => {
    // Scrollspy
    const handleScroll = () => {
      const sections = ['about', 'philosophy', 'journal', 'projects', 'gallery', 'contact'];
      let currentSection = 'About';
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            currentSection = id.charAt(0).toUpperCase() + id.slice(1);
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    // Image Preloader
    let loadedCount = 0;
    const imagesToLoad = [BG_IMAGE_1, BG_IMAGE_2];
    
    imagesToLoad.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        // Fallback in case of error
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          setImagesLoaded(true);
        }
      };
    });

    // Canvas gradient mask generator
    const generateMask = () => {
      const canvas = document.createElement('canvas');
      const size = SPOTLIGHT_R * 2;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      if (!ctx) return '';
      
      const gradient = ctx.createRadialGradient(SPOTLIGHT_R, SPOTLIGHT_R, 0, SPOTLIGHT_R, SPOTLIGHT_R, SPOTLIGHT_R);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.4, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.6, 'rgba(255,255,255,0.75)');
      gradient.addColorStop(0.75, 'rgba(255,255,255,0.4)');
      gradient.addColorStop(0.88, 'rgba(255,255,255,0.12)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
      
      return `url(${canvas.toDataURL()})`;
    };

    setMaskSvg(generateMask());

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e) {
        if (e.touches.length > 0) {
          mouse.current.x = e.touches[0].clientX;
          mouse.current.y = e.touches[0].clientY;
        }
      } else {
        mouse.current.x = (e as MouseEvent).clientX;
        mouse.current.y = (e as MouseEvent).clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove, { passive: true });
    window.addEventListener('touchstart', handleMouseMove, { passive: true });
    
    let rafId: number;
    let lastTime = performance.now();

    // Robust linear interpolation
    const lerp = (start: number, end: number, amount: number) => {
      return (1 - amount) * start + amount * end;
    };

    const render = (time: number) => {
      const dt = Math.max(1, time - lastTime);
      lastTime = time;

      // Framerate-independent dampening logic
      // amount = 1 - exp(-dt * speed)
      // speed = 0.008 is a good value for silky smooth movement
      const amount = 1 - Math.exp(-dt * 0.008);

      smooth.current.x = lerp(smooth.current.x, mouse.current.x, amount);
      smooth.current.y = lerp(smooth.current.y, mouse.current.y, amount);
      
      if (containerRef.current) {
        containerRef.current.style.setProperty('--x', `${smooth.current.x}px`);
        containerRef.current.style.setProperty('--y', `${smooth.current.y}px`);
      }
      rafId = requestAnimationFrame(render);
    };
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchstart', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden h-screen bg-black"
      style={{ height: '100dvh' }}
    >
      <AnimatePresence>
        {!imagesLoaded && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-[200] bg-black flex items-center justify-center"
          >
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }} 
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="font-cormorant text-white/50 text-2xl tracking-[0.3em] font-light uppercase"
            >
              Loading...
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-[100] px-6 sm:px-10 py-6 flex justify-between items-center bg-transparent backdrop-blur-sm bg-black/10 transition-all duration-500">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group interactive">
            <div className="relative w-12 h-12 flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 border border-white/30 rounded-full transition-transform duration-700 ease-out group-hover:scale-105 group-hover:border-[#c8a96a]/70" />
              <div className="absolute inset-1.5 border border-white/10 rounded-full opacity-0 scale-50 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:border-[#c8a96a]/40" />
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white z-10 transition-transform duration-500 ease-out group-hover:scale-95 group-hover:text-[#c8a96a]">
                <path d="M16 4H14C12.8954 4 12 4.89543 12 6V15C12 17.2091 10.2091 19 8 19C5.79086 19 4 17.2091 4 15V14M16 4V4.5M16 4H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter"/>
                <path d="M12 4H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </div>
            <span className="font-cormorant text-2xl mt-1 font-medium text-white tracking-[0.2em] uppercase hidden sm:block transition-colors duration-500 group-hover:text-[#c8a96a]">JAY</span>
          </a>
        </div>

        {/* Center Pill */}
        <div className="hidden lg:flex items-center gap-8 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
          {['About', 'Philosophy', 'Journal', 'Projects', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`text-sm uppercase tracking-widest font-medium transition-all interactive px-4 py-1.5 rounded-full ${item === activeSection ? 'bg-white text-black' : 'text-white/80 hover:text-white'}`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Connect Button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full uppercase tracking-widest text-sm font-medium hover:bg-white/90 transition-colors interactive">
            Connect
          </a>
        </div>
      </nav>

      {/* Layer 1 - Base Portrait */}
      <div className="absolute inset-0 z-10 bg-black">
        <motion.div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-80"
          style={{ backgroundImage: `url(${BG_IMAGE_1})`, filter: 'brightness(0.55) contrast(1.1) grayscale(0.2)' }}
          animate={{ scale: imagesLoaded ? [1.1, 1] : 1.1 }}
          transition={{ duration: 15, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      </div>

      <ParticleBackground />

      {/* Layer 2 - Spotlight Reveal */}
      <div 
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          WebkitMaskImage: maskSvg,
          WebkitMaskPosition: 'calc(var(--x) - 260px) calc(var(--y) - 260px)',
          WebkitMaskRepeat: 'no-repeat',
          maskImage: maskSvg,
          maskPosition: 'calc(var(--x) - 260px) calc(var(--y) - 260px)',
          maskRepeat: 'no-repeat',
        }}
      >
        <motion.div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: `url(${BG_IMAGE_2})`, filter: 'brightness(0.9) contrast(1.2)' }}
          animate={{ scale: imagesLoaded ? [1.05, 1] : 1.05 }}
          transition={{ duration: 15, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-[#c8a96a]/15 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Layer 3 - Hero Heading */}
      <div className="absolute top-[20%] left-0 right-0 flex flex-col items-center text-center px-5 pointer-events-none z-50">
        <FadeIn delay={0.2} y={30}>
          <div className="flex flex-col items-center">
            <span className="font-cormorant italic text-white text-4xl sm:text-6xl md:text-7xl font-light mb-1 sm:mb-2 opacity-90 drop-shadow-lg">
              Becoming
            </span>
            <h1 className="font-bold uppercase tracking-[-0.05em] text-white text-5xl sm:text-7xl md:text-[8rem] leading-none drop-shadow-2xl">
              Fully Myself
            </h1>
          </div>
        </FadeIn>
        <FadeIn delay={0.6} y={20}>
          <p className="mt-8 text-white/80 uppercase tracking-[0.2em] text-xs md:text-sm font-light drop-shadow-md">
            Thinker • Builder • Romantic • Strategist
          </p>
        </FadeIn>
      </div>

      {/* Bottom Left Statement */}
      <div className="hidden md:block absolute bottom-12 left-10 z-50 max-w-[280px] pointer-events-none">
        <FadeIn delay={1.2} x={-20}>
          <div className="border-l-[1.5px] border-[#c8a96a]/60 pl-6 py-1">
            <p className="text-white/70 font-light leading-relaxed text-sm drop-shadow-md">
              "Most people meet a version of me.<br/>
              Few people meet the whole story."
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Bottom Right Statement */}
      <div className="absolute bottom-12 right-6 md:right-10 z-50 sm:max-w-md text-right sm:text-left flex justify-end sm:justify-start">
        <FadeIn delay={1.4} x={20}>
          <div className="flex flex-col items-end sm:items-start max-w-sm">
            <p className="text-white/80 font-light leading-relaxed text-xs sm:text-[15px] mb-6 md:mb-8 pointer-events-none drop-shadow-md text-right sm:text-left">
              "I’m building a life where my work creates impact, my love is felt, my word means something, and my legacy outlives me."
            </p>
            <a href="#about" className="bg-[#c8a96a] hover:bg-[#b18f50] text-[#0C0C0C] font-semibold rounded-full px-8 py-3.5 transition-all duration-300 shadow-[0_0_20px_rgba(200,169,106,0.2)] hover:shadow-[0_0_30px_rgba(200,169,106,0.4)] interactive tracking-wider text-sm uppercase">
              Enter My World
            </a>
          </div>
        </FadeIn>
      </div>
      
      {/* Film noise / grain */}
      <div className="absolute inset-0 z-40 opacity-[0.04] pointer-events-none mix-blend-overlay" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
      
      {/* Vignette */}
      <div className="absolute inset-0 z-40 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]"></div>
    </section>
  );
};
