import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.jsx';
import NavBar from './components/dashboard/NavBar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    // errorElement: <ErrorPage />,
    children: [
      { 
        index: true, 
        element: <Dashboard />
      },
      // {
      //   path: "chat/:chatid?",
      //   element: <Chat />,
      // },
    ]
  },

])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
