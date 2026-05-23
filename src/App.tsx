import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './routes'
import { ContentProvider } from './contexts/ContentContext'
import { PlayerProvider } from './contexts/PlayerContext'

const AppRouter = createBrowserRouter([...routes])

function App() {
  return (
    <ContentProvider>
      <PlayerProvider>
        <RouterProvider router={AppRouter} />
      </PlayerProvider>
    </ContentProvider>
  )
}

export default App
