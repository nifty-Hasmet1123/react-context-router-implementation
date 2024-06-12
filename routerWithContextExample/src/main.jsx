import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './router/routerConfig.jsx'
import { ThemeProvider } from './utils/context/ThemeProvider.jsx'
import { RouterProvider } from 'react-router-dom'

// when using react Router the best way to do this is on the main.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={ router }/>
    </ThemeProvider>
  </React.StrictMode>,
)
