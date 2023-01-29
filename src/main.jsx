import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import { Home } from './Views/Main/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
    <RouterProvider router={router} />
  </ParallaxProvider>
  </React.StrictMode>
)
