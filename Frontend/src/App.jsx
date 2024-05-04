import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.jsx';
import NavBar from './components/dashboard/NavBar.jsx';
import ContactsPage from './components/contacts/ContactsPage.jsx';

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
      {
        path: "contacts/:contactid?",
        element: <ContactsPage />
      }
    ]
  },

])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
