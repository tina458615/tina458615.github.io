import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';
import imgStartbg from "figma:asset/bc7785ef26cc79a2d493f7a46de74cc48c803c98.png";
import img1 from "figma:asset/98c62848cc1130c2191b04e0464e659e95ac2e12.png";
import img2 from "figma:asset/bcb77d914c4068e3dbf24b1e5db72ddfca97fb2b.png";

export default function StartScreen() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTap = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Wait for exit animation to complete before navigating
    setTimeout(() => {
      navigate('/workshop');
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isTransitioning ? 0 : 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="relative w-full h-screen overflow-hidden cursor-pointer bg-white"
      onClick={handleTap}
    >
      {/* Background */}
      <div className="absolute h-full left-0 top-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgStartbg} />
      </div>

      {/* Title */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ 
          y: isTransitioning ? -100 : 0, 
          opacity: isTransitioning ? 0 : 1 
        }}
        transition={{ delay: isTransitioning ? 0 : 0.3, duration: 0.8 }}
        className="absolute h-full left-0 top-0 w-full pointer-events-none"
      >
        <img alt="飛行樂園 Flight Adventure Park" className="absolute inset-0 max-w-none object-cover size-full" src={img1} />
      </motion.div>

      {/* Start Button with Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: isTransitioning ? 1.2 : 1, 
          opacity: isTransitioning ? 0 : 1 
        }}
        transition={{ delay: isTransitioning ? 0 : 0.6, duration: 0.5 }}
        className="absolute h-full left-0 top-0 w-full pointer-events-none"
      >
        <motion.img
          animate={
            isTransitioning
              ? { scale: 1.2 }
              : { scale: [1, 1.05, 1] }
          }
          transition={
            isTransitioning
              ? { duration: 0.5 }
              : { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }
          alt="開始建造"
          className="absolute inset-0 max-w-none object-cover size-full"
          src={img2}
        />
      </motion.div>

      {/* Tap to start hint */}
      <motion.div
        animate={{ opacity: isTransitioning ? 0 : [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-0 right-0 text-center pointer-events-none"
      >
        <p className="text-xl text-white/90 font-bold">點擊任意處開始</p>
      </motion.div>
      
      {/* Transition Overlay */}
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute inset-0 bg-white z-50 pointer-events-none"
        />
      )}
    </motion.div>
  );
}