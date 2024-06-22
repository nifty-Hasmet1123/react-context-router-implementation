import React from 'react'
import ReactDOM from 'react-dom/client'
import BaseRouter from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'
import "./assets/scss/main.scss";

const instance = new BaseRouter();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider 
      router={ instance.router() }
      future={{ v7_startTransition: true }}
    />
  </React.StrictMode>,
)
