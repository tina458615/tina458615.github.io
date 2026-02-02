import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useGame } from '@/app/context/GameContext';
import { Airplane } from '@/app/context/GameContext';
import { DEFAULT_AIRPLANES } from '@/app/data/defaultAirplanes';

// Import Figma assets
import imgDiarybg1 from "figma:asset/9303b005a8e8e14c4a15dffcbe505cebb264225e.png";
import imgShipframe1 from "figma:asset/03a9e75adafce80b6d86b4e31625d94dbd1bd4eb.png";
import imgZoom from "figma:asset/d7584c7d9d74bcf94b6d579d45486967ecb495b1.png";
import img再次挑戰 from "figma:asset/03dc60d964b90dc72b895ad085e79124bdfaab07.png";
import imgClose1 from "figma:asset/9f4a944afeb66075bba4dc050617269a6795e78a.png";
import imgDatabg from "figma:asset/c3c07e01a9afad0e6c4a3d056d31caf2678cb9f2.png";
import img視窗Overlay from "figma:asset/ea30aceeaf9f7b7ca85256e9229c81c36e3b47a9.png";
import imgArrowLeft from "figma:asset/420cf268f66808f46d9d8c9836be61950d8f998e.png";
import imgArrowRight from "figma:asset/39c5f0a6005ea35de029ee4da561d94609a50ed5.png";

const MAX_ITEMS_PER_PAGE = 12;

interface AirplaneInfoDialogProps {
  airplane: Airplane;
  onClose: () => void;
}

function AirplaneInfoDialog({ airplane, onClose }: AirplaneInfoDialogProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}分${secs}秒`;
  };

  return (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 z-40"
        onClick={onClose}
      >
        <img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={img視窗Overlay} />
      </motion.div>

      {/* Dialog Box */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] z-50"
      >
        {/* Background */}
        <img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={imgDatabg} />

        {/* Close Button */}
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-[20px] top-[20px] w-[97px] h-[100px] cursor-pointer z-10"
        >
          <img alt="關閉" className="size-full object-cover pointer-events-none" src={imgClose1} />
        </motion.button>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center p-[50px] gap-[20px]">
          {/* Title */}
          <p className="font-['GenSenRounded_TW:H',sans-serif] text-[50px] text-white px-[5px] py-[20px]">
            {airplane.name}
          </p>

          {/* Divider */}
          <div className="w-full h-[60px]">
            <svg className="size-full" fill="none" viewBox="0 0 700 60">
              <line stroke="white" strokeWidth="6" x2="700" y1="27" y2="27" />
            </svg>
          </div>

          {/* Stats */}
          <div className="w-full flex flex-col items-center gap-[30px] font-['GenSenRounded_TW:M',sans-serif] text-[35px] text-white text-center p-[20px]">
            <p>剩餘資金：{airplane.finalFunds}</p>
            <p>能量石：{airplane.finalEnergyStones}</p>
            <p>普通石頭：{airplane.finalCommonStones}</p>
          </div>

          {/* Build Time */}
          <div className="pt-[20px] w-full">
            <p className="font-['GenSenRounded_TW:B',sans-serif] text-[42px] text-white text-center w-full">
              花費{formatTime(airplane.buildTime)}完成飛機建造
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

interface AirplaneCardProps {
  airplane: Airplane;
  index: number;
  onClick: () => void;
  isPlayerAirplane?: boolean;
}

function AirplaneCard({ airplane, index, onClick, isPlayerAirplane = false }: AirplaneCardProps) {
  // Player's airplane always shows as "飛機NO.1"
  const displayName = isPlayerAirplane 
    ? (airplane.name && airplane.name !== 'Untitled Airplane' ? airplane.name : '飛機NO.1')
    : airplane.name || `飛機NO.${index + 1}`;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="relative w-[381px] h-[267px] overflow-hidden cursor-pointer"
    >
      {/* Airplane Parts Container */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[180px]">
          {/* Power System */}
          {airplane.power && (
            <img alt="動力" className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[300px] h-[225px] object-cover pointer-events-none" src={airplane.power.image} />
          )}
          
          {/* Wings */}
          {airplane.wings && (
            <img alt="機翼" className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[300px] h-[225px] object-cover pointer-events-none" src={airplane.wings.image} />
          )}
          
          {/* Fuselage */}
          {airplane.fuselage && (
            <img alt="機身" className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[300px] h-[225px] object-cover pointer-events-none" src={airplane.fuselage.image} />
          )}
        </div>

        {/* Frame */}
        <img alt="" className="absolute inset-0 size-full object-cover pointer-events-none" src={imgShipframe1} />
      </div>

      {/* Zoom Icon */}
      <div className="absolute right-[55px] top-[34px] size-[33px]">
        <img alt="" className="size-full object-cover pointer-events-none" src={imgZoom} />
      </div>

      {/* Airplane Name */}
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 w-[350px] text-center">
        <p className="font-['GenSenRounded_TW:H',sans-serif] text-[28px] text-black truncate">
          {displayName}
        </p>
      </div>
    </motion.button>
  );
}

export default function GalleryScene() {
  const navigate = useNavigate();
  const { airplanes: playerAirplanes } = useGame();
  const [selectedAirplane, setSelectedAirplane] = useState<Airplane | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  // Combine player airplanes with default airplanes, limiting to 12 total
  const allAirplanes = useMemo(() => {
    // Player airplanes come first, then fill with defaults up to 12
    const combined = [...playerAirplanes, ...DEFAULT_AIRPLANES];
    return combined.slice(0, 12);
  }, [playerAirplanes]);

  const { totalPages, displayedAirplanes } = useMemo(() => {
    const total = Math.ceil(allAirplanes.length / MAX_ITEMS_PER_PAGE);
    const start = currentPage * MAX_ITEMS_PER_PAGE;
    const end = start + MAX_ITEMS_PER_PAGE;
    return {
      totalPages: total,
      displayedAirplanes: allAirplanes.slice(start, end)
    };
  }, [allAirplanes, currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
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
        {/* Background */}
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute left-[-4px] top-0 w-[1928px] h-[1080px]"
        >
          <img alt="" className="size-full object-contain pointer-events-none" src={imgDiarybg1} />
        </motion.div>

        {/* Gallery Grid */}
        <div className="absolute left-[135px] top-[100px] w-[1650px] h-[820px]">
          {allAirplanes.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="font-['GenSenRounded_TW:H',sans-serif] text-[48px] text-[#8B4513]">
                還沒有飛機記錄
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-4 grid-rows-3 gap-x-[30px] gap-y-[20px]">
              {displayedAirplanes.map((airplane, index) => (
                <AirplaneCard
                  key={airplane.id}
                  airplane={airplane}
                  index={index}
                  onClick={() => setSelectedAirplane(airplane)}
                  isPlayerAirplane={index < playerAirplanes.length}
                />
              ))}
            </div>
          )}
        </div>

        {/* Navigation Arrows - Only show if there are multiple pages */}
        {totalPages > 1 && (
          <>
            {/* Left Arrow */}
            {currentPage > 0 && (
              <motion.button
                onClick={handlePrevPage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-[30px] top-[500px] w-[80px] h-[100px] cursor-pointer"
              >
                <img alt="上一頁" className="size-full object-contain" src={imgArrowLeft} />
              </motion.button>
            )}

            {/* Right Arrow */}
            {currentPage < totalPages - 1 && (
              <motion.button
                onClick={handleNextPage}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-[30px] top-[500px] w-[80px] h-[100px] cursor-pointer"
              >
                <img alt="下一頁" className="size-full object-contain" src={imgArrowRight} />
              </motion.button>
            )}
          </>
        )}

        {/* Play Again Button */}
        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2">
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-[338px] h-[102px] cursor-pointer"
          >
            <img alt="再次挑戰" className="size-full object-cover pointer-events-none" src={img再次挑戰} />
          </motion.button>
        </div>

        {/* Airplane Info Dialog */}
        <AnimatePresence>
          {selectedAirplane && (
            <AirplaneInfoDialog
              airplane={selectedAirplane}
              onClose={() => setSelectedAirplane(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}