import Navbar from "./components/navbar/Navbar"
import TabBar from "./components/navbar/TabBar"
import { Outlet } from "react-router"

const Layout = () => {

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <main className="flex-1 overflow-y-auto">
                <Outlet />
            </main>
            <div className="md:hidden">
                <TabBar />
            </div>
        </div>
    )
}

export default Layout