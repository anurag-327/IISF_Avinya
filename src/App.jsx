import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider,Router } from 'react-router-dom'
import Home from './Pages/Home'
import Error from "./Components/Error"
import About from './Pages/About'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import Results from './Pages/Results'
function App() {
  
  const router=createBrowserRouter([{
    path:"/",
    element:<Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/gallery",
    element:<Gallery/>
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/results",
    element:<Results/>
  },
  {
    path:"*",
    element:<Error />
  }
])
  
  return (
   <RouterProvider router={router}/>
  )
}

export default App
