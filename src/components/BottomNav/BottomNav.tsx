import { NavLink, useLocation } from 'react-router-dom'
import { RouteName } from '@/constants/RouteName'

interface NavItem {
  path: string
  label: string
  icon: string
}

const navItems: NavItem[] = [
  { path: RouteName.HOME, label: 'Home', icon: '🏠' },
  { path: RouteName.MOMENTS, label: 'Moments', icon: '📸' },
  { path: RouteName.FAVORITES, label: 'Favorites', icon: '⭐' },
  { path: RouteName.WISHES, label: 'Wishes', icon: '💌' }
]

const BottomNav = () => {
  const location = useLocation()

  return (
    <nav
      className='fixed bottom-0 left-1/2 -translate-x-1/2 z-50 w-full bg-surface border-t border-line'
      style={{ maxWidth: '430px' }}
    >
      <div className='flex items-center justify-around py-2 px-4'>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className='flex flex-col items-center gap-0.5 py-1 px-3'
            >
              <span className='text-base'>{item.icon}</span>
              <span
                className={`text-[10px] font-semibold ${isActive ? 'text-accent' : 'text-mute'}`}
              >
                {item.label}
              </span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

export default BottomNav
