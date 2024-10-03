import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setIsDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
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