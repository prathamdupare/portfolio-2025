'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, FolderOpen, Mail, Github, Linkedin, FileText, Youtube, Globe } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

interface DockProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const socialItems = [
  { id: 'github', label: 'GitHub', icon: Github, url: 'https://github.com/prathamdupare' },
  { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/pratham-dupare-a99b97247' },
  { id: 'youtube', label: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@prathammdupare' },
  { id: 'blog', label: 'Blog', icon: Globe, url: 'https://blog.fosspage.tech' },
  { id: 'resume', label: 'Resume', icon: FileText, url: 'https://drive.google.com/file/d/17hPGL-HJV_eGI7OOmgQn0pwr_cYjwVXt/view?usp=sharing' },
];

export const Dock: React.FC<DockProps> = ({ activeSection, onSectionChange }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      data-dock
    >
      <GlassCard variant="default" className="px-4 py-3">
        <div className="flex items-center gap-3">
          {/* Navigation Items */}
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            const isHovered = hoveredItem === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={cn(
                  'relative p-3 rounded-2xl transition-all duration-300',
                  'flex flex-col items-center justify-center',
                  'hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-900/10',
                  isActive && 'bg-white/15 dark:bg-white/15 light:bg-gray-900/15'
                )}
              >
                {/* Icon */}
                <Icon
                  size={24}
                  className={cn(
                    'transition-all duration-300',
                    isActive || isHovered
                      ? 'text-blue-400'
                      : 'text-white/70 dark:text-white/70 light:text-gray-600'
                  )}
                />

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="dockActiveIndicator"
                    className="absolute -bottom-1 w-1 h-1 rounded-full bg-blue-400"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? -50 : -40,
                    scale: isHovered ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute pointer-events-none"
                >
                  <div className="bg-black/80 dark:bg-black/80 light:bg-white/90 text-white dark:text-white light:text-gray-900 text-xs px-2 py-1 rounded-lg shadow-lg">
                    {item.label}
                  </div>
                </motion.div>
              </motion.button>
            );
          })}

          {/* Separator */}
          <div className="w-px h-8 bg-white/20 dark:bg-white/20 light:bg-gray-300/30 mx-1" />

          {/* Social Items */}
          {socialItems.map((item) => {
            const Icon = item.icon;
            const isHovered = hoveredItem === item.id;

            return (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                whileHover={{ scale: 1.15, y: -8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={cn(
                  'relative p-3 rounded-2xl transition-all duration-300',
                  'flex flex-col items-center justify-center',
                  'hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-900/10'
                )}
              >
                {/* Icon */}
                <Icon
                  size={24}
                  className={cn(
                    'transition-all duration-300',
                    isHovered
                      ? 'text-blue-400'
                      : 'text-white/70 dark:text-white/70 light:text-gray-600'
                  )}
                />

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{
                    opacity: isHovered ? 1 : 0,
                    y: isHovered ? -50 : -40,
                    scale: isHovered ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.2 }}
                  className="absolute pointer-events-none"
                >
                  <div className="bg-black/80 dark:bg-black/80 light:bg-white/90 text-white dark:text-white light:text-gray-900 text-xs px-2 py-1 rounded-lg shadow-lg">
                    {item.label}
                  </div>
                </motion.div>
              </motion.a>
            );
          })}

          {/* Separator */}
          <div className="w-px h-8 bg-white/20 dark:bg-white/20 light:bg-gray-300/30 mx-1" />

          {/* Theme Toggle */}
          <motion.div
            whileHover={{ scale: 1.15, y: -8 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="p-1"
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </GlassCard>
    </motion.div>
  );
}; 