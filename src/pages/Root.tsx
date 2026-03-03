import { Outlet } from 'react-router-dom'
import BottomNav from '@/components/BottomNav/BottomNav'
import MusicPlayer from '@/components/MusicPlayer/MusicPlayer'

const Root = () => {
  return (
    <div className='mobile-shell'>
      <Outlet />
      <MusicPlayer />
      <BottomNav />
    </div>
  )
}

export default Root
