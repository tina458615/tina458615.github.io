import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Share2, Twitter, Facebook, Link as LinkIcon, Check } from 'lucide-react';
import { useGame } from '@/app/context/GameContext';

export default function SharePage() {
  const navigate = useNavigate();
  const { currentAirplane, saveAirplane } = useGame();
  const [airplaneName, setAirplaneName] = useState('');
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSave = () => {
    if (airplaneName.trim()) {
      saveAirplane(airplaneName);
      setSaved(true);
      setTimeout(() => {
        navigate('/gallery');
      }, 1500);
    } else {
      alert('Please enter an airplane name!');
    }
  };

  const handleCopyLink = () => {
    const link = `${window.location.origin}/airplane/${currentAirplane.id}`;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 p-8">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/workshop')}
          className="flex items-center gap-2 text-white hover:text-pink-200"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>Back to Workshop</span>
        </button>
      </div>

      <div className="max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8 text-center">Share Your Airplane!</h1>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Airplane Preview */}
          <div className="text-center mb-8">
            <div className="flex gap-4 justify-center mb-6 text-6xl">
              <span>{currentAirplane.fuselage?.image || '❓'}</span>
              <span>{currentAirplane.wings?.image || '❓'}</span>
              <span>{currentAirplane.power?.image || '❓'}</span>
            </div>
            <p className="text-gray-600">
              {currentAirplane.fuselage?.name || 'No fuselage'} • {currentAirplane.wings?.name || 'No wings'} • {currentAirplane.power?.name || 'No power'}
            </p>
          </div>

          {/* Name Input */}
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">
              Name Your Airplane
            </label>
            <input
              type="text"
              value={airplaneName}
              onChange={(e) => setAirplaneName(e.target.value)}
              placeholder="e.g., Sky Warrior"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
              disabled={saved}
            />
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            disabled={saved}
            className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white font-bold py-4 rounded-lg mb-6 transition-colors flex items-center justify-center gap-2"
          >
            {saved ? (
              <>
                <Check className="w-5 h-5" />
                Saved!
              </>
            ) : (
              'Save to Gallery'
            )}
          </button>

          {/* Share Options */}
          <div className="border-t-2 border-gray-200 pt-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Share2 className="w-5 h-5" />
              Share With Friends
            </h2>

            <div className="grid grid-cols-3 gap-4">
              <button className="flex flex-col items-center gap-2 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <Twitter className="w-8 h-8 text-blue-500" />
                <span className="text-sm font-semibold text-gray-700">Twitter</span>
              </button>

              <button className="flex flex-col items-center gap-2 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                <Facebook className="w-8 h-8 text-blue-600" />
                <span className="text-sm font-semibold text-gray-700">Facebook</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors relative"
              >
                {copied ? (
                  <>
                    <Check className="w-8 h-8 text-green-500" />
                    <span className="text-sm font-semibold text-green-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <LinkIcon className="w-8 h-8 text-gray-600" />
                    <span className="text-sm font-semibold text-gray-700">Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 bg-purple-50 rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-purple-900">{currentAirplane.launchCount}</div>
                <div className="text-sm text-purple-600">Launches</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-900">
                  {(currentAirplane.fuselage?.cost || 0) + (currentAirplane.wings?.cost || 0) + (currentAirplane.power?.cost || 0)}
                </div>
                <div className="text-sm text-purple-600">Total Cost</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-900">A+</div>
                <div className="text-sm text-purple-600">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
