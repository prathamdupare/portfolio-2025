'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { GlassCard } from './ui/GlassCard';
import { Mail, MapPin, Award, Phone, Globe, Github, Linkedin, FileText } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'Golang', 'Python', 'HTML/CSS', 'Bash',
    'Next.js', 'React.js', 'Express', 'React Native', 'Node.js', 'Prisma', 'Tailwind CSS',
    'PostgreSQL', 'MongoDB', 'Redis', 'Git', 'Docker', 'AWS', 'Azure', 'GCP'
  ];

  const achievements = [
    { year: '2024', title: 'YourStory Digital Innovation Hackathon - 2nd Place' },
    { year: '2024', title: '30DaysCoding Hackathon - Winner' },
    { year: '2023', title: 'IIT Madras - Diploma in Programming' },
  ];

  const experience = [
    {
      title: 'Software Development Engineer Intern',
      company: 'FoCDoT Technologies',
      period: 'Oct 2024 - Present',
      location: 'Bhopal'
    },
    {
      title: 'Web Development Intern',
      company: 'Cognizance, IIT Roorkee',
      period: 'Jun 2024 - Dec 2024',
      location: 'Roorkee'
    },
    {
      title: 'FullStack Web Developer Intern',
      company: 'EMBO ISPP',
      period: 'Jun 2023 - Jan 2024',
      location: 'Bhopal'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="w-[350px] flex-shrink-0 space-y-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <h1 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-400 dark:to-purple-400 light:from-blue-600 light:to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h1>
        <p className="text-white/70 dark:text-white/70 light:text-gray-700 text-lg leading-relaxed">
          Software developer passionate about creating modern web applications and browser extensions that solve real-world problems.
        </p>
      </motion.div>

      <div className="space-y-6 max-h-[calc(100vh-160px)] overflow-y-auto pr-6 pb-8 pl-2">
        {/* Personal Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <GlassCard variant="project" className="p-6">
            <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-4">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80 dark:text-white/80 light:text-gray-700">
                <Mail size={16} className="text-blue-400" />
                <span className="text-sm">prathmeshdupare@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 dark:text-white/80 light:text-gray-700">
                <MapPin size={16} className="text-blue-400" />
                <span className="text-sm">Bhopal, Madhya Pradesh</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 dark:text-white/80 light:text-gray-700">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">+91 7410183341</span>
              </div>
              <div className="flex items-center gap-3 text-white/80 dark:text-white/80 light:text-gray-700">
                <Globe size={16} className="text-blue-400" />
                <a href="https://blog.fosspage.tech" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400 transition-colors">
                  blog.fosspage.tech
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80 dark:text-white/80 light:text-gray-700">
                <Github size={16} className="text-blue-400" />
                <a href="https://github.com/prathamdupare" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400 transition-colors">
                  github.com/prathamdupare
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80 dark:text-white/80 light:text-gray-700">
                <Linkedin size={16} className="text-blue-400" />
                <a href="https://linkedin.com/in/pratham-dupare-a99b97247" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400 transition-colors">
                  linkedin.com/in/pratham-dupare-a99b97247
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/80 dark:text-white/80 light:text-gray-700">
                <FileText size={16} className="text-blue-400" />
                <a href="https://drive.google.com/file/d/1PK9SgnMZb09P4Qskv8wIhFbyQYM3hpsQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-blue-400 transition-colors">
                  View Resume
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <GlassCard variant="project" className="p-6">
            <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-4">
              Education
            </h3>
            <div className="space-y-3">
              <div className="text-white/80 dark:text-white/80 light:text-gray-700">
                <div className="text-sm font-medium text-white dark:text-white light:text-gray-900">
                  BS-MS Mathematics
                </div>
                <div className="text-xs text-white/60 dark:text-white/60 light:text-gray-500">
                  IISER Bhopal • Aug 2019 - May 2025
                </div>
              </div>
              <div className="text-white/80 dark:text-white/80 light:text-gray-700">
                <div className="text-sm font-medium text-white dark:text-white light:text-gray-900">
                  Diploma in Programming
                </div>
                <div className="text-xs text-white/60 dark:text-white/60 light:text-gray-500">
                  IIT Madras • Sept 2023 - 2025
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <GlassCard variant="project" className="p-6">
            <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-4">
              Work Experience
            </h3>
            <div className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-4">
                  <div className="text-sm font-medium text-white dark:text-white light:text-gray-900">
                    {exp.title}
                  </div>
                  <div className="text-xs text-blue-400 font-medium">
                    {exp.company}
                  </div>
                  <div className="text-xs text-white/60 dark:text-white/60 light:text-gray-500">
                    {exp.period} • {exp.location}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
        >
          <GlassCard variant="project" className="p-6">
            <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-4">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.3 + index * 0.02 }}
                >
                  <Badge
                    variant="secondary"
                    className="text-xs bg-white/10 dark:bg-white/10 light:bg-gray-900/10 text-white/80 dark:text-white/80 light:text-gray-700 border-white/20 dark:border-white/20 light:border-gray-300/30 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-gray-900/20"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <GlassCard variant="project" className="p-6">
            <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-4">
              Achievements
            </h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Award size={16} className="text-purple-400" />
                  <div>
                    <span className="text-sm font-medium text-white dark:text-white light:text-gray-900">
                      {achievement.title}
                    </span>
                    <span className="text-xs text-white/60 dark:text-white/60 light:text-gray-500 ml-2">
                      {achievement.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <GlassCard variant="project" className="p-6">
            <h3 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-4">
              Background
            </h3>
            <p className="text-white/80 dark:text-white/80 light:text-gray-700 text-sm leading-relaxed">
              I&apos;m a passionate software developer currently pursuing BS-MS Mathematics at IISER Bhopal 
              and a Diploma in Programming from IIT Madras. I specialize in modern web technologies, 
              browser extensions, and full-stack development. I love building applications that solve 
              real-world problems and have a keen interest in creating productive tools and educational content.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </motion.div>
  );
}; 