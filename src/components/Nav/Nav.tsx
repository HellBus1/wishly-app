import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Play, ArrowLeft } from 'lucide-react'

interface NavItem {
  label: string
  path: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  { label: 'Wrapped', path: '/', icon: <Play className='w-4 h-4' /> },
  { label: 'Scrapbook', path: '/scrapbook', icon: <BookOpen className='w-4 h-4' /> }
]

const Nav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className='fixed top-6 left-6 z-50 flex items-center gap-2'
    >
      {location.pathname !== '/' && (
        <button
          onClick={() => navigate(-1)}
          aria-label='Go back'
          className='w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-line text-slate hover:text-ink hover:border-ink/40 transition-all duration-200 shadow-sm'
        >
          <ArrowLeft className='w-4 h-4' />
        </button>
      )}
      <div className='flex items-center gap-1 bg-white/80 backdrop-blur-sm border border-line rounded-full px-2 py-1.5 shadow-sm'>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans tracking-wide transition-all duration-200 ${
                isActive ? 'bg-ink text-offwhite' : 'text-slate hover:text-ink'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          )
        })}
      </div>
    </motion.nav>
  )
}

export default Nav
