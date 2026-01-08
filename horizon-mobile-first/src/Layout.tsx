import Navbar from "./components/navbar/Navbar"
import TabBar from "./components/navbar/TabBar"
import type { ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            <Navbar />
            <main>
                {children}
            </main>
            <TabBar />
        </div>
    )
}

export default Layout