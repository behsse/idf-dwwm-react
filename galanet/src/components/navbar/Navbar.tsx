import { MainNav } from "./MainNav"
import { TopBar } from "./TopBar"
export const Navbar = () => {
    return (
        <div className="grid gap-2">
            <TopBar/>
            <MainNav/>
        </div>
    )
}
