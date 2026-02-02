import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { DEFAULT_AIRPLANES } from '@/app/data/defaultAirplanes';

export interface AirplanePart {
  id: string;
  name: string;
  type: 'fuselage' | 'wings' | 'power';
  cost: number;
  researchTime: number; // in seconds
  energyCost?: number; // energy stones required (for wings and power)
  normalStonesReward?: number; // normal stones rewarded (for fuselage)
  description: string; // part description
  image: string;
  requiresWorkshop?: boolean; // requires workshop upgrade to unlock
  carbonType: 'high' | 'low'; // carbon emission type for ending determination
}

export interface Airplane {
  id: string;
  name: string;
  fuselage: AirplanePart | null;
  wings: AirplanePart | null;
  power: AirplanePart | null;
  launchCount: number;
  createdAt: Date;
  // Build time and resource tracking
  buildTime: number; // Total build time in seconds
  finalFunds: number; // Remaining funds when airplane was completed
  finalEnergyStones: number; // Remaining energy stones
  finalCommonStones: number; // Remaining common stones
}

interface GameState {
  funds: number;
  commonStones: number;
  energyStones: number;
  isResearching: boolean;
  researchEndTime: number | null;
  currentAirplane: Airplane;
  airplanes: Airplane[];
  facilityLocked: boolean;
  workshopUnlocked: boolean;
  energyReduction: number; // Energy stone reduction from workshop upgrade
  treehouseLocked: boolean;
  treehouseEndTime: number | null;
  workshopLocked: boolean;
  workshopEndTime: number | null;
}

interface GameContextType extends GameState {
  setFunds: (funds: number) => void;
  setCommonStones: (stones: number) => void;
  setEnergyStones: (stones: number) => void;
  startResearch: (duration: number) => void;
  completeResearch: () => void;
  selectPart: (part: AirplanePart) => void;
  launchAirplane: () => void;
  saveAirplane: (name: string) => void;
  lockFacility: () => void;
  unlockFacility: () => void;
  deductFunds: (amount: number) => boolean;
  addCommonStones: (amount: number) => void;
  sellEnergyStones: (amount: number) => boolean;
  buyEnergyStones: (amount: number) => boolean;
  unlockWorkshop: () => boolean;
  startTreehouseResearch: () => void;
  completeTreehouse: () => void;
  startWorkshopResearch: () => void;
  completeWorkshop: () => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [funds, setFunds] = useState(500);
  const [commonStones, setCommonStones] = useState(0);
  const [energyStones, setEnergyStones] = useState(25000);
  const [isResearching, setIsResearching] = useState(false);
  const [researchEndTime, setResearchEndTime] = useState<number | null>(null);
  const [facilityLocked, setFacilityLocked] = useState(false);
  const [airplanes, setAirplanes] = useState<Airplane[]>([]);
  const [currentAirplane, setCurrentAirplane] = useState<Airplane>({
    id: 'current',
    name: 'Untitled Airplane',
    fuselage: null,
    wings: null,
    power: null,
    launchCount: 0,
    createdAt: new Date(),
    buildTime: 0,
    finalFunds: 0,
    finalEnergyStones: 0,
    finalCommonStones: 0,
  });
  const [workshopUnlocked, setWorkshopUnlocked] = useState(false);
  const [energyReduction, setEnergyReduction] = useState(0);
  const [treehouseLocked, setTreehouseLocked] = useState(false);
  const [treehouseEndTime, setTreehouseEndTime] = useState<number | null>(null);
  const [workshopLocked, setWorkshopLocked] = useState(false);
  const [workshopEndTime, setWorkshopEndTime] = useState<number | null>(null);

  // Auto-increment funds every second
  useEffect(() => {
    const interval = setInterval(() => {
      setFunds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const startResearch = (duration: number) => {
    console.log('🔬 GameContext.startResearch 被調用, duration:', duration, '秒');
    setIsResearching(true);
    setResearchEndTime(Date.now() + duration * 1000);
    setFacilityLocked(true);
    console.log('🔬 GameContext: isResearching 設置為 true, researchEndTime:', new Date(Date.now() + duration * 1000).toLocaleTimeString());
  };

  const completeResearch = () => {
    setIsResearching(false);
    setResearchEndTime(null);
    setFacilityLocked(false);
  };

  const selectPart = (part: AirplanePart) => {
    setCurrentAirplane((prev) => ({
      ...prev,
      [part.type]: part,
      // Accumulate build time
      buildTime: prev.buildTime + part.researchTime,
    }));
  };

  const launchAirplane = () => {
    setCurrentAirplane((prev) => ({
      ...prev,
      launchCount: prev.launchCount + 1,
    }));
  };

  const saveAirplane = (name: string) => {
    const newAirplane = {
      ...currentAirplane,
      id: Date.now().toString(),
      name,
      createdAt: new Date(),
      finalFunds: funds,
      finalEnergyStones: energyStones,
      finalCommonStones: commonStones,
    };
    
    // Limit to 24 airplanes (2 pages in gallery)
    setAirplanes((prev) => {
      const updated = [...prev, newAirplane];
      return updated.slice(-24); // Keep only the last 24 airplanes
    });
    
    // Reset current airplane
    setCurrentAirplane({
      id: 'current',
      name: 'Untitled Airplane',
      fuselage: null,
      wings: null,
      power: null,
      launchCount: 0,
      createdAt: new Date(),
      buildTime: 0,
      finalFunds: 0,
      finalEnergyStones: 0,
      finalCommonStones: 0,
    });
  };

  const lockFacility = () => setFacilityLocked(true);
  const unlockFacility = () => setFacilityLocked(false);

  const deductFunds = (amount: number): boolean => {
    if (funds >= amount) {
      setFunds(funds - amount);
      return true;
    }
    return false;
  };

  const addCommonStones = (amount: number) => {
    setCommonStones(commonStones + amount);
  };

  const sellEnergyStones = (amount: number): boolean => {
    if (energyStones >= amount) {
      setEnergyStones(energyStones - amount);
      // 1000噸能量石賣3000元，即每噸3元
      const revenue = (amount / 1000) * 3000;
      setFunds(funds + revenue);
      return true;
    }
    return false;
  };

  const buyEnergyStones = (amount: number): boolean => {
    // 1000噸能量買3000元，即每噸3元
    const cost = (amount / 1000) * 3000;
    if (funds >= cost) {
      setEnergyStones(energyStones + amount);
      setFunds(funds - cost);
      return true;
    }
    return false;
  };

  const unlockWorkshop = (): boolean => {
    if (funds >= 2000) {
      setFunds(funds - 2000);
      setWorkshopUnlocked(true);
      setEnergyReduction(1500); // Reduce energy stone consumption by 1500 tons
      return true;
    }
    return false;
  };

  const startTreehouseResearch = () => {
    const duration = 45; // 45 seconds
    console.log('🌳 GameContext.startTreehouseResearch 被調用, duration:', duration, '秒');
    setTreehouseLocked(true);
    setTreehouseEndTime(Date.now() + duration * 1000);
    console.log('🌳 GameContext: treehouseLocked 設置為 true, treehouseEndTime:', new Date(Date.now() + duration * 1000).toLocaleTimeString());
  };

  const completeTreehouse = () => {
    setTreehouseLocked(false);
    setTreehouseEndTime(null);
  };

  const startWorkshopResearch = () => {
    const duration = 30; // 30 seconds
    console.log('🛠️ GameContext.startWorkshopResearch 被調用, duration:', duration, '秒');
    setWorkshopLocked(true);
    setWorkshopEndTime(Date.now() + duration * 1000);
    console.log('🛠️ GameContext: workshopLocked 設置為 true, workshopEndTime:', new Date(Date.now() + duration * 1000).toLocaleTimeString());
  };

  const completeWorkshop = () => {
    setWorkshopLocked(false);
    setWorkshopEndTime(null);
  };

  const resetGame = () => {
    setFunds(500);
    setCommonStones(0);
    setEnergyStones(25000);
    setIsResearching(false);
    setResearchEndTime(null);
    setFacilityLocked(false);
    setAirplanes([]);
    setCurrentAirplane({
      id: 'current',
      name: 'Untitled Airplane',
      fuselage: null,
      wings: null,
      power: null,
      launchCount: 0,
      createdAt: new Date(),
      buildTime: 0,
      finalFunds: 0,
      finalEnergyStones: 0,
      finalCommonStones: 0,
    });
    setWorkshopUnlocked(false);
    setEnergyReduction(0);
    setTreehouseLocked(false);
    setTreehouseEndTime(null);
    setWorkshopLocked(false);
    setWorkshopEndTime(null);
  };

  const value: GameContextType = {
    funds,
    commonStones,
    energyStones,
    isResearching,
    researchEndTime,
    currentAirplane,
    airplanes,
    facilityLocked,
    workshopUnlocked,
    energyReduction,
    treehouseLocked,
    treehouseEndTime,
    workshopLocked,
    workshopEndTime,
    setFunds,
    setCommonStones,
    setEnergyStones,
    startResearch,
    completeResearch,
    selectPart,
    launchAirplane,
    saveAirplane,
    lockFacility,
    unlockFacility,
    deductFunds,
    addCommonStones,
    sellEnergyStones,
    buyEnergyStones,
    unlockWorkshop,
    startTreehouseResearch,
    completeTreehouse,
    startWorkshopResearch,
    completeWorkshop,
    resetGame,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};