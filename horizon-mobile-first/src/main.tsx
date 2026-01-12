import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { About } from './pages/About.tsx';
import Layout from './Layout.tsx';
import ErrorNotFound from './pages/ErrorNotFound.tsx';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout><App/></Layout>
  },
  {
    path : "/about",
    element : <Layout><About/></Layout>
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
