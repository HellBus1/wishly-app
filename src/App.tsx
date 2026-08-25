import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './routes'
import { ContentProvider } from './contexts/ContentContext'
import { PlayerProvider } from './contexts/PlayerContext'
import { LightboxProvider } from './contexts/LightboxContext'

const AppRouter = createBrowserRouter([...routes])

function App() {
  return (
    <ContentProvider>
      <PlayerProvider>
        <LightboxProvider>
          <RouterProvider router={AppRouter} />
        </LightboxProvider>
      </PlayerProvider>
    </ContentProvider>
  )
}

export default App
