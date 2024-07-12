import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignIn from "./auth/sign-in/index.jsx"
import Home from './home/index.jsx'
import Dashboard from './dashboard/index.jsx'


const route = createBrowserRouter([
  {
    element:<App></App>,
    children:[
      {
        path:"/",
        element :<Home/>
      },
      {
        path:"/dashboard",
        element :<Dashboard/>
      },

    ]
  },
  {
    path:"/auth/sign-in",
    element:<SignIn></SignIn>
  }
]
 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
