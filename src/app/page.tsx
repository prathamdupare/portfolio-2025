'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dock } from '@/components/Dock';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectPreview } from '@/components/ProjectPreview';
import { useProjectInteraction } from '@/hooks/useProjectInteraction';
import { projects } from '@/data/projects';
import type { Project } from '@/types/project';
import { cn } from '@/lib/utils';

export default function Home() {
  const { state, activeProject, currentSection, handleHover, handlePin, handleClose, handleSectionChange } = useProjectInteraction();

  const activeProjectData = activeProject ? projects.find(p => p.id === activeProject) || null : null;

  // Dummy project to ensure ProjectPreview is always visible in the About section
  const aboutDummyProject: Project = {
    id: 'about-showcase',
    title: 'Portfolio Showcase',
    description: 'This is a showcase of my portfolio.',
    longDescription: 'Exploring my journey, skills, and projects.',
    category: 'mobile',
    techStack: [],
    image: '',
    featured: false,
  };

  const projectForPreview = currentSection === 'about' ? aboutDummyProject : activeProjectData;
  const isPreviewVisible = state.isPreviewVisible || currentSection === 'about';

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 light:from-transparent light:via-transparent light:to-transparent pointer-events-none" />
      
      {/* Main Content */}
      <div className="min-h-screen">
        <div className={cn(
          "flex gap-8 p-8 h-screen",
          currentSection === 'about' ? "justify-center" : ""
        )}>
          {/* Content Area - only for Projects */}
          {currentSection === 'projects' && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="w-[350px] flex-shrink-0 space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <h1 className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-400 dark:to-purple-400 light:from-blue-600 light:to-purple-600 bg-clip-text text-transparent">
                    Featured Projects
                  </span>
                </h1>
                <p className="text-white/70 dark:text-white/70 light:text-gray-700 text-lg leading-relaxed">
                  Explore my latest work in web development, mobile applications, and design systems.
                  Hover over projects to preview, click to pin for detailed view.
                </p>
              </motion.div>

              <div 
                className="space-y-6 max-h-[calc(100vh-160px)] overflow-y-auto pr-6 pb-8 pl-2"
              >
                <AnimatePresence>
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <ProjectCard
                        project={project}
                        isHovered={state.hoveredProject === project.id}
                        isPinned={state.pinnedProject === project.id}
                        onHover={handleHover}
                        onPin={handlePin}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* Preview Panel Area - full width for about, constrained for projects */}
          <div className={cn(
            "min-w-0 relative",
            currentSection === 'about' ? "flex-1 max-w-none" : "flex-1"
          )}>
            <AnimatePresence>
              {isPreviewVisible && projectForPreview && (
                <ProjectPreview
                  project={projectForPreview}
                  isVisible={isPreviewVisible}
                  isPinned={!!state.pinnedProject}
                  onClose={handleClose}
                  currentSection={currentSection}
                  onSectionChange={handleSectionChange}
                />
              )}
            </AnimatePresence>
            
            {/* Placeholder when no project is selected */}
            {!isPreviewVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="text-center text-white/40 dark:text-white/40 light:text-gray-400">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.4, 0.6, 0.4] 
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="mb-4"
                  >
                    <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 dark:border-white/10 light:border-gray-300/30 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-lg bg-white/10 dark:bg-white/10 light:bg-gray-900/10" />
                    </div>
                  </motion.div>
                  <p className="text-lg font-medium mb-2">Project Preview</p>
                  <p className="text-sm text-white/30 dark:text-white/30 light:text-gray-500">
                    Hover over a project to see preview
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Dock */}
      <Dock activeSection={currentSection} onSectionChange={handleSectionChange} />
    </div>
  );
}
