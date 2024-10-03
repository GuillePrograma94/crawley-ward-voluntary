import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem('theme');
      return theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    root.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
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
    <div
      className="w-16 h-8 flex items-center bg-base-300 rounded-full p-1 cursor-pointer"
      onClick={toggleDarkMode}
    >
      <div
        className={`flex justify-center items-center bg-base-100 w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${
          isDarkMode ? 'translate-x-8' : ''
        }`}
      >
        {isDarkMode ? (
          <Moon size={16} className="text-base-content" />
        ) : (
          <Sun size={16} className="text-base-content" />
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;