import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../stores/useThemeStore';

export function Header() {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Task Tracker</h1>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
      >
        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  );
}