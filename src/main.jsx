import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { RouterProvider } from "react-router/dom";
import Homepage from './Pages/homepage/Homepage.jsx';
import Books from './Pages/Books/books.jsx';
import { router } from './Routes/Routes.jsx';
import BookProvider from './Context/BookContext.jsx';
import { ToastContainer } from 'react-toastify';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </BookProvider>
   
  </StrictMode>,
)
