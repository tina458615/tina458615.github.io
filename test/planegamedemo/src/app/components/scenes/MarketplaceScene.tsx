import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useGame } from '@/app/context/GameContext';
import { useState } from 'react';
import ResourceHeader from '@/app/components/ui/ResourceHeader';
import GameButton from '@/app/components/ui/GameButton';
import FacilityButton from '@/app/components/ui/FacilityButton';
import Notification from '@/app/components/ui/Notification';
import imgMarketbg from "figma:asset/cce5a6f8dd80ccb4903827a72b191dcdf0c110a8.png";
import img1 from "figma:asset/23c8eefb1abd486565ee2cf191a6c0ea0803239e.png";
import img2 from "figma:asset/e2f891d4eda1eaae3267639493d082d73b3e1ead.png";
import img3 from "figma:asset/f7f4432a167a81325caaff7a044df41dc8dadeec.png";
import img4 from "figma:asset/d671e3e52fda77a73f61ccb3d683017a2540d166.png";
import img10 from "figma:asset/ea30aceeaf9f7b7ca85256e9229c81c36e3b47a9.png";

// Shop window assets
import imgBuybg from "figma:asset/c3c07e01a9afad0e6c4a3d056d31caf2678cb9f2.png";
import img8 from "figma:asset/58896357bbce36690d01aabb49320d10fb2c0c6f.png";
import img9 from "figma:asset/9e4cd59b5c7e3f1a0f3992eeac3ee0b7eff3227c.png";
import imgClose1 from "figma:asset/9f4a944afeb66075bba4dc050617269a6795e78a.png";

// Workshop window assets
import imgWorkshopStats from "figma:asset/2f6cbc267872dba3fc4d9f9466fd689b004bc0b9.png";
import imgConfirm from "figma:asset/f42ba2e64cbb968cc4ff9eb915249f1e5cfe14a1.png";

// Treehouse window assets
import imgTreehouseStats from "figma:asset/927235ac4400dd3f189528af0b75c370b410d311.png";

type FacilityType = 'treehouse' | 'shop' | 'workshop' | null;

export default function MarketplaceScene() {
  const navigate = useNavigate();
  const { 
    funds, 
    energyStones, 
    commonStones, 
    sellEnergyStones, 
    buyEnergyStones, 
    unlockWorkshop, 
    workshopUnlocked, 
    deductFunds, 
    setEnergyStones,
    treehouseLocked,
    treehouseEndTime,
    workshopLocked,
    workshopEndTime,
    startTreehouseResearch,
    completeTreehouse,
    startWorkshopResearch,
    completeWorkshop,
  } = useGame();
  const [activeWindow, setActiveWindow] = useState<FacilityType>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  // Check if player has enough resources for treehouse
  const canAffordTreehouse = funds >= 1500;
  
  // Check if player has enough resources for shop actions
  const canSellEnergyStones = energyStones >= 1000;
  const canBuyEnergyStones = funds >= 3000;
  
  // Check if player has enough resources for workshop
  const canAffordWorkshop = funds >= 2000;

  const handleTreehouseConfirm = () => {
    if (!canAffordTreehouse) {
      setErrorMessage('資金不足！需要1500元');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }
    // Deduct 1500 funds and add 3000 tons of energy stones, then start research
    if (deductFunds(1500)) {
      setEnergyStones(energyStones + 3000);
      setSuccessMessage('能量石增加3000噸！樹屋鎖定45秒');
      setTimeout(() => setSuccessMessage(''), 3000);
      startTreehouseResearch(); // Start 45-second countdown
      setActiveWindow(null); // Close window
      console.log('完成樹屋任務：扣除1500元，增加3000噸能量石，開始倒數45秒');
    }
  };

  const handleShopSell = () => {
    if (!canSellEnergyStones) {
      setErrorMessage('能量石不足！需要1000噸能量石');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }
    // Sell 1000 tons of energy stones for 3000 funds
    if (sellEnergyStones(1000)) {
      console.log('售出1000噸能量石，獲得3000元');
    }
  };

  const handleShopBuy = () => {
    if (!canBuyEnergyStones) {
      setErrorMessage('資金不足！需要3000元');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }
    // Buy 1000 tons of energy stones for 3000 funds
    if (buyEnergyStones(1000)) {
      console.log('購買1000噸能量石，花費3000元');
    }
  };

  const handleWorkshopConfirm = () => {
    if (!canAffordWorkshop) {
      setErrorMessage('資金不足！需要2000元');
      setTimeout(() => setErrorMessage(''), 3000);
      return;
    }
    // Unlock workshop
    if (unlockWorkshop()) {
      setSuccessMessage('新零件已解鎖！工坊鎖定30秒');
      setTimeout(() => setSuccessMessage(''), 3000);
      startWorkshopResearch(); // Start 30-second countdown
      setActiveWindow(null); // Close window
      console.log('解鎖工坊：扣除2000元，碳纖維零件已解鎖，能量石消耗減少300噸，開始倒數30秒');
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-white flex items-center justify-center">
      <div className="relative w-[1920px] h-[1080px] overflow-hidden">
        {/* Background */}
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1080px] left-1/2 top-1/2 w-[1920px]">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMarketbg} />
          
          {/* Treehouse - Mission Center */}
          <FacilityButton
            imageSrc={img1}
            alt="樹屋任務中心"
            className="absolute aspect-[530/514] left-[8.65%] right-[63.75%] top-[226px]"
            onClick={() => setActiveWindow('treehouse')}
            isLocked={treehouseLocked}
            endTime={treehouseEndTime}
            onComplete={completeTreehouse}
          />
          
          {/* Energy Gem Shop */}
          <FacilityButton
            imageSrc={img2}
            alt="能量寶石商店"
            className="absolute h-[417px] left-[804px] top-[307px] w-[374px]"
            onClick={() => setActiveWindow('shop')}
            isLocked={false}
            endTime={null}
            onComplete={() => {}}
          />
          
          {/* Tech Workshop */}
          <FacilityButton
            imageSrc={img3}
            alt="科技工坊"
            className="absolute h-[453px] left-[1313px] top-[295px] w-[431px]"
            onClick={() => setActiveWindow('workshop')}
            isLocked={workshopLocked}
            endTime={workshopEndTime}
            onComplete={completeWorkshop}
          />
        </div>

        {/* Header - Resource Display */}
        <ResourceHeader />

        {/* Footer - Back Button */}
        <div className="absolute content-stretch flex items-end left-0 px-[100px] py-[5px] top-[940.5px] w-[1920px] z-20">
          <GameButton
            onClick={() => navigate('/workshop')}
            imageSrc={img4}
            alt="返回"
            className="h-[89px] w-[192px]"
          />
        </div>

        {/* Facility Windows Overlay */}
        <AnimatePresence>
          {activeWindow && (
            <>
              {/* Dark Overlay Background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-40"
              >
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img10} />
              </motion.div>

              {/* Window Content */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[1080px] items-center justify-center left-1/2 top-1/2 w-[1920px] z-50"
              >
                {/* Treehouse Window */}
                {activeWindow === 'treehouse' && (
                  <div className="h-[600px] overflow-clip relative shrink-0 w-[800px]">
                    {/* Background */}
                    <div className="absolute h-[600px] left-0 top-0 w-[800px]">
                      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBuybg} />
                    </div>

                    {/* Content */}
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[600px] items-start left-1/2 top-[calc(50%+1px)] w-[800px]">
                      <div className="content-stretch flex flex-col gap-[10px] h-[600px] items-center px-[125px] py-[30px] relative shrink-0 w-[800px]">
                        {/* Title */}
                        <div className="relative rounded-[29px] shrink-0 w-full">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center p-[5px] relative w-full">
                              <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-white">樹屋</p>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="relative rounded-[29px] shrink-0 w-full">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center p-[20px] relative w-full">
                              <p className="flex-[1_0_0] font-['GenSenRounded_TW:R',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[28px] text-white whitespace-pre-wrap">協助植林與保護生態。</p>
                            </div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="aspect-[600/280] relative rounded-[29px] shrink-0 w-full">
                          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[29px] size-full" src={imgTreehouseStats} />
                          <div className="flex flex-col items-center justify-center size-full">
                            <div className="content-stretch flex flex-col gap-[20px] items-center justify-center leading-[normal] not-italic p-[30px] relative size-full text-[#ffad57] whitespace-pre-wrap">
                              <p className="font-['GenSenRounded_TW:H',sans-serif] relative shrink-0 text-[40px] w-full">花費時間：45秒</p>
                              <p className="font-['GenSenRounded_TW:R',sans-serif] relative shrink-0 text-[30px] w-full">所需資金：1500</p>
                              <p className="font-['GenSenRounded_TW:R',sans-serif] relative shrink-0 text-[30px] w-full">能量石增加：3000噸</p>
                            </div>
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="content-stretch flex gap-[20px] items-center justify-center pt-[20px] relative shrink-0 w-full">
                          <motion.button
                            onClick={handleTreehouseConfirm}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-[89px] relative shrink-0 w-[193px] cursor-pointer"
                          >
                            <img alt="確認" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgConfirm} />
                          </motion.button>
                          <motion.button
                            onClick={() => setActiveWindow(null)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-[89px] relative shrink-0 w-[192px] cursor-pointer"
                          >
                            <img alt="返回" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Shop Window */}
                {activeWindow === 'shop' && (
                  <div className="h-[600px] overflow-clip relative shrink-0 w-[800px]">
                    {/* Background */}
                    <div className="absolute h-[600px] left-0 top-0 w-[800px]">
                      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBuybg} />
                    </div>

                    {/* Content */}
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[600px] items-center left-1/2 top-1/2 w-[800px]">
                      <div className="content-stretch flex flex-col gap-[10px] h-[600px] items-center px-[50px] py-[50px] relative shrink-0 w-[800px]">
                        {/* Title */}
                        <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[29px] shrink-0 w-[300px]">
                          <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-white">商店</p>
                        </div>

                        {/* Description */}
                        <div className="relative rounded-[29px] shrink-0 w-full">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center p-[20px] relative w-full">
                              <div className="flex-[1_0_0] font-['GenSenRounded_TW:R',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[35px] text-white whitespace-pre-wrap">
                                <p className="mb-0">{`能量石不夠了？還是錢不夠了呢？ `}</p>
                                <p>和別人買能量石，或者把你的能量石賣出換錢吧！</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="bg-[rgba(3,48,98,0.85)] content-stretch flex flex-col font-['GenSenRounded_TW:B',sans-serif] gap-[20px] items-center justify-center leading-[normal] not-italic p-[30px] relative rounded-[20px] shrink-0 text-[#ffad57] text-center whitespace-pre-wrap">
                          <p className="relative shrink-0 text-[40px] w-full">當前市價：3000元／千噸</p>
                          <p className="relative shrink-0 text-[32px] w-full">(每次可購買或販售1000噸的能量石)</p>
                        </div>

                        {/* Buttons */}
                        <div className="content-stretch flex gap-[20px] items-center justify-center pt-[20px] relative shrink-0">
                          <motion.button
                            onClick={handleShopSell}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-[103px] relative shrink-0 w-[338px] cursor-pointer"
                          >
                            <img alt="售出" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img8} />
                          </motion.button>
                          <motion.button
                            onClick={handleShopBuy}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-[100px] relative shrink-0 w-[338px] cursor-pointer"
                          >
                            <img alt="購買" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img9} />
                          </motion.button>
                        </div>
                      </div>
                    </div>

                    {/* Close Button */}
                    <motion.button
                      onClick={() => setActiveWindow(null)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute content-stretch flex items-center justify-center pr-[20px] pt-[20px] right-0 top-0 cursor-pointer"
                    >
                      <div className="h-[100px] relative shrink-0 w-[97px]">
                        <img alt="關閉" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgClose1} />
                      </div>
                    </motion.button>
                  </div>
                )}

                {/* Workshop Window */}
                {activeWindow === 'workshop' && (
                  <div className="h-[600px] overflow-clip relative shrink-0 w-[800px]">
                    {/* Background */}
                    <div className="absolute h-[600px] left-0 top-0 w-[800px]">
                      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgBuybg} />
                    </div>

                    {/* Content */}
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col h-[600px] items-start left-1/2 top-[calc(50%+1px)] w-[800px]">
                      <div className="content-stretch flex flex-col gap-[10px] h-[600px] items-center px-[125px] py-[30px] relative shrink-0 w-[800px]">
                        {/* Title */}
                        <div className="relative rounded-[29px] shrink-0 w-full">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center p-[5px] relative w-full">
                              <p className="font-['GenSenRounded_TW:H',sans-serif] leading-[normal] not-italic relative shrink-0 text-[50px] text-white">工坊</p>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="relative rounded-[29px] shrink-0 w-full">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center p-[20px] relative w-full">
                              <p className="flex-[1_0_0] font-['GenSenRounded_TW:R',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[28px] text-white whitespace-pre-wrap">投資最新技術，研發永續航空燃料～</p>
                            </div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="aspect-[600/280] relative rounded-[29px] shrink-0 w-full">
                          <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[29px] size-full" src={imgWorkshopStats} />
                          <div className="flex flex-col items-center justify-center size-full">
                            <div className="content-stretch flex flex-col gap-[20px] items-center justify-center leading-[normal] not-italic p-[30px] relative size-full text-[#ffad57] whitespace-pre-wrap">
                              <p className="font-['GenSenRounded_TW:H',sans-serif] relative shrink-0 text-[40px] w-full">花費時間：30秒</p>
                              <p className="font-['GenSenRounded_TW:R',sans-serif] relative shrink-0 text-[30px] w-full">所需資金：2000</p>
                              <p className="font-['GenSenRounded_TW:R',sans-serif] relative shrink-0 text-[30px] w-full">建造失去能量的能量石少1500噸</p>
                              <p className="font-['GenSenRounded_TW:B',sans-serif] relative shrink-0 text-[30px] w-full">額外解鎖碳纖維零件</p>
                            </div>
                          </div>
                        </div>

                        {/* Buttons */}
                        <div className="content-stretch flex gap-[20px] items-center justify-center pt-[20px] relative shrink-0 w-full">
                          <motion.button
                            onClick={handleWorkshopConfirm}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-[89px] relative shrink-0 w-[193px] cursor-pointer"
                          >
                            <img alt="確認" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgConfirm} />
                          </motion.button>
                          <motion.button
                            onClick={() => setActiveWindow(null)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-[89px] relative shrink-0 w-[192px] cursor-pointer"
                          >
                            <img alt="返回" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4} />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Error Message */}
        {errorMessage && (
          <Notification type="error" message={errorMessage} />
        )}

        {/* Success Message */}
        {successMessage && (
          <Notification type="success" message={successMessage} />
        )}
      </div>
    </div>
  );
}