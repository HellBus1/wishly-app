import { RouteObject } from 'react-router-dom'
import Wrapped from '@/pages/Wrapped/Wrapped'
import Scrapbook from '@/pages/Scrapbook/Scrapbook'

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Wrapped />
  },
  {
    path: '/scrapbook',
    element: <Scrapbook />
  }
]
