import { useNavigate, useParams } from 'react-router';
import { ArrowLeft, Share2, User } from 'lucide-react';
import { useGame } from '@/app/context/GameContext';

export default function AirplaneInfoPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { airplanes } = useGame();

  const airplane = airplanes.find((a) => a.id === id);

  if (!airplane) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-700 p-8 flex items-center justify-center">
        <div className="text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Airplane not found</h2>
          <button
            onClick={() => navigate('/gallery')}
            className="bg-white text-slate-900 px-6 py-3 rounded-lg font-bold"
          >
            Back to Gallery
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-700 p-8">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/gallery')}
          className="flex items-center gap-2 text-white hover:text-slate-300"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>Back to Gallery</span>
        </button>
        <button
          onClick={() => navigate(`/share/${airplane.id}`)}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-bold"
        >
          <Share2 className="w-5 h-5" />
          Share
        </button>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
          <div className="flex gap-4 justify-center mb-6 text-6xl">
            <span>{airplane.fuselage?.image || '❓'}</span>
            <span>{airplane.wings?.image || '❓'}</span>
            <span>{airplane.power?.image || '❓'}</span>
          </div>
          <h1 className="text-4xl font-bold text-center">{airplane.name}</h1>
        </div>

        {/* Details */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <User className="w-6 h-6" />
            Player Data
          </h2>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Airplane ID</div>
              <div className="font-bold text-gray-900">{airplane.id}</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Created Date</div>
              <div className="font-bold text-gray-900">
                {new Date(airplane.createdAt).toLocaleDateString()}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Total Launches</div>
              <div className="font-bold text-gray-900">{airplane.launchCount}</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Status</div>
              <div className="font-bold text-green-600">Active</div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Components</h3>

          <div className="space-y-4">
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{airplane.fuselage?.image}</span>
                <div>
                  <div className="font-bold text-gray-900">{airplane.fuselage?.name}</div>
                  <div className="text-sm text-gray-600">Fuselage</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm text-gray-600">Cost</div>
                  <div className="font-bold text-gray-900">${airplane.fuselage?.cost}</div>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{airplane.wings?.image}</span>
                <div>
                  <div className="font-bold text-gray-900">{airplane.wings?.name}</div>
                  <div className="text-sm text-gray-600">Wings</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm text-gray-600">Cost</div>
                  <div className="font-bold text-gray-900">${airplane.wings?.cost}</div>
                </div>
              </div>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{airplane.power?.image}</span>
                <div>
                  <div className="font-bold text-gray-900">{airplane.power?.name}</div>
                  <div className="text-sm text-gray-600">Power System</div>
                </div>
                <div className="ml-auto text-right">
                  <div className="text-sm text-gray-600">Cost</div>
                  <div className="font-bold text-gray-900">${airplane.power?.cost}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
            <div className="text-sm text-blue-800 font-semibold mb-1">Total Investment</div>
            <div className="text-3xl font-bold text-blue-900">
              ${(airplane.fuselage?.cost || 0) + (airplane.wings?.cost || 0) + (airplane.power?.cost || 0)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
