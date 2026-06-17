import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor = () => {
  const [hoverType, setHoverType] = useState<'none' | 'link' | 'input'>('none');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if trying to hover over clickable elements
      if (target.tagName.toLowerCase() === 'input' || target.tagName.toLowerCase() === 'textarea') {
        setHoverType('input');
      } else if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setHoverType('link');
      } else {
        setHoverType('none');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  const variants = {
    none: {
      scale: 0.5,
      backgroundColor: "white",
      border: "0px solid white",
    },
    link: {
      scale: 1.8,
      backgroundColor: "transparent",
      border: "1px solid white",
    },
    input: {
      scale: 1.5,
      backgroundColor: "transparent",
      border: "1px dashed white",
      borderRadius: "8px",
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference hidden sm:flex items-center justify-center"
      style={{
        x: smoothX,
        y: smoothY,
        opacity: isVisible ? 1 : 0,
      }}
      animate={variants[hoverType]}
      transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
    />
  );
};
