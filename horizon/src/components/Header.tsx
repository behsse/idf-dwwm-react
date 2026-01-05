import { Navbar } from "./Navbar"
import Reservation from "./Reservation"

const Header = () => {
    return (
        <header className="bg-gray-50 py-2">
            <div className="w-full max-w-screen-2xl mx-auto grid gap-5 py-1">
                <Navbar/>
                <div className="flex justify-center items-center py-3">
                    <Reservation/>
                </div>
            </div>
        </header>
    )
}

export default Header