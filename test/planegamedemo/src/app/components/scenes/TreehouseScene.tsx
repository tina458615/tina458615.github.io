import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, TreeDeciduous, Sparkles } from 'lucide-react';

export default function TreehouseScene() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 via-green-700 to-green-500 p-8">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/marketplace')}
          className="flex items-center gap-2 text-white hover:text-green-200"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>返回市集</span>
        </button>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{
              rotate: [-2, 2, -2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            <TreeDeciduous className="w-32 h-32 text-green-300 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-5xl font-bold text-white mb-4">樹屋</h1>
          <p className="text-xl text-white/80">你的秘密基地</p>
        </motion.div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 rounded-xl p-6 cursor-pointer"
            >
              <Sparkles className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">放鬆休息</h3>
              <p className="text-white/80">暫時放下建造工作，享受美景</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 rounded-xl p-6 cursor-pointer"
            >
              <span className="text-5xl block mb-4">📖</span>
              <h3 className="text-2xl font-bold mb-2">閱讀故事</h3>
              <p className="text-white/80">探索傳奇飛機的故事</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 rounded-xl p-6 cursor-pointer"
            >
              <span className="text-5xl block mb-4">🎨</span>
              <h3 className="text-2xl font-bold mb-2">個性化</h3>
              <p className="text-white/80">裝飾你的樹屋空間</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/20 rounded-xl p-6 cursor-pointer"
            >
              <span className="text-5xl block mb-4">🎵</span>
              <h3 className="text-2xl font-bold mb-2">音樂播放器</h3>
              <p className="text-white/80">聆聽輕鬆的音樂</p>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <p className="text-2xl mb-4">🌟</p>
              <p className="text-lg italic">"每個偉大的飛行員都需要一個夢想的地方..."</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}