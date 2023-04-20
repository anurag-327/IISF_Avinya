import './App.css'
import { createBrowserRouter, RouterProvider,Router } from 'react-router-dom'
import Home from './Pages/Home'
import Error from "./Components/Error"
import Iisf from './Pages/Iisf'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import Register from './Pages/Register'
import Results from './Pages/Results'
import Sponsors from './Pages/Sponsors'
import ScrollToTop from './hooks/ScollToTop'
import Event from './Pages/Event'
import Teams from './Pages/Teams'
function App() {
  
  const router=createBrowserRouter([{
    path:"/",
    element:<ScrollToTop><Home/></ScrollToTop>
  },
  {
    path:"/iisf",
    element:<ScrollToTop><Iisf/></ScrollToTop>
  },
  {
    path:"/teams",
    element:<ScrollToTop><Teams/></ScrollToTop>
  },
  {
    path:"/gallery",
    element:<ScrollToTop><Gallery/></ScrollToTop>
  },
  {
    path:"/contact",
    element:<ScrollToTop><Contact/></ScrollToTop>
  },
  {
    path:"/register",
    element:<ScrollToTop><Register/></ScrollToTop>
  },
  {
    path:"/results",
    element:<ScrollToTop><Results/></ScrollToTop>
  },
  {
    path:"/sponsors",
    element:<ScrollToTop><Sponsors/></ScrollToTop>
  },
  {
    path:"/event",
    element:<ScrollToTop><Event/></ScrollToTop>
  },
  {
    path:"*",
    element:<Error />
  }
])
  
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
   
    </>
  )
}

export default App
