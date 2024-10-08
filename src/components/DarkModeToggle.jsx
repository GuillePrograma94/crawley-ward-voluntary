import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      return theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Track if it's the initial mount
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const root = document.documentElement;
    const newTheme = isDarkMode ? 'dark' : 'light';
    root.setAttribute('data-theme', newTheme);
    root.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', newTheme);

    // Just dispatch the event; no need to reload the page
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: newTheme }));
    
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      setIsDarkMode(mediaQuery.matches);
    };
    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <div className="w-16 h-8 flex items-center bg-base-300 rounded-full p-1 cursor-pointer" onClick={toggleDarkMode}>
      <div className={`flex justify-center items-center bg-base-100 w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-8' : ''}`}>
        {isDarkMode ? (
          <Moon size={16} className="text-base-content" />
        ) : (
          <Sun size={16} className="text-yellow-400" />
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;