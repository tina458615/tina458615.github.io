import { RouterProvider } from 'react-router';
import { router } from '@/app/routes';
import { GameProvider } from '@/app/context/GameContext';

export default function App() {
  return (
    <GameProvider>
      <RouterProvider router={router} />
    </GameProvider>
  );
}