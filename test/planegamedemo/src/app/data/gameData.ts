import { AirplanePart } from '@/app/context/GameContext';

// Import airplane part images
import img硬木機身 from "figma:asset/3259ff66b15922367efdbb3d3682673ff9f1ee5e.png";
import img金屬機身 from "figma:asset/b9d3a0b02a7cc161c5d0157ebdc928c069a8940a.png";
import img碳纖維機身 from "figma:asset/405148514789eefcd5a89d47657c87b8ea30d559.png";

// Import wing images
import img硬木機翼 from "figma:asset/00565327d591df2faded0f081abc632b354b5a1b.png";
import img金屬機翼 from "figma:asset/77d39e554ce0fbffb72a919b841f76ac060369ad.png";
import img厚紙板機翼 from "figma:asset/976d75ade3f4672024a3783bb842e56f800f2965.png";

// Import power system images
import img木頭螺旋槳 from "figma:asset/8fec1b04e8866a3b10072fdd3975fa8d34d04343.png";
import img厚紙板螺旋槳 from "figma:asset/93738a2fbe4aac1931b847b78b512439c18fe9a5.png";
import img金屬渦輪引擎 from "figma:asset/e9328403d437470a5f845319ebedcae13e0113ed.png";

export const AIRPLANE_PARTS: AirplanePart[] = [
  // Fuselage Parts
  {
    id: 'fuselage_1',
    name: '硬木材料機身',
    type: 'fuselage',
    cost: 200,
    researchTime: 120,
    normalStonesReward: 5000,
    description: '自然動力，天然以原木打造的厚實機身，結構單純而穩定，帶有自然工藝感，飛行時給人踏實安心的印象。的尚好～',
    image: img硬木機身,
    carbonType: 'low',
  },
  {
    id: 'fuselage_2',
    name: '金屬長筒型機身',
    type: 'fuselage',
    cost: 500,
    researchTime: 50,
    normalStonesReward: 15000,
    description: '由金屬板材打造的長筒結構，外型厚重醒目，給人強烈工業感與存在感。',
    image: img金屬機身,
    carbonType: 'high',
  },
  {
    id: 'fuselage_3',
    name: '碳纖維機身',
    type: 'fuselage',
    cost: 300,
    researchTime: 20,
    normalStonesReward: 8000,
    description: '輕量又堅固的先進材料機身，外觀低調但效率極高。',
    image: img碳纖維機身,
    requiresWorkshop: true,
    carbonType: 'low',
  },
  // Wing Parts
  {
    id: 'wings_1',
    name: '硬木材料機翼',
    type: 'wings',
    cost: 200,
    researchTime: 120,
    normalStonesReward: 5000,
    description: '以厚實木材打造的機翼，結構簡單但可靠，飛行時給人穩定、緩慢前進的感覺。',
    image: img硬木機翼,
    carbonType: 'low',
  },
  {
    id: 'wings_2',
    name: '金屬長筒型機翼',
    type: 'wings',
    cost: 500,
    researchTime: 50,
    normalStonesReward: 15000,
    description: '厚重金屬結構延伸出的機翼，外型強悍，帶有濃厚工業風格。',
    image: img金屬機翼,
    carbonType: 'high',
  },
  {
    id: 'wings_3',
    name: '厚紙板機翼',
    type: 'wings',
    cost: 200,
    researchTime: 120,
    normalStonesReward: 5000,
    description: '厚重金屬結構延伸出的機翼，外型強悍，帶有濃厚工業風格。',
    image: img厚紙板機翼,
    carbonType: 'low',
  },
  // Power Parts
  {
    id: 'power_1',
    name: '木頭螺旋槳',
    type: 'power',
    cost: 200,
    researchTime: 120,
    energyCost: 5000,
    description: '以實木削製的螺旋槳，轉動節奏緩慢而穩定，飛行時給人安心可靠的感覺。',
    image: img木頭螺旋槳,
    carbonType: 'low',
  },
  {
    id: 'power_2',
    name: '厚紙板螺旋槳',
    type: 'power',
    cost: 200,
    researchTime: 120,
    energyCost: 5000,
    description: '多層紙板壓製成型，重量輕、結構單純，是早期飛行常見的實驗動力。',
    image: img厚紙板螺旋槳,
    carbonType: 'low',
  },
  {
    id: 'power_3',
    name: '金屬長筒型渦輪引擎',
    type: 'power',
    cost: 500,
    researchTime: 50,
    energyCost: 5000,
    description: '厚重金屬構成的渦輪引擎，聲響低沉有力，展現強烈工業風格。',
    image: img金屬渦輪引擎,
    carbonType: 'high',
  },
];

export const INVESTMENT_PLANS = [
  {
    id: 'invest_1',
    name: 'Quick Returns',
    duration: '1 Day',
    returns: '5%',
    minInvestment: 500,
  },
  {
    id: 'invest_2',
    name: 'Steady Growth',
    duration: '3 Days',
    returns: '15%',
    minInvestment: 1000,
  },
  {
    id: 'invest_3',
    name: 'High Yield',
    duration: '7 Days',
    returns: '35%',
    minInvestment: 2000,
  },
];

export const ENERGY_MISSIONS = [
  {
    id: 'mission_1',
    name: 'Collect Solar Energy',
    reward: 5,
    difficulty: 'Easy',
  },
  {
    id: 'mission_2',
    name: 'Wind Farm Collection',
    reward: 10,
    difficulty: 'Medium',
  },
  {
    id: 'mission_3',
    name: 'Rare Crystal Mining',
    reward: 20,
    difficulty: 'Hard',
  },
];