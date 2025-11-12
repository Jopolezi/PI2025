import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes'
import { GlobalStyles, SwalStyles } from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <SwalStyles />
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>
)