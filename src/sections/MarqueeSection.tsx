import React, { useEffect, useState, useRef } from 'react';

const words = [
  "PHILOSOPHER", "STRATEGIST", "ROMANTIC", "OBSERVER", "JESTER", "LEADER", "BUILDER", "THINKER"
];
const textRow = [...words, ...words, ...words, ...words].join(" • ");

export const MarqueeSection = () => {
  const [scrollInfo, setScrollInfo] = useState({ scrollY: 0, sectionTop: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      setScrollInfo(prev => ({ ...prev, sectionTop: sectionRef.current!.offsetTop }));
    }

    const handleScroll = () => {
      setScrollInfo(prev => ({ ...prev, scrollY: window.scrollY }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once to get initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const offset = typeof window !== 'undefined' ? (scrollInfo.scrollY - scrollInfo.sectionTop + window.innerHeight) * 0.3 : 0;
  const row1Transform = `translateX(${offset - 400}px)`;
  const row2Transform = `translateX(${-(offset - 400)}px)`;

  return (
    <section ref={sectionRef} className="bg-bg-primary py-20 overflow-hidden relative border-y border-border-subtle">
      <div className="flex flex-col gap-6 opacity-30">
        {/* Row 1 */}
        <div 
          className="whitespace-nowrap font-black text-6xl md:text-8xl text-transparent tracking-widest"
          style={{ 
            transform: row1Transform,
            willChange: 'transform',
            WebkitTextStroke: '2px var(--text-primary)'
          }}
        >
          {textRow}
        </div>
        {/* Row 2 */}
        <div 
          className="whitespace-nowrap font-black text-6xl md:text-8xl text-transparent tracking-widest"
          style={{ 
            transform: row2Transform,
            willChange: 'transform',
            WebkitTextStroke: '2px var(--text-primary)'
          }}
        >
          {textRow}
        </div>
      </div>
    </section>
  );
};
