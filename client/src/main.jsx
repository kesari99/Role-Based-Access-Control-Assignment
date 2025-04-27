import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './context/auth-context'
import BlogProvider from './context/blog-context'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 
  <AuthProvider>
    <BlogProvider>
  
    <App />
    </BlogProvider>
  </AuthProvider>
  </BrowserRouter>
)
