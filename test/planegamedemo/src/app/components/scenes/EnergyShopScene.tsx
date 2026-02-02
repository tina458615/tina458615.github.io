import { useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Gem, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useGame } from '@/app/context/GameContext';

export default function EnergyShopScene() {
  const navigate = useNavigate();
  const { funds, energyStones, setFunds, setEnergyStones } = useGame();
  const [buyAmount, setBuyAmount] = useState(1);
  const [sellAmount, setSellAmount] = useState(1);

  const ENERGY_STONE_PRICE = 100; // 每顆能量石的價格

  const handleBuy = () => {
    const totalCost = buyAmount * ENERGY_STONE_PRICE;
    if (funds >= totalCost) {
      setFunds(funds - totalCost);
      setEnergyStones(energyStones + buyAmount);
      alert(`成功購買 ${buyAmount} 顆能量石！`);
    } else {
      alert('資金不足！');
    }
  };

  const handleSell = () => {
    if (energyStones >= sellAmount) {
      const totalEarnings = sellAmount * (ENERGY_STONE_PRICE * 0.8); // 賣出價格是購買價格的80%
      setFunds(funds + totalEarnings);
      setEnergyStones(energyStones - sellAmount);
      alert(`成功出售 ${sellAmount} 顆能量石，獲得 $${totalEarnings}！`);
    } else {
      alert('能量石不足！');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center gap-2 text-white hover:text-blue-200"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>返回市集</span>
        </button>
        <div className="flex gap-4">
          <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2">
            <span className="text-white font-bold">資金: ${funds}</span>
          </div>
          <div className="bg-white/20 backdrop-blur-md rounded-lg px-4 py-2">
            <span className="text-white font-bold">能量石: {energyStones}</span>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-12"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="inline-block mb-4"
        >
          <Gem className="w-24 h-24 text-cyan-300" />
        </motion.div>
        <h1 className="text-5xl font-bold text-white mb-2">能量石店鋪</h1>
        <p className="text-xl text-white/80">購買與交易珍貴的能量石</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Buy Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
            <ShoppingCart className="w-8 h-8" />
            購買能量石
          </h2>

          <div className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <Gem className="w-16 h-16 text-blue-500" />
              </motion.div>
              <div className="text-6xl font-bold text-blue-900">×{buyAmount}</div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => setBuyAmount(Math.max(1, buyAmount - 1))}
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full"
              >
                <Minus className="w-6 h-6" />
              </button>
              <div className="text-2xl font-bold text-gray-700 w-20 text-center">{buyAmount}</div>
              <button
                onClick={() => setBuyAmount(buyAmount + 1)}
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full"
              >
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">單價：</span>
              <span className="font-bold text-gray-900">${ENERGY_STONE_PRICE}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">數量：</span>
              <span className="font-bold text-gray-900">{buyAmount}</span>
            </div>
            <div className="border-t-2 border-blue-200 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="text-lg font-bold text-gray-700">總計：</span>
                <span className="text-2xl font-bold text-blue-600">${buyAmount * ENERGY_STONE_PRICE}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleBuy}
            disabled={funds < buyAmount * ENERGY_STONE_PRICE}
            className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors"
          >
            購買
          </button>
        </div>

        {/* Sell Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-green-900 mb-6 flex items-center gap-3">
            <Gem className="w-8 h-8 text-green-600" />
            出售能量石
          </h2>

          <div className="mb-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <motion.div
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                <Gem className="w-16 h-16 text-green-500" />
              </motion.div>
              <div className="text-6xl font-bold text-green-900">×{sellAmount}</div>
            </div>

            <div className="flex items-center justify-center gap-4 mb-6">
              <button
                onClick={() => setSellAmount(Math.max(1, sellAmount - 1))}
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full"
              >
                <Minus className="w-6 h-6" />
              </button>
              <div className="text-2xl font-bold text-gray-700 w-20 text-center">{sellAmount}</div>
              <button
                onClick={() => setSellAmount(Math.min(energyStones, sellAmount + 1))}
                className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full"
              >
                <Plus className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">收購價：</span>
              <span className="font-bold text-gray-900">${ENERGY_STONE_PRICE * 0.8}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700">數量：</span>
              <span className="font-bold text-gray-900">{sellAmount}</span>
            </div>
            <div className="border-t-2 border-green-200 pt-2 mt-2">
              <div className="flex justify-between">
                <span className="text-lg font-bold text-gray-700">獲得：</span>
                <span className="text-2xl font-bold text-green-600">${sellAmount * ENERGY_STONE_PRICE * 0.8}</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleSell}
            disabled={energyStones < sellAmount}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors"
          >
            出售
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-5xl mx-auto mt-8">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold mb-3">關於能量石</h3>
          <p className="text-white/80 mb-2">
            能量石是稀有的資源，可用於強化飛機零件和解鎖特殊功能。
          </p>
          <p className="text-white/80">
            💡 提示：能量石的出售價格為購買價格的 80%
          </p>
        </div>
      </div>
    </div>
  );
}
