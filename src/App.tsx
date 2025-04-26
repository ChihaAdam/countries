
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Nav from './pages/nav'
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: []
  } 
])
function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </ QueryClientProvider>
  )
}

export default App
