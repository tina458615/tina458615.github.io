import { Airplane } from '@/app/context/GameContext';

// Import default airplane images
import img結局圖 from "figma:asset/f8a185723dbf5f02f44330f0844fe59216ae6975.png";
import img引擎 from "figma:asset/e5bf116a6c51aa271883ee90eec7c68e310503bb.png";
import img機翼 from "figma:asset/bc50438fa84b27bf20aef81623a65a228f65282f.png";
import img機身 from "figma:asset/ba89a4fccb97d2de39e1eeb95f06d9692b24b808.png";

// Create a default airplane part structure for gallery display
const createDefaultAirplane = (id: number): Airplane => {
  return {
    id: `default-${id}`,
    name: `飛機NO.${id}`,
    fuselage: {
      id: `default-fuselage-${id}`,
      name: '預設機身',
      type: 'fuselage',
      cost: 0,
      researchTime: 0,
      description: '範例飛機',
      image: img機身,
      carbonType: 'low',
    },
    wings: {
      id: `default-wings-${id}`,
      name: '預設機翼',
      type: 'wings',
      cost: 0,
      researchTime: 0,
      description: '範例飛機',
      image: img機翼,
      carbonType: 'low',
    },
    power: {
      id: `default-power-${id}`,
      name: '預設引擎',
      type: 'power',
      cost: 0,
      researchTime: 0,
      description: '範例飛機',
      image: img引擎,
      carbonType: 'low',
    },
    launchCount: 0,
    createdAt: new Date(Date.now() - (id * 24 * 60 * 60 * 1000)), // Stagger dates by days
    buildTime: 120 + (id * 30), // Varying build times
    finalFunds: 500 + (id * 100),
    finalEnergyStones: 25000 - (id * 1000),
    finalCommonStones: id * 500,
  };
};

// Generate 11 default airplanes (will be combined with player's airplane for 12 total)
export const DEFAULT_AIRPLANES: Airplane[] = Array.from({ length: 11 }, (_, i) => createDefaultAirplane(i + 2));