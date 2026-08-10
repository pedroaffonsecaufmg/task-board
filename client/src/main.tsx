// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ClientsPage from './pages/ClientsPage'
import ServiceOrdersPage from './pages/ServiceOrdersPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "clients", element: <ClientsPage /> },
      { path: "service-orders", element: <ServiceOrdersPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)