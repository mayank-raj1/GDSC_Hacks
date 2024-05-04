import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.jsx';
import NavBar from './components/dashboard/NavBar.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
  },

])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
