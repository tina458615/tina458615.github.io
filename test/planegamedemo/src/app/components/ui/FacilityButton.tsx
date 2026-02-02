import { motion } from 'motion/react';
import CountdownTimer from '@/app/components/CountdownTimer';

interface FacilityButtonProps {
  imageSrc: string;
  alt: string;
  className: string;
  onClick: () => void;
  isLocked: boolean;
  endTime: number | null;
  onComplete: () => void;
}

export default function FacilityButton({
  imageSrc,
  alt,
  className,
  onClick,
  isLocked,
  endTime,
  onComplete
}: FacilityButtonProps) {
  return (
    <motion.button
      onClick={() => !isLocked && onClick()}
      whileHover={!isLocked ? { scale: 1.05 } : {}}
      whileTap={!isLocked ? { scale: 0.95 } : {}}
      transition={{ duration: 0.2 }}
      className={`${className} ${isLocked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
    >
      <img alt={alt} className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imageSrc} />
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
          <CountdownTimer endTime={endTime} onComplete={onComplete} />
        </div>
      )}
    </motion.button>
  );
}
