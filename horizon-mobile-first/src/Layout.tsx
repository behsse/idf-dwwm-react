import Navbar from "./components/navbar/Navbar"
import TabBar from "./components/navbar/TabBar"
import type { ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {

    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <main className="flex-1 overflow-y-auto">
                {children}
            </main>
            <div className="md:hidden">
                <TabBar />
            </div>
        </div>
    )
}

export default Layout