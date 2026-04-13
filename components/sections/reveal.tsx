'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  width?: 'fit-content' | 'full';
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

/**
 * Option 16A — The Apple Drift
 * Elements have a 40px Y-drift and a 200ms blur-to-clear transition.
 * Easing: cubic-bezier(0.16, 1, 0.3, 1) (The "Expo" out).
 */
export function Reveal({
  children,
  delay = 0,
  width = 'full',
  direction = 'up',
  distance = 40,
}: RevealProps) {
  const getVariants = () => {
    const initial = {
      opacity: 0,
      filter: 'blur(10px)', // Option 16A blur
      y: direction === 'up' ? distance : direction === 'down' ? -distance : 0,
      x: direction === 'left' ? distance : direction === 'right' ? -distance : 0,
    };

    return {
      hidden: initial,
      visible: {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        x: 0,
      },
    };
  };

  return (
    <div className={width === 'full' ? 'w-full' : 'w-fit'}>
      <motion.div
        variants={getVariants()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // Apple Expo-out easing
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
