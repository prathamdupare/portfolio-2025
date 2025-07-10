import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'ref'> {
  children: React.ReactNode;
  hover?: boolean;
  pressed?: boolean;
  variant?: 'default' | 'sidebar' | 'preview' | 'project';
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, children, hover = false, pressed = false, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-white/5 dark:bg-white/5 border-white/10 dark:border-white/10 light:bg-white/40 light:border-white/30',
      sidebar: 'bg-black/20 dark:bg-black/20 border-white/5 dark:border-white/5 light:bg-white/30 light:border-white/20 light:shadow-2xl light:shadow-blue-500/10',
      preview: 'bg-black/30 dark:bg-black/30 border-white/10 dark:border-white/10 light:bg-white/40 light:border-white/30 light:shadow-2xl light:shadow-blue-500/20',
      project: 'bg-white/3 dark:bg-white/3 border-white/8 dark:border-white/8 hover:bg-white/8 dark:hover:bg-white/8 light:bg-white/20 light:border-white/20 light:hover:bg-white/30 light:shadow-lg light:shadow-blue-500/10 light:hover:shadow-blue-500/20',
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { scale: 1.01, y: -1 } : undefined}
        whileTap={pressed ? { scale: 0.98 } : undefined}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          // Base glassmorphism styles
          'backdrop-blur-xl backdrop-saturate-150',
          'border border-solid rounded-2xl',
          'shadow-lg shadow-black/20',
          
          // Variant-specific styles
          variants[variant],
          
          // Interactive states
          hover && 'transition-all duration-300 ease-out',
          pressed && 'shadow-inner shadow-black/30',
          
          className
        )}
        style={{
          backdropFilter: variant === 'sidebar' || variant === 'preview' 
            ? 'blur(40px) saturate(180%)' 
            : 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: variant === 'sidebar' || variant === 'preview' 
            ? 'blur(40px) saturate(180%)' 
            : 'blur(20px) saturate(180%)',
        }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export { GlassCard }; 