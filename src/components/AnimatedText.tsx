import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const elementRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const characters = text.split('');

  return (
    <p ref={elementRef} className={className}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);
        return (
          <Character 
            key={i} 
            char={char} 
            progress={scrollYProgress} 
            range={[start, end]} 
          />
        );
      })}
    </p>
  );
};

const Character = ({ char, progress, range }: { char: string, progress: any, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      {/* Invisible placeholder to maintain layout */}
      <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span className="absolute top-0 left-0" style={{ opacity }}>
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};
