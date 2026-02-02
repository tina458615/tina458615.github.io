import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useGame } from '@/app/context/GameContext';
import { AIRPLANE_PARTS } from '@/app/data/gameData';
import { AirplanePart } from '@/app/context/GameContext';
import Footer from '@/imports/Footer';

// Import Figma assets - Updated
import imgResearchBg from "figma:asset/df42a97beaddeb18cf625ee1c81dcb57fe9eac33.png";
import img1 from "figma:asset/4e0af7b81cedd3c547a041477d132546b5c8b933.png";
import imgTimebg from "figma:asset/72f5382063dd2e237783d309f7eb55246dba5e61.png";
import img from "figma:asset/8dd082b811121164c286fd1f393a563a8144fd80.png";
import img2 from "figma:asset/f07973affefecc817ee195e78173aca92c31d098.png";
import img3 from "figma:asset/3b3a05a5c0fbe901daee194038b6207fd478cdbf.png";
import img4 from "figma:asset/bca98e543d7d3a13b2b95a078506abd5ade12e29.png";
import img5 from "figma:asset/1b95179bf86c5a7bc0b4612760414c29a4622c21.png";
import img6 from "figma:asset/97d043fd91bde68585bd5e09826e07b9315f38ac.png";
import img7 from "figma:asset/c99b55341d318391a192b7aa0f9ef3e706c1d4d9.png";
import img9 from "figma:asset/ea30aceeaf9f7b7ca85256e9229c81c36e3b47a9.png";
import imgResearchBg1 from "figma:asset/0db298149e3f07500070a05a897f4e820a077e74.png";
import img10 from "figma:asset/b889460ac904646b726b5edf4220cc843ff9f763.png";
import img11 from "figma:asset/645176653ad3bd492bdd30e7ee3fbaf1fc39d4bb.png";
import img12 from "figma:asset/1f8a132b288aa488afaab3c0fbaf6fbe7fdddc0d.png";
import img13 from "figma:asset/7bc9fc436980d9a85babcf2fb7012aed4aab284e.png";
import img14 from "figma:asset/8b384a16bb9ac7519afeab099bacabeb7d02df93.png";
import img15 from "figma:asset/74af75ac8b2deccac31c2785b8dfeeba6d5fa3da.png";
import GearIcon from "@/imports/Frame49";

// Tab button images
import img機身Normal from "figma:asset/9a8ae781e76182cd4f5341e99361ee002970fb53.png";
import img機身Active from "figma:asset/7bc9fc436980d9a85babcf2fb7012aed4aab284e.png";
import img機翼Normal from "figma:asset/8b384a16bb9ac7519afeab099bacabeb7d02df93.png";
import img機翼Active from "figma:asset/645c3fcbdab7ca72ad280427b5a9a759b3651b1a.png";
import img動力Normal from "figma:asset/74af75ac8b2deccac31c2785b8dfeeba6d5fa3da.png";
import img動力Active from "figma:asset/61e9244a0cc381f2394a08297eb284233be5c51b.png";
import img零件選擇Button from "figma:asset/1f8a132b288aa488afaab3c0fbaf6fbe7fdddc0d.png";

// Preview none state images
import img預覽機身None from "figma:asset/f07973affefecc817ee195e78173aca92c31d098.png";
import img預覽機翼None from "figma:asset/8dd082b811121164c286fd1f393a563a8144fd80.png";

// Dialog box background
import imgDialogBg from "figma:asset/b208d3fe9572a583893bedec22214242d928a90b.png";

// Game tips for passerby
const GAME_TIPS = [
  "錢不夠的時候，慢慢等一下也沒關係喔。",
  "如果想試試新方向，可以看看投資計畫。",
  "能量石都失去能量的話，建造會額外收能量石租借費喔！",
  "資金不太夠嗎？可以去市集看看喔～"
];

export default function WorkshopScene() {
  const navigate = useNavigate();
  const {
    funds,
    energyStones,
    commonStones,
    currentAirplane,
    isResearching,
    researchEndTime,
    facilityLocked,
    selectPart,
    startResearch,
    completeResearch,
    deductFunds,
    setEnergyStones,
    addCommonStones,
    workshopUnlocked,
    energyReduction,
  } = useGame();

  const [selectedTab, setSelectedTab] = useState<'fuselage' | 'wings' | 'power'>('fuselage');
  const [selectedPartIndex, setSelectedPartIndex] = useState(0);
  const [countdown, setCountdown] = useState<number>(0);
  const [showPartSelection, setShowPartSelection] = useState(false);
  const [showGrandpa, setShowGrandpa] = useState(false);
  const [grandpaMessage, setGrandpaMessage] = useState('錢不夠的時候，慢慢等一下也沒關係喔。');
  const [showPasserbyTip, setShowPasserbyTip] = useState(false);
  const [currentTip, setCurrentTip] = useState<string>('');

  // Filter parts based on workshop unlock status
  const partsForTab = AIRPLANE_PARTS.filter((part) => {
    if (part.type !== selectedTab) return false;
    // If part requires workshop and workshop is not unlocked, hide it
    if (part.requiresWorkshop && !workshopUnlocked) return false;
    return true;
  });
  const currentPart = partsForTab[selectedPartIndex] || null;

  // Check if all parts are completed
  const isAllPartsCompleted = currentAirplane.fuselage && currentAirplane.wings && currentAirplane.power;

  // Debug: Monitor isResearching state changes
  useEffect(() => {
    console.log('📊 isResearching 狀態變化:', isResearching, 'researchEndTime:', researchEndTime);
  }, [isResearching, researchEndTime]);

  // Countdown timer
  useEffect(() => {
    if (isResearching && researchEndTime) {
      const interval = setInterval(() => {
        const remaining = Math.max(0, Math.ceil((researchEndTime - Date.now()) / 1000));
        setCountdown(remaining);

        if (remaining === 0) {
          completeResearch();
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isResearching, researchEndTime, completeResearch]);

  // Random tip system - show tips occasionally during research
  useEffect(() => {
    if (isResearching) {
      // Set random intervals for tips (between 3-8 seconds)
      const showTip = () => {
        const randomTip = GAME_TIPS[Math.floor(Math.random() * GAME_TIPS.length)];
        setCurrentTip(randomTip);
        setShowPasserbyTip(true);
        
        // Hide tip after 4 seconds
        setTimeout(() => {
          setShowPasserbyTip(false);
        }, 4000);
      };

      // First tip after 3-5 seconds
      const firstDelay = 3000 + Math.random() * 2000;
      const firstTimeout = setTimeout(showTip, firstDelay);

      // Subsequent tips every 5-8 seconds
      const tipInterval = setInterval(() => {
        // 40% chance to show tip
        if (Math.random() < 0.4) {
          showTip();
        }
      }, 5000 + Math.random() * 3000);

      return () => {
        clearTimeout(firstTimeout);
        clearInterval(tipInterval);
      };
    } else {
      setShowPasserbyTip(false);
    }
  }, [isResearching]);

  const handlePreviousPart = () => {
    setSelectedPartIndex((prev) => (prev > 0 ? prev - 1 : partsForTab.length - 1));
  };

  const handleNextPart = () => {
    setSelectedPartIndex((prev) => (prev < partsForTab.length - 1 ? prev + 1 : 0));
  };

  const handleBuildPart = () => {
    if (currentPart && !facilityLocked) {
      // Calculate total cost including energy rental fee if needed
      const ENERGY_STONE_TOTAL = 25000; // Total energy stones capacity
      const ENERGY_RENTAL_FEE = 1000;
      
      // Check if we need to pay energy rental fee (when common stones exceed total capacity)
      const needsRentalFee = commonStones >= ENERGY_STONE_TOTAL;
      const totalCost = needsRentalFee ? currentPart.cost + ENERGY_RENTAL_FEE : currentPart.cost;
      
      if (funds < totalCost) {
        setGrandpaMessage(needsRentalFee 
          ? `能量石都失去能量了！需要額外支付${ENERGY_RENTAL_FEE}元租借費喔。總共需要${totalCost}元。`
          : '錢不夠的時候，慢慢等一下也沒關係喔。'
        );
        setShowGrandpa(true);
        setTimeout(() => setShowGrandpa(false), 3000);
        return;
      }
      
      // Check if energy stones have enough energy (for wings and power)
      if (currentPart.energyCost && energyStones < currentPart.energyCost) {
        setGrandpaMessage(`能量不足！需要 ${currentPart.energyCost} 噸有能量的能量石喔。`);
        setShowGrandpa(true);
        setTimeout(() => setShowGrandpa(false), 3000);
        return;
      }

      const success = deductFunds(totalCost);
      if (success) {
        console.log('🔨 開始建造:', currentPart.name, '建造時間:', currentPart.researchTime, '秒');
        
        // Store the part to be added after research completes
        const partToBuild = currentPart;
        
        // Apply workshop energy reduction (300 tons reduction)
        // For wings and power: energy stones lose their energy and become common stones
        // Only add common stones, don't deduct energy stones
        if (currentPart.energyCost) {
          const actualEnergyCost = Math.max(0, currentPart.energyCost - energyReduction);
          addCommonStones(actualEnergyCost);
        }
        
        // For fuselage: energy stones lose their energy and become common stones
        // Only add common stones, don't deduct energy stones
        if (currentPart.normalStonesReward) {
          const actualStonesGenerated = Math.max(0, currentPart.normalStonesReward - energyReduction);
          addCommonStones(actualStonesGenerated);
        }
        
        // Close part selection window first
        setShowPartSelection(false);
        
        // Start research (will set isResearching to true)
        console.log('⏳ 啟動研究...');
        startResearch(currentPart.researchTime);
        
        // Select the part immediately (add it to the airplane)
        selectPart(partToBuild);
        
        console.log('✅ 建造流程完成');
      }
    }
  };

  const handleBuildComplete = () => {
    if (isAllPartsCompleted) {
      navigate('/ending');
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
        className="absolute inset-0"
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgResearchBg} />
      </motion.div>

      {/* Grandpa (always shown on left) */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="absolute h-[569px] left-[127px] top-[457px] w-[538px] z-10"
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img1} />
      </motion.div>

      {/* Grandpa Dialog */}
      <AnimatePresence>
        {showGrandpa && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute h-[354px] left-[357px] top-[139px] w-[430px] z-30"
          >
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDialogBg} />
            <div className="absolute bottom-[25.42%] flex flex-col font-['GenSenRounded_TW:B',sans-serif] justify-center leading-[0] left-[calc(50%-184px)] not-italic overflow-hidden text-[35px] text-[rgba(0,0,0,0.8)] text-ellipsis top-[10.17%] tracking-[-0.385px] w-[368px]">
              <p className="leading-[1.5] whitespace-pre-wrap">{grandpaMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Passerby Tips Dialog */}
      <AnimatePresence>
        {showPasserbyTip && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute h-[354px] left-[357px] top-[139px] w-[430px] z-30"
          >
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDialogBg} />
            <div className="absolute bottom-[25.42%] flex flex-col font-['GenSenRounded_TW:B',sans-serif] justify-center leading-[0] left-[calc(50%-184px)] not-italic overflow-hidden text-[35px] text-[rgba(0,0,0,0.8)] text-ellipsis top-[10.17%] tracking-[-0.385px] w-[368px]">
              <p className="leading-[1.5] whitespace-pre-wrap">{currentTip}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Airplane Preview / Timer */}
      <div className="-translate-y-1/2 absolute h-[600px] right-[50px] top-[calc(50%+40px)] w-[800px] z-10">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]">
          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgTimebg} />
        </div>

        {isResearching ? (
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2 text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="mb-8 mx-auto w-[80px] h-[80px]"
            >
              <GearIcon />
            </motion.div>
            <div className="text-6xl font-bold text-white mb-4">{countdown}秒</div>
            <div className="text-3xl text-white">建造中...</div>
          </div>
        ) : (
          <button
            onClick={() => setShowPartSelection(true)}
            className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px] cursor-pointer"
          >
            {/* 動力系統層 - 最上層 */}
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]">
              {currentAirplane.power ? (
                <img 
                  alt="動力系統" 
                  className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" 
                  src={currentAirplane.power.image as string} 
                />
              ) : (
                // 動力系統 none 狀態（空的，不顯示圖片）
                <div className="absolute inset-0" />
              )}
            </div>

            {/* 機翼層 - 中層 */}
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]">
              {currentAirplane.wings ? (
                <img 
                  alt="機翼" 
                  className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" 
                  src={currentAirplane.wings.image as string} 
                />
              ) : (
                // 機翼 none 狀態
                <img 
                  alt="機翼輪廓" 
                  className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" 
                  src={img預覽機翼None} 
                />
              )}
            </div>

            {/* 機身層 - 底層 */}
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]">
              {currentAirplane.fuselage ? (
                <img 
                  alt="機身" 
                  className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" 
                  src={currentAirplane.fuselage.image as string} 
                />
              ) : (
                // 機身 none 狀態
                <img 
                  alt="機身輪廓" 
                  className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" 
                  src={img預覽機身None} 
                />
              )}
            </div>

            <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:B',sans-serif] justify-center leading-[0] left-[calc(50%-95px)] not-italic text-[48px] text-white top-[441px] tracking-[-0.528px] whitespace-nowrap">
              <p className="leading-[1.5]">點我建造</p>
            </div>
          </button>
        )}
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="content-stretch flex gap-[50px] items-center px-[50px] relative h-[123px]">
          {/* Funds */}
          <div className="h-[123px] relative shrink-0 w-[335px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3} />
            </div>
            <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[98px] text-[#4282ca] text-[36px] top-1/2 translate-x-full whitespace-nowrap">
              <p className="leading-[normal]">{funds}</p>
            </div>
          </div>

          {/* Energy Stones */}
          <div className="h-[123px] relative shrink-0 w-[335px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#4282ca] text-[43px] text-right top-1/2 whitespace-nowrap">
                <p className="leading-[normal]">{energyStones}噸</p>
              </div>
            </div>
          </div>

          {/* Common Stones */}
          <div className="h-[123px] relative shrink-0 w-[335px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5} />
            </div>
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[123px] left-1/2 top-1/2 w-[335px]">
              <div className="-translate-y-1/2 absolute flex flex-col font-['GenSenRounded_TW:H',sans-serif] justify-center leading-[0] not-italic right-[19px] text-[#4282ca] text-[43px] text-right top-1/2 whitespace-nowrap">
                <p className="leading-[normal]">{commonStones}噸</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="flex flex-row items-end justify-end">
          <div className="content-stretch flex gap-[10px] items-end justify-end p-[5px] relative w-full">
            {/* Market Button */}
            <button
              onClick={() => navigate('/marketplace')}
              className="h-[100px] relative w-[339px] cursor-pointer"
            >
              <div className="absolute h-[100px] left-[0.5px] top-0 w-[338px]" data-name="市集 1">
                <img alt="市集" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6} />
              </div>
            </button>

            {/* Build Complete Button */}
            <button
              onClick={handleBuildComplete}
              disabled={!isAllPartsCompleted}
              className="h-[100px] relative w-[339px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="absolute h-[100px] left-[0.5px] top-0 w-[338px]" data-name="升空未解鎖 1">
                <img alt="建造完成" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Window overlay (when showing part selection) */}
      <AnimatePresence>
        {showPartSelection && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-40"
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img9} />
            </motion.div>

            {/* Part Selection Panel */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px] z-50"
            >
              {/* Background */}
              <div className="absolute inset-0">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgResearchBg1} />
              </div>

              {/* Content */}
              <div className="content-stretch flex h-[980px] items-center justify-center relative px-[160px]">
                <div className="content-stretch flex flex-1 h-full items-center">
                  {/* Left: Airplane Preview */}
                  <div className="h-full relative w-[800px]">
                    {/* Left/Right Arrows */}
                    <div className="absolute content-stretch flex h-[870px] items-center justify-between left-0 px-[30px] top-0 w-[800px] z-20">
                      <motion.button 
                        onClick={handlePreviousPart} 
                        className="h-[69px] w-[76px] cursor-pointer relative"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img alt="Previous" className="size-full object-contain" src={img10} />
                      </motion.button>
                      <motion.button 
                        onClick={handleNextPart} 
                        className="h-[69px] w-[76px] cursor-pointer relative"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img alt="Next" className="size-full object-contain" src={img11} />
                      </motion.button>
                    </div>

                    {/* Airplane Preview */}
                    <div className="absolute h-[600px] left-0 top-[135px] w-[800px]">
                      {/* None state background layers - shown behind current part */}
                      {selectedTab === 'fuselage' && (
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px] -z-10">
                          <img alt="機翼和動力輪廓" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img預覽機翼None} />
                        </div>
                      )}
                      {selectedTab === 'wings' && (
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px] -z-10">
                          <img alt="機身和動力輪廓" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img預覽機身None} />
                        </div>
                      )}
                      {selectedTab === 'power' && (
                        <>
                          {/* 機身 none 狀態 */}
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px] -z-10">
                            <img alt="機身輪廓" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img預覽機身None} />
                          </div>
                          {/* 機翼 none 狀態 */}
                          <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px] -z-10">
                            <img alt="機翼輪廓" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={img預覽機翼None} />
                          </div>
                        </>
                      )}

                      {/* Current part */}
                      {currentPart && (
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[600px] left-1/2 top-1/2 w-[800px]">
                          {typeof currentPart.image === 'string' && (currentPart.image.startsWith('http') || currentPart.image.startsWith('blob') || currentPart.image.startsWith('data:') || currentPart.image.startsWith('/')) ? (
                            <img alt={currentPart.name} className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={currentPart.image} />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-9xl">
                              {currentPart.image}
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Build Button */}
                    <motion.button
                      onClick={handleBuildPart}
                      disabled={!currentPart || facilityLocked}
                      className="-translate-x-1/2 absolute bottom-[155px] h-[100px] left-[calc(50%-0.5px)] w-[339px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed z-20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img alt="零件選擇" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img零件選擇Button} />
                    </motion.button>
                  </div>

                  {/* Right: Part Details */}
                  <div className="flex-1 h-full relative">
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col gap-[20px] items-start justify-center px-[50px] relative size-full">
                        {/* Tab Buttons */}
                        <div className="content-stretch flex items-center justify-between relative w-full">
                          <button
                            onClick={() => { setSelectedTab('fuselage'); setSelectedPartIndex(0); }}
                            className="h-[90px] relative w-[195px] cursor-pointer"
                          >
                            <img alt="機身" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={selectedTab === 'fuselage' ? img機身Active : img機身Normal} />
                          </button>
                          <button
                            onClick={() => { setSelectedTab('wings'); setSelectedPartIndex(0); }}
                            className="h-[90px] relative w-[195px] cursor-pointer"
                          >
                            <img alt="機翼" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={selectedTab === 'wings' ? img機翼Active : img機翼Normal} />
                          </button>
                          <button
                            onClick={() => { setSelectedTab('power'); setSelectedPartIndex(0); }}
                            className="h-[90px] relative w-[195px] cursor-pointer"
                          >
                            <img alt="動力系統" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={selectedTab === 'power' ? img動力Active : img動力Normal} />
                          </button>
                        </div>

                        {/* Part Name */}
                        {currentPart && (
                          <>
                            <div className="content-stretch flex items-center py-[5px] relative">
                              <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative text-[50px] text-white">
                                {currentPart.name}
                              </p>
                            </div>

                            {/* Description */}
                            <div className="content-stretch flex items-center justify-center relative rounded-[29px] w-full">
                              <p className="flex-1 font-['GenSenRounded_TW:R',sans-serif] leading-[normal] not-italic relative text-[35px] text-white whitespace-pre-wrap">
                                {currentPart.description}
                              </p>
                            </div>

                            {/* Divider */}
                            <div className="h-[60px] relative w-full">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 700 60">
                                <line stroke="white" strokeWidth="6" x2="700" y1="27" y2="27" />
                              </svg>
                            </div>

                            {/* Stats */}
                            <div className="content-stretch flex flex-col font-['GenSenRounded_TW:B',sans-serif] gap-[20px] items-center justify-center leading-[normal] not-italic relative rounded-[29px] text-[40px] text-white w-full whitespace-pre-wrap">
                              <p className="relative w-full">所需資金：{currentPart.cost}</p>
                              {currentPart.energyCost && (
                                <p className="relative w-full">
                                  {workshopUnlocked 
                                    ? Math.max(0, currentPart.energyCost - energyReduction)
                                    : currentPart.energyCost}噸的能量石失去能量
                                </p>
                              )}
                              {currentPart.normalStonesReward && (
                                <p className="relative w-full">
                                  {workshopUnlocked 
                                    ? Math.max(0, currentPart.normalStonesReward - energyReduction)
                                    : currentPart.normalStonesReward}噸的能量石失去能量
                                </p>
                              )}
                              <p className="relative w-full">建造時間：{currentPart.researchTime}秒</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setShowPartSelection(false)}
                className="absolute top-8 right-8 text-white text-4xl hover:text-red-400 transition-colors z-50"
              >
                ✕
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>
    </motion.div>
  );
}