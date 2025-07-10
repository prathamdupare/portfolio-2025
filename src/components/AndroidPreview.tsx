'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wifi, 
  Battery, 
  Signal, 
  Phone, 
  Cloud,
  Mic,
  Moon,
  Mail,
  Linkedin,
  Camera,
  Youtube,
} from 'lucide-react';

const AppIcon: React.FC<{ icon: React.ReactNode; name?: string; className?: string; href?: string }> = ({ icon, name, className, href }) => {
  const Component = href ? 'a' : 'div';
  
  const props = {
    className: `flex flex-col items-center gap-1.5 w-14 group ${className || ''}`,
    ...(href && { href, target: '_blank', rel: 'noopener noreferrer' }),
  };

  return (
    <Component {...props}>
      <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center shadow-md backdrop-blur-sm group-hover:bg-black/30 transition-colors duration-200">
        {icon}
      </div>
      {name && <span className="text-gray-300 dark:text-gray-300 light:text-gray-600 text-[11px] font-light truncate w-full text-center">{name}</span>}
    </Component>
  );
};

export const AndroidPreview: React.FC = () => {
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      window.open('https://google.com', '_blank');
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-b from-slate-700 to-slate-900">
      
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-[5%] flex items-center justify-between px-[6%] text-white dark:text-white light:text-gray-800 font-medium z-50">
        <div className="flex items-center gap-1.5">
          <span className="font-light text-xs text-gray-200 dark:text-gray-200 light:text-gray-600">2:06</span>
        </div>
        <div className="flex items-center gap-2 text-gray-200 dark:text-gray-200 light:text-gray-600">
          <Moon size={14} className="opacity-80" />
          <Wifi size={14} />
          <Signal size={14} />
          <div className="flex items-center gap-1">
            <Battery size={16} />
            <span className="text-xs">78%</span>
          </div>
        </div>
      </div>

      {/* Date and Weather */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="absolute top-[8%] left-[6%] text-gray-200 dark:text-gray-200 light:text-gray-700"
      >
        <div className="text-xl font-light mb-1">Wed, Oct 23</div>
        <div className="flex items-center gap-1.5">
          <Cloud size={16} className="text-gray-300/90 dark:text-gray-300/90 light:text-gray-600/90" />
          <span className="text-sm font-light">84°F</span>
        </div>
      </motion.div>

      {/* App Grid */}
      <div className="absolute bottom-[18%] left-[6%] right-[6%] flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex justify-center gap-x-6"
        >
          <AppIcon icon={<Phone size={22} className="text-teal-200" />} name="Call" />
          <AppIcon href="https://www.linkedin.com/in/pratham-dupare-a99b97247/" icon={<Linkedin size={22} className="text-teal-200" />} name="LinkedIn" />
          <AppIcon href="https://x.com/prathammdupare" icon={<div className="text-teal-200 text-xl font-bold">𝕏</div>} name="X" />
          <AppIcon href="https://www.youtube.com/@prathammdupare" icon={<Youtube size={22} className="text-teal-200" />} name="YouTube" />
          <AppIcon href="mailto:prathmeshdupare@gmail.com" icon={<Mail size={22} className="text-teal-200" />} name="Gmail" />
        </motion.div>
      </div>

      {/* Google Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="absolute bottom-[5%] left-[6%] right-[6%]"
      >
        <div className="bg-slate-800/90 backdrop-blur-lg rounded-full px-4 py-2.5 flex items-center gap-3 shadow-xl border-white/5">
          <div className="w-6 h-6 flex items-center justify-center">
             <span className="text-teal-200 text-xl font-bold">G</span>
          </div>
          <input
            type="text"
            placeholder="Who is Pratham?"
            onKeyDown={handleSearch}
            className="flex-1 bg-transparent text-gray-200 dark:text-gray-200 light:text-gray-700 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-gray-500 text-sm outline-none border-none h-6 flex items-center"
          />
          <Mic size={20} className="text-teal-200" />
          <Camera size={20} className="text-teal-200" />
        </div>
      </motion.div>

      {/* Bottom Navigation Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-2.5 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-28 h-1 bg-white/40 rounded-full"></div>
      </motion.div>

    </div>
  );
};