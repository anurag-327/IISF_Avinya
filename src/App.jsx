import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider,Router } from 'react-router-dom'
import Home from './Pages/Home'
import Error from "./Components/Error"
import About from './Pages/About'
import Gallery from './Pages/Gallery'
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
    path:"*",
    element:<Error />
  }
])
  
  return (
   <RouterProvider router={router}/>
  )
}

export default App
