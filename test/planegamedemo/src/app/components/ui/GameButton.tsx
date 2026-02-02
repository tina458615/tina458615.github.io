import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GameButtonProps {
  onClick: () => void;
  imageSrc: string;
  alt: string;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export default function GameButton({ 
  onClick, 
  imageSrc, 
  alt, 
  className = '', 
  disabled = false,
  children 
}: GameButtonProps) {
  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`relative ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'} ${className}`}
      disabled={disabled}
    >
      <img alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imageSrc} />
      {children}
    </motion.button>
  );
}
