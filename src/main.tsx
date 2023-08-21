import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routes/index.tsx'
import  { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import store from './Redux/store.ts'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <Toaster/>
   <Provider store={store}>
     <RouterProvider router={Routes} />
     </Provider>
  </React.StrictMode>,
)