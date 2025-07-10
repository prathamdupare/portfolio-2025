'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, FolderOpen, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const socialLinks = [
  { id: 'github', label: 'GitHub', icon: Github, url: 'https://github.com' },
  { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="fixed left-0 top-0 h-screen w-64 p-6 z-50" data-sidebar>
      <GlassCard variant="sidebar" className="h-full flex flex-col">
        {/* Profile Section */}
        <div className="p-6 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl font-bold text-white">
              P
            </div>
            <h2 className="text-xl font-semibold text-white dark:text-white light:text-gray-900 mb-1">Your Name</h2>
            <p className="text-sm text-white/70 dark:text-white/70 light:text-gray-600">Full Stack Developer</p>
          </motion.div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-6">
          <ul className="space-y-3">
            {navigationItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => onSectionChange(item.id)}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={cn(
                      'w-full flex items-center gap-3 px-4 py-3 rounded-xl',
                      'text-left transition-all duration-300 ease-out',
                      'hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-900/10 hover:translate-x-1',
                      isActive ? 'bg-white/15 dark:bg-white/15 light:bg-gray-900/15 text-white dark:text-white light:text-gray-900' : 'text-white/70 dark:text-white/70 light:text-gray-600',
                      'group'
                    )}
                  >
                    <Icon
                      size={20}
                      className={cn(
                        'transition-all duration-300',
                        isActive || isHovered ? 'text-blue-400' : 'text-white/70'
                      )}
                    />
                    <span className="font-medium">{item.label}</span>
                    {(isActive || isHovered) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-2 h-2 rounded-full bg-blue-400"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <div className="p-6 border-t border-white/10 dark:border-white/10 light:border-gray-200/30">
          <div className="flex justify-center mb-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Social Links */}
        <div className="p-6 border-t border-white/10 dark:border-white/10 light:border-gray-200/30">
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    'p-3 rounded-xl bg-white/5 border border-white/10',
                    'text-white/70 hover:text-white hover:bg-white/10',
                    'transition-all duration-300 ease-out',
                    'group'
                  )}
                >
                  <Icon size={20} />
                  <ExternalLink
                    size={12}
                    className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </GlassCard>
    </div>
  );
}; 