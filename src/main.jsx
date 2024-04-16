import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Root from './component/Root/Root.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx'
import Login from './component/Login/Login.jsx'
import Reagister from './component/Reagister/Reagister.jsx'
import HeroRegister from './component/HeroRegister/HeroRegister.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home> ,
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Reagister></Reagister>
      },
      {
        path:'/heroregister',
        element:<HeroRegister></HeroRegister>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
