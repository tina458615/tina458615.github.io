import { createBrowserRouter } from 'react-router';
import Layout from '@/app/components/Layout';
import StartScreen from '@/app/components/scenes/StartScreen';
import WorkshopScene from '@/app/components/scenes/WorkshopScene';
import MarketplaceScene from '@/app/components/scenes/MarketplaceScene';
import GalleryScene from '@/app/components/scenes/GalleryScene';
import AirplaneInfoPage from '@/app/components/scenes/AirplaneInfoPage';
import SharePage from '@/app/components/scenes/SharePage';
import TreehouseScene from '@/app/components/scenes/TreehouseScene';
import EndingScreen from '@/app/components/scenes/EndingScreen';
import EnergyShopScene from '@/app/components/scenes/EnergyShopScene';
import RedirectToHome from '@/app/components/RedirectToHome';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: StartScreen,
      },
      {
        path: 'workshop',
        Component: WorkshopScene,
      },
      {
        path: 'marketplace',
        Component: MarketplaceScene,
      },
      {
        path: 'energy-shop',
        Component: EnergyShopScene,
      },
      {
        path: 'gallery',
        Component: GalleryScene,
      },
      {
        path: 'airplane/:id',
        Component: AirplaneInfoPage,
      },
      {
        path: 'share',
        Component: SharePage,
      },
      {
        path: 'share/:id',
        Component: SharePage,
      },
      {
        path: 'treehouse',
        Component: TreehouseScene,
      },
      {
        path: 'ending',
        Component: EndingScreen,
      },
      {
        path: '*',
        Component: RedirectToHome,
      },
    ],
  },
]);