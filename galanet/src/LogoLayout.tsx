import { Link, Outlet } from "react-router"
import Logo from "./components/ui/Logo"

export const LogoLayout = () => {
    return (
        <main className="h-screen overflow-hidden py-3 px-3 md:px-5 bg-slate-900 text-sm flex flex-col">
        <div className="w-full max-w-360 mx-auto flex flex-col flex-1">
            <div className="py-6">
                <Link to="/">
                    <Logo/>
                </Link>
            </div>
            <div className="flex-1 flex items-center">
                <Outlet/>
            </div>
        </div>
        </main>
    )
}
