import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './routes'
import { ContentProvider } from './contexts/ContentContext'

const AppRouter = createBrowserRouter([...routes])

function App() {
  return (
    <ContentProvider>
      <RouterProvider router={AppRouter} />
    </ContentProvider>
  )
}

export default App
