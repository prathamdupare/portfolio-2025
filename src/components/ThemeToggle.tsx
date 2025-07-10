'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light' as const, icon: Sun, label: 'Light' },
    { value: 'dark' as const, icon: Moon, label: 'Dark' },
    { value: 'system' as const, icon: Monitor, label: 'System' },
  ];

  return (
    <div className="relative bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10 rounded-xl p-1 backdrop-blur-xl">
      <div className="flex">
        {themes.map(({ value, icon: Icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={cn(
              'relative flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200',
              'hover:bg-white/10 dark:hover:bg-white/10',
              theme === value ? 'text-blue-500' : 'text-white/60 dark:text-white/60'
            )}
            title={label}
          >
            {theme === value && (
              <motion.div
                layoutId="activeTheme"
                className="absolute inset-0 bg-blue-500/20 border border-blue-500/30 rounded-lg"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <Icon size={16} className="relative z-10" />
          </button>
        ))}
      </div>
    </div>
  );
}; 