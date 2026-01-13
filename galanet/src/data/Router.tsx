import { createBrowserRouter } from "react-router"
import Layout from '../Layout'
import App from "../App"
import { LoginPage } from "../pages/LoginPage"
import { LogoLayout } from "../LogoLayout"
import RegisterPage from "../pages/RegisterPage"
import NotFoundPage from "../pages/NotFoundPage"

export const Router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
        {
            path: "/",
            element: <App/>
        },
    ]
  },
  {
    element: <LogoLayout/>,
    children: [
        {
            path : "/login",
            element: <LoginPage/>
        },
        {
            path : "/register",
            element: <RegisterPage/>
        },
        {
          path: "*",
          element: <NotFoundPage/>
        }
    ]
  },
])
