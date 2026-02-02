import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useGame } from '@/app/context/GameContext';
import GoodEnding from '@/imports/GoodEnding';
import BadEnding from '@/imports/BadEnding';

// Import Figma assets
import img分享飛機 from "figma:asset/5c88559406cc7a2fdfc028e3605dfcf832ac1102.png";
import img飛機展示 from "figma:asset/7c20f8f7f42b2e8b1b7272b36e8a0167dfabf598.png";
import img再次挑戰 from "figma:asset/03dc60d964b90dc72b895ad085e79124bdfaab07.png";
import img視窗Overlay from "figma:asset/ea30aceeaf9f7b7ca85256e9229c81c36e3b47a9.png";
import imgShareBg from "figma:asset/c3c07e01a9afad0e6c4a3d056d31caf2678cb9f2.png";
import img確認 from "figma:asset/f42ba2e64cbb968cc4ff9eb915249f1e5cfe14a1.png";
import img返回 from "figma:asset/d671e3e52fda77a73f61ccb3d683017a2540d166.png";

export default function EndingScreen() {
  const navigate = useNavigate();
  const { currentAirplane, saveAirplane, resetGame } = useGame();
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [airplaneName, setAirplaneName] = useState('');

  // Calculate carbon emission balance
  const isGoodEnding = useMemo(() => {
    let lowCarbonCount = 0;
    let highCarbonCount = 0;

    if (currentAirplane.fuselage?.carbonType === 'low') lowCarbonCount++;
    if (currentAirplane.fuselage?.carbonType === 'high') highCarbonCount++;
    
    if (currentAirplane.wings?.carbonType === 'low') lowCarbonCount++;
    if (currentAirplane.wings?.carbonType === 'high') highCarbonCount++;
    
    if (currentAirplane.power?.carbonType === 'low') lowCarbonCount++;
    if (currentAirplane.power?.carbonType === 'high') highCarbonCount++;

    // If low carbon parts > high carbon parts, show good ending
    return lowCarbonCount > highCarbonCount;
  }, [currentAirplane]);

  const handleShare = () => {
    setShowShareDialog(true);
  };

  const handleConfirmShare = () => {
    if (airplaneName.trim()) {
      saveAirplane(airplaneName.trim());
      setShowShareDialog(false);
      setAirplaneName('');
      navigate('/gallery');
    }
  };

  const handleCancelShare = () => {
    setShowShareDialog(false);
    setAirplaneName('');
  };

  const handleGallery = () => {
    navigate('/gallery');
  };

  const handlePlayAgain = () => {
    resetGame();
    navigate('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 6) {
      setAirplaneName(value);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="relative w-screen h-screen overflow-hidden bg-white flex items-center justify-center"
    >
      <div className="relative w-[1920px] h-[1080px] overflow-hidden">
        {/* Background - Show different ending based on carbon emission */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute h-[1080px] left-0 top-0 w-[1920px]"
        >
          {isGoodEnding ? <GoodEnding /> : <BadEnding />}
        </motion.div>

        {/* Airplane Display - Layered */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px] z-10">
          {/* Power System Layer - Top */}
          {currentAirplane.power && (
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]">
              {typeof currentAirplane.power.image === 'string' ? (
                <img 
                  alt="動力系統" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                  src={currentAirplane.power.image} 
                />
              ) : null}
            </div>
          )}

          {/* Wings Layer - Middle */}
          {currentAirplane.wings && (
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]">
              {typeof currentAirplane.wings.image === 'string' ? (
                <img 
                  alt="機翼" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                  src={currentAirplane.wings.image} 
                />
              ) : null}
            </div>
          )}

          {/* Fuselage Layer - Bottom */}
          {currentAirplane.fuselage && (
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]">
              {typeof currentAirplane.fuselage.image === 'string' ? (
                <img 
                  alt="機身" 
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
                  src={currentAirplane.fuselage.image} 
                />
              ) : null}
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="absolute content-stretch flex gap-[50px] items-end justify-end left-0 p-[5px] top-[940.5px] w-[1920px] z-20">
          {/* Share Button */}
          <motion.button
            onClick={handleShare}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-[102px] relative shrink-0 w-[338px] cursor-pointer"
          >
            <div className="absolute aspect-[338/102] left-0 right-0 top-0">
              <img alt="分享飛機" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img分享飛機} />
            </div>
          </motion.button>

          {/* Gallery Button */}
          <motion.button
            onClick={handleGallery}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-[102px] relative shrink-0 w-[338px] cursor-pointer"
          >
            <div className="absolute aspect-[338/102] left-0 right-0 top-0">
              <img alt="飛機展示" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img飛機展示} />
            </div>
          </motion.button>

          {/* Play Again Button */}
          <motion.button
            onClick={handlePlayAgain}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="h-[102px] relative shrink-0 w-[338px] cursor-pointer"
          >
            <div className="absolute aspect-[338/102] left-0 right-0 top-0">
              <img alt="再次挑戰" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img再次挑戰} />
            </div>
          </motion.button>
        </div>

        {/* Share Dialog */}
        <AnimatePresence>
          {showShareDialog && (
            <>
              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[1080px] items-center justify-center left-1/2 top-1/2 w-[1920px] z-40"
              >
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img視窗Overlay} />
              </motion.div>

              {/* Dialog Box */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-[calc(50%+1px)] w-[800px] z-50"
              >
                {/* Background */}
                <div className="absolute h-[600px] left-0 top-0 w-[800px]">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShareBg} />
                </div>

                {/* Content */}
                <div className="content-stretch flex flex-col gap-[10px] h-[600px] items-center px-[100px] py-[50px] relative shrink-0 w-[800px]">
                  {/* Title */}
                  <div className="content-stretch flex items-center justify-center px-[5px] py-[20px] relative rounded-[29px] shrink-0">
                    <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-white">
                      是否紀錄你的飛機到相簿？
                    </p>
                  </div>

                  {/* Description */}
                  <div className="relative rounded-[29px] shrink-0 w-full">
                    <div className="flex flex-row items-center justify-center size-full">
                      <div className="content-stretch flex items-center justify-center p-[20px] relative w-full">
                        <p className="flex-[1_0_0] font-['GenSenRounded_TW:M',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[35px] text-white whitespace-pre-wrap">
                          你的飛機與相關數據將會上傳至線上資料庫。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Input Field */}
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="bg-[rgba(3,48,98,0.85)] min-w-[120px] relative rounded-[8px] shrink-0 w-full">
                      <div className="flex flex-row items-center min-w-[inherit] overflow-clip rounded-[inherit] size-full">
                        <input
                          type="text"
                          value={airplaneName}
                          onChange={handleInputChange}
                          placeholder="輸入飛機名稱"
                          maxLength={6}
                          className="content-stretch flex font-['GenSenRounded_TW:L',sans-serif] items-center leading-[1.2] min-w-[inherit] not-italic px-[16px] py-[12px] relative text-[40px] text-white w-full bg-transparent border-none outline-none placeholder:text-white/70"
                        />
                        <p className="font-['GenSenRounded_TW:L',sans-serif] leading-[1.2] not-italic px-[16px] relative text-[40px] text-white shrink-0">
                          {airplaneName.length}/6
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="content-stretch flex flex-[1_0_0] gap-[20px] items-end justify-center min-h-px min-w-px pt-[20px] relative w-full">
                    {/* Confirm Button */}
                    <motion.button
                      onClick={handleConfirmShare}
                      disabled={!airplaneName.trim()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="h-[89px] relative shrink-0 w-[193px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[89px] left-1/2 top-1/2 w-[193px]">
                        <img alt="確認" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img確認} />
                      </div>
                    </motion.button>

                    {/* Cancel Button */}
                    <motion.button
                      onClick={handleCancelShare}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="h-[89px] relative shrink-0 w-[192px] cursor-pointer"
                    >
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[89px] left-1/2 top-1/2 w-[192px]">
                        <img alt="返回" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img返回} />
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}