import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { useGame } from '@/app/context/GameContext';

export default function AirplaneGallery() {
  const navigate = useNavigate();
  const { airplanes } = useGame();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-indigo-700 to-indigo-500 p-8">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/workshop')}
          className="flex items-center gap-2 text-white hover:text-indigo-200"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>返回工坊</span>
        </button>
      </div>

      <h1 className="text-5xl font-bold text-white mb-8 text-center">Airplane Gallery</h1>

      {airplanes.length === 0 ? (
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-12 text-center">
          <ImageIcon className="w-24 h-24 mx-auto mb-6 text-white/50" />
          <p className="text-2xl text-white mb-4">No airplanes yet</p>
          <p className="text-lg text-white/70 mb-6">Build and save your first airplane to see it here!</p>
          <button
            onClick={() => navigate('/workshop')}
            className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-lg hover:bg-indigo-50"
          >
            Go to Workshop
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto">
          {airplanes.map((airplane, index) => (
            <motion.button
              key={airplane.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/airplane/${airplane.id}`)}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex gap-2 justify-center mb-4 text-4xl">
                <span>{airplane.fuselage?.image || '❓'}</span>
                <span>{airplane.wings?.image || '❓'}</span>
                <span>{airplane.power?.image || '❓'}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{airplane.name}</h3>
              <p className="text-sm text-gray-600">Launches: {airplane.launchCount}</p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(airplane.createdAt).toLocaleDateString()}
              </p>
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
}