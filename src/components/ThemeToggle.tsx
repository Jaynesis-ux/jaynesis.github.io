import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initial check
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
      // Let's ensure default is dark as requested by setting the class if neither exists
      if (!document.documentElement.classList.contains('light')) {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      }
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-text-primary/20 hover:bg-text-primary/10 transition-colors interactive flex items-center justify-center shrink-0"
      aria-label="Toggle Theme"
      title="Toggle Theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};
