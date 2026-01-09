import { Reservation } from "../reservation/Reservation"
import { Nav } from "./Nav"
import { Logo } from "../ui/Logo"
import { Search, Globe, Menu } from 'lucide-react';
import Button from "../ui/Button";

const Navbar = () => {

    return (
        <div className="bg-zinc-100 py-3 md:py-5 px-7">
            <div className="w-full max-w-screen-2xl mx-auto">
                {/* Version mobile */}
                <div className="md:hidden grid gap-6">
                    <Reservation/>
                    <Nav/>
                </div>

                {/* Version desktop/tablette */}
                <div className="hidden md:flex md:flex-col gap-6">
                    {/* Top bar avec Logo, Nav et Boutons */}
                    <div className="flex items-center justify-between">
                        <Logo/>
                        <Nav/>
                        <div className="flex items-center gap-4">
                            <div className="hidden lg:block">
                                <Button text="Devenir hôte" link="/"/>
                            </div>
                            <button className="p-3 rounded-full flex items-center justify-center bg-zinc-200 cursor-pointer">
                                <Search/>
                            </button>
                            <button className="p-3 rounded-full flex items-center justify-center bg-zinc-200 cursor-pointer">
                                <Globe/>
                            </button>
                            <button className="p-3 rounded-full flex items-center justify-center bg-zinc-200 cursor-pointer">
                                <Menu/>
                            </button>
                        </div>
                    </div>

                    {/* Barre de réservation */}
                    <Reservation/>
                </div>
            </div>
        </div>
    )
}

export default Navbar