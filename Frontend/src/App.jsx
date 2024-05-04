import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard.jsx';
import NavBar from './components/dashboard/NavBar.jsx';
import ContactsPage from './components/contacts/ContactsPage.jsx';
import ChatPage from './components/chat/ChatPage.jsx';

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
      {
        path: "chat/:chatid?",
        element: <ChatPage />,
      },
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
