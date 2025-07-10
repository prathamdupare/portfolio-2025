'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { GlassCard } from './ui/GlassCard';
import { AndroidPreview } from './AndroidPreview';
import { ExternalLink, Github, X, Monitor, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PreviewPanelProps, ProjectViewType, Project } from '@/types/project';
import Image from 'next/image';

interface ProjectPreviewProps extends PreviewPanelProps {
  currentSection?: string;
  onSectionChange?: (section: string) => void;
}

interface ProjectImagePreviewProps {
  project: Project;
  viewType: ProjectViewType;
}

const ProjectImagePreview: React.FC<ProjectImagePreviewProps> = ({ project, viewType }) => {
  // Use the project's actual image property
  const imageSrc = project.image;
  const isDesktop = viewType === 'desktop';

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
      {/* Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={`${project.title} Preview`}
          fill
          className="object-cover object-center"
          sizes={isDesktop ? "(max-width: 800px) 100vw, 800px" : "(max-width: 320px) 100vw, 320px"}
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 dark:from-black/60 dark:via-transparent dark:to-black/20 light:from-black/70 light:via-transparent light:to-black/30" />
      </div>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="text-white dark:text-white light:text-white space-y-2">
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm text-white/80 dark:text-white/80 light:text-white/90 line-clamp-2">{project.description}</p>
          {project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {project.techStack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-white/20 dark:bg-white/20 light:bg-black/20 backdrop-blur-sm text-xs rounded-full text-white/90 dark:text-white/90 light:text-white"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 3 && (
                <span className="px-2 py-1 bg-white/20 dark:bg-white/20 light:bg-black/20 backdrop-blur-sm text-xs rounded-full text-white/90 dark:text-white/90 light:text-white">
                  +{project.techStack.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Loading shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const AboutInfo: React.FC<{ onSectionChange?: (section: string) => void }> = ({ onSectionChange }) => (
  <div className="w-full h-[calc(100vh-120px)] flex flex-col">
    {/* Header - Fixed */}
    <div className="flex-shrink-0 mb-4">
      <div className="flex items-center gap-4 mb-2">
        <h1 className="text-4xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Pratham Dupare
          </span>
        </h1>
        <a
          href="https://drive.google.com/file/d/17hPGL-HJV_eGI7OOmgQn0pwr_cYjwVXt/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 hover:text-blue-300 rounded-full text-sm font-medium transition-all duration-200 border border-blue-400/30 hover:border-blue-400/50"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Resume
        </a>
      </div>
      <p className="text-lg text-white/80 dark:text-white/80 light:text-gray-700">
        Software Developer & Problem Solver 👨‍💻
      </p>
    </div>

    {/* Scrollable Content with improved visibility */}
    <div 
      className="flex-1 overflow-y-scroll pr-3 mr-1 space-y-5"
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)'
      }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 6px;
        }
        div::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        div::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>

      {/* Professional Experience - Priority Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="space-y-3"
      >
        <h3 className="text-xl font-semibold text-white dark:text-white light:text-gray-900 border-b border-white/20 pb-1">
          Professional Experience
        </h3>
        
        <div className="space-y-3">
          <div className="bg-white/5 dark:bg-white/5 light:bg-gray-900/5 rounded-lg p-3 border-l-4 border-blue-400">
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-semibold text-white dark:text-white light:text-gray-900">
                Software Development Engineer Intern
              </h4>
              <div className="flex justify-between items-center">
                <p className="text-blue-400 font-medium text-sm">FoCDoT Technologies, Bhopal</p>
                <span className="text-xs text-white/60 dark:text-white/60 light:text-gray-500">
                  Oct 2024 - Present
                </span>
              </div>
            </div>
            <ul className="text-xs text-white/80 dark:text-white/80 light:text-gray-700 mt-2 space-y-0.5">
              <li>• Browser extensions with Plasmo framework and React</li>
              <li>• Production apps with Next.js, Python/FastAPI, Docker & AWS</li>
              <li>• OpenAI and Claude APIs integration with testing</li>
            </ul>
          </div>

          <div className="bg-white/5 dark:bg-white/5 light:bg-gray-900/5 rounded-lg p-3 border-l-4 border-green-400">
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-semibold text-white dark:text-white light:text-gray-900">
                Web Development Intern
              </h4>
              <div className="flex justify-between items-center">
                <p className="text-green-400 font-medium text-sm">Cognizance, IIT Roorkee</p>
                <span className="text-xs text-white/60 dark:text-white/60 light:text-gray-500">
                  Jun 2024 - Dec 2024
                </span>
              </div>
            </div>
            <p className="text-xs text-white/80 dark:text-white/80 light:text-gray-700 mt-1">
              Collaborated with teams on modern web applications
            </p>
          </div>

          <div className="bg-white/5 dark:bg-white/5 light:bg-gray-900/5 rounded-lg p-3 border-l-4 border-purple-400">
            <div className="flex flex-col gap-1">
              <h4 className="text-base font-semibold text-white dark:text-white light:text-gray-900">
                FullStack Web Developer Intern
              </h4>
              <div className="flex justify-between items-center">
                <p className="text-purple-400 font-medium text-sm">EMBO ISPP, Bhopal</p>
                <span className="text-xs text-white/60 dark:text-white/60 light:text-gray-500">
                  Jun 2023 - Jan 2024
                </span>
              </div>
            </div>
            <p className="text-xs text-white/80 dark:text-white/80 light:text-gray-700 mt-1">
              ReactJS website with schedule management and payment integration
            </p>
          </div>
        </div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="space-y-2"
      >
        <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">Education</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-white dark:text-white light:text-gray-900">BS-MS Mathematics</p>
              <p className="text-xs text-blue-400">IISER Bhopal</p>
            </div>
            <span className="text-xs text-white/60 dark:text-white/60 light:text-gray-500">2019 - 2025</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-white dark:text-white light:text-gray-900">Diploma in Programming</p>
              <p className="text-xs text-blue-400">IIT Madras</p>
            </div>
            <span className="text-xs text-white/60 dark:text-white/60 light:text-gray-500">2023 - 2025</span>
          </div>
        </div>
      </motion.div>

      {/* Core Technologies - Now More Visible */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="space-y-2"
      >
        <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">Core Technologies</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-white/5 px-2 py-1 rounded text-white/90 dark:text-white/90 light:text-gray-700">React & Next.js</div>
          <div className="bg-white/5 px-2 py-1 rounded text-white/90 dark:text-white/90 light:text-gray-700">React Native</div>
          <div className="bg-white/5 px-2 py-1 rounded text-white/90 dark:text-white/90 light:text-gray-700">TypeScript</div>
          <div className="bg-white/5 px-2 py-1 rounded text-white/90 dark:text-white/90 light:text-gray-700">Node.js & Python</div>
          <div className="bg-white/5 px-2 py-1 rounded text-white/90 dark:text-white/90 light:text-gray-700">PostgreSQL & MongoDB</div>
          <div className="bg-white/5 px-2 py-1 rounded text-white/90 dark:text-white/90 light:text-gray-700">Docker & AWS</div>
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.35 }}
        className="space-y-2"
      >
        <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">Recent Achievements</h3>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-yellow-400">🥈</span>
            <span className="text-white/80 dark:text-white/80 light:text-gray-700">2nd Place - YourStory Digital Innovation Hackathon 2024</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-yellow-400">🏆</span>
            <span className="text-white/80 dark:text-white/80 light:text-gray-700">Winner - 30DaysCoding Hackathon</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-red-400">📺</span>
            <span className="text-white/80 dark:text-white/80 light:text-gray-700">Content Creator - YouTube Channel</span>
          </div>
        </div>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="space-y-2 pb-6"
      >
        <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">Get In Touch</h3>
        <div className="grid grid-cols-1 gap-1 text-sm">
          <a href="mailto:prathmeshdupare@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
            prathmeshdupare@gmail.com
          </a>
          <a href="https://github.com/prathamdupare" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
            github.com/prathamdupare
          </a>
          <a href="https://blog.fosspage.tech" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
            blog.fosspage.tech
          </a>
          <a href="https://drive.google.com/file/d/17hPGL-HJV_eGI7OOmgQn0pwr_cYjwVXt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
            📄 Resume
          </a>
        </div>
      </motion.div>
    </div>

    {/* Navigation Button - Fixed at bottom */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.45 }}
      className="flex-shrink-0 pt-3 border-t border-white/10"
    >
      <Button
        onClick={() => onSectionChange?.('projects')}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white dark:text-white light:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
      >
        <span className="mr-2">🚀</span>
        View My Projects
      </Button>
    </motion.div>
  </div>
);

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  project,
  isVisible,
  isPinned,
  onClose,
  currentSection = 'projects',
  onSectionChange,
}) => {
  const [viewType, setViewType] = useState<ProjectViewType>('desktop');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (project) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 300);
      return () => clearTimeout(timer);
    }
  }, [project]);

  useEffect(() => {
    if (project) {
      setViewType(project.category === 'mobile' ? 'mobile' : 'desktop');
    }
  }, [project]);

  useEffect(() => {
    if (currentSection === 'about') {
      setViewType('mobile');
    }
  }, [currentSection]);

  const getFrameDimensions = (type: ProjectViewType) => {
    if (currentSection === 'about') {
      return { width: 400, height: 800, borderRadius: 28, aspectRatio: '9/19.5' };
    }
    if (type === 'mobile') {
      return { width: 320, height: 660, borderRadius: 24, aspectRatio: '9/19.5' };
    }
    return { width: 800, height: 450, borderRadius: 16, aspectRatio: '16/9' };
  };

  if (!isVisible || !project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 z-40"
    >
      <GlassCard variant="preview" className="h-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-semibold text-white dark:text-white light:text-gray-900">
              {project.title}
            </h2>
            {currentSection === 'projects' && (
              <div className="flex gap-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setViewType('desktop')} 
                  className={cn('p-2 h-auto', viewType === 'desktop' ? 'bg-white/20 text-white dark:text-white light:text-gray-900' : 'text-white/60 dark:text-white/60 light:text-gray-600')}
                >
                  <Monitor size={14} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setViewType('mobile')} 
                  className={cn('p-2 h-auto', viewType === 'mobile' ? 'bg-white/20 text-white dark:text-white light:text-gray-900' : 'text-white/60 dark:text-white/60 light:text-gray-600')}
                >
                  <Smartphone size={14} />
                </Button>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {isPinned && (
              <span className="text-xs text-blue-400 bg-blue-400/20 px-2 py-1 rounded-full">
                Pinned
              </span>
            )}
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose} 
              className="p-2 h-auto text-white/60 dark:text-white/60 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-900/10"
            >
              <X size={14} />
            </Button>
          </div>
        </div>

        {/* Main Content with unified layout structure */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* Left Content - About Info or Empty Space */}
          <div className={cn(
            "transition-all duration-500 ease-in-out",
            currentSection === 'about' ? "flex-1 p-8 pr-6 overflow-visible" : "w-0 overflow-hidden"
          )}>
            {currentSection === 'about' && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-full"
              >
                <AboutInfo onSectionChange={onSectionChange} />
              </motion.div>
            )}
          </div>

          {/* Center Preview Frame - Always in the same position */}
          <div className={cn(
            "flex items-center justify-center relative transition-all duration-500 ease-in-out",
            currentSection === 'about' 
              ? "w-[450px] flex-shrink-0 p-6" 
              : "flex-1 p-4"
          )}>
            <motion.div
              layoutId="preview-frame"
              animate={{
                width: getFrameDimensions(viewType).width,
                height: getFrameDimensions(viewType).height,
                borderRadius: getFrameDimensions(viewType).borderRadius,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 35,
                duration: 0.5
              }}
              className="relative bg-gradient-to-br from-gray-900 to-black border border-white/20 shadow-2xl overflow-hidden"
              style={{ 
                aspectRatio: getFrameDimensions(viewType).aspectRatio,
                maxHeight: 'calc(100vh - 200px)'
              }}
            >
              {viewType === 'mobile' && (
                <div className="absolute inset-x-0 top-0 h-8 bg-black flex items-center justify-center">
                  <div className="w-12 h-1 bg-white/30 rounded-full" />
                </div>
              )}
              <div className={cn('relative w-full h-full flex items-center justify-center', viewType === 'mobile' && 'pt-8')}>
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div 
                      key="loading" 
                      initial={{ opacity: 0 }} 
                      animate={{ opacity: 1 }} 
                      exit={{ opacity: 0 }} 
                      className="text-white/50 dark:text-white/50 light:text-gray-500 text-sm"
                    >
                      Loading preview...
                    </motion.div>
                  ) : (
                    <motion.div
                      key={`${project.id}-${viewType}-${currentSection}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full"
                    >
                      {currentSection === 'about' && viewType === 'mobile' ? (
                        <AndroidPreview />
                      ) : (
                        <ProjectImagePreview 
                          project={project} 
                          viewType={viewType}
                        />
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Right Panel - Project Details or Empty Space */}
          <div className={cn(
            "transition-all duration-500 ease-in-out",
            currentSection === 'projects' ? "w-80 relative overflow-visible" : "w-0 overflow-hidden"
          )}>
            {currentSection === 'projects' && (
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 border-l border-white/10 p-4 flex flex-col overflow-y-auto"
              >
                                  <div className="space-y-4">
                    <p className="text-white/80 dark:text-white/80 light:text-gray-700 text-sm leading-relaxed">
                      {project.longDescription}
                    </p>
                    <div>
                      <h3 className="text-white dark:text-white light:text-gray-900 font-medium mb-2 text-sm">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs bg-white/10 dark:bg-white/10 light:bg-gray-900/10 text-white/80 dark:text-white/80 light:text-gray-700 border-white/20 dark:border-white/20 light:border-gray-300/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  <div className="flex flex-col gap-2 pt-2">
                                          {project.liveUrl && (
                        <Button variant="default" size="sm" asChild className="bg-blue-500 hover:bg-blue-600 text-white dark:text-white light:text-white w-full">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={14} className="mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild className="border-white/20 dark:border-white/20 light:border-gray-300/30 text-white dark:text-white light:text-gray-900 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-gray-900/10 w-full">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github size={14} className="mr-2" />
                            Source Code
                          </a>
                        </Button>
                      )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}; 