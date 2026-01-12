import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from './Layout.tsx';
import App from './App.tsx'
import { About } from './pages/About.tsx';
import ErrorNotFound from './pages/ErrorNotFound.tsx';

const router = createBrowserRouter([
  {
    element : <Layout/>,
    children: [
      {
        path : "/",
        element : <App/>
      },
      {
        path : "/about",
        element : <About/>
      }
    ]
  },
  {
    path : "*",
    element : <ErrorNotFound/>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
