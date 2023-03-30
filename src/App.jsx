import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider,Router } from 'react-router-dom'
import Home from './Pages/Home'
import Error from "./Components/Error"
import About from './Pages/About'
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
    path:"*",
    element:<Error />
  }
])
  
  return (
   <RouterProvider router={router}/>
  )
}

export default App
