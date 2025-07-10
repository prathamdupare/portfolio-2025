'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from './ui/GlassCard';
import { ExternalLink, Github, Pin, PinOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProjectCardProps } from '@/types/project';

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isHovered,
  isPinned,
  onHover,
  onPin,
}) => {
  return (
    <motion.div
      data-project-card
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onMouseEnter={() => onHover(project.id)}
      onMouseLeave={() => onHover(null)}
      onClick={() => onPin(project.id)}
      className="cursor-pointer"
    >
      <GlassCard
        variant="project"
        hover
        className={cn(
          'p-6 transition-all duration-300 ease-out',
          (isHovered || isPinned) && 'ring-2 ring-blue-400/50 bg-white/12',
          isPinned && 'ring-blue-400 shadow-lg shadow-blue-400/20'
        )}
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">{project.title}</h3>
              {isPinned && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Pin size={16} className="text-blue-400" />
                </motion.div>
              )}
            </div>
            <p className="text-sm text-white/70 dark:text-white/70 light:text-gray-600 mb-3 line-clamp-2">
              {project.description}
            </p>
          </div>
          
          <div className="flex items-center gap-2 ml-4">
            {project.featured && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-2 h-2 rounded-full bg-yellow-400 shadow-sm shadow-yellow-400/50"
              />
            )}
            <div className={cn(
              'w-3 h-3 rounded-full',
              project.category === 'web' && 'bg-green-400',
              project.category === 'mobile' && 'bg-blue-400',
              project.category === 'desktop' && 'bg-purple-400'
            )} />
          </div>
        </div>



        {/* Quick Actions */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  'p-2 rounded-lg bg-white/5 border border-white/10',
                  'text-white/70 hover:text-white hover:bg-white/10',
                  'transition-all duration-200'
                )}
              >
                <ExternalLink size={14} />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  'p-2 rounded-lg bg-white/5 border border-white/10',
                  'text-white/70 hover:text-white hover:bg-white/10',
                  'transition-all duration-200'
                )}
              >
                <Github size={14} />
              </motion.a>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered || isPinned ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-white/50"
          >
            {isPinned ? 'Pinned' : 'Click to pin'}
          </motion.div>
        </div>
      </GlassCard>
    </motion.div>
  );
}; 