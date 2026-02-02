import { motion, AnimatePresence } from 'motion/react';
import { ReactNode } from 'react';

interface SceneTransitionProps {
  children: ReactNode;
  className?: string;
}

export default function SceneTransition({ children, className = '' }: SceneTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
