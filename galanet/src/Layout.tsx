import { Outlet } from "react-router"
import { Navbar } from "./components/navbar/Navbar"

const Layout = () => {
  return (
    <main className="py-3 px-3 md:px-5 bg-slate-900 text-sm">
      <div className="w-full max-w-360 mx-auto grid gap-8">
        <Navbar/>
        <Outlet/>
      </div>
    </main>
  )
}

export default Layout