import { RouteObject } from 'react-router-dom'
import Root from '@/pages/Root'
import HomePage from '@/pages/HomePage/HomePage'
import MomentsPage from '@/pages/MomentsPage/MomentsPage'
import FavoritesPage from '@/pages/FavoritesPage/FavoritesPage'
import WishesPage from '@/pages/WishesPage/WishesPage'
import { RouteName } from './constants/RouteName'

export const routes: RouteObject[] = [
  {
    path: RouteName.HOME,
    element: <Root />,
    children: [
      {
        path: RouteName.HOME,
        element: <HomePage />
      },
      {
        path: RouteName.MOMENTS,
        element: <MomentsPage />
      },
      {
        path: RouteName.FAVORITES,
        element: <FavoritesPage />
      },
      {
        path: RouteName.WISHES,
        element: <WishesPage />
      }
    ]
  }
]
