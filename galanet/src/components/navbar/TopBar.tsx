import { useState } from "react";
import { Button } from "../ui/Button"
import Logo from "../ui/Logo"
import { SearchBar } from "../ui/SearchBar"
import { DiamondPlus, Menu, X } from 'lucide-react';
import { ModalBurgerMenu } from "./ModalBurgerMenu";

export const TopBar = () => {

    const [openBurgerMenu, setOpenBurgerMenu] = useState(false)

    return (
        <>
            <div className="py-3">
                {/* Layout desktop grand écran */}
                <div className="hidden xl:flex items-center gap-12">
                    <a href="/">
                        <Logo />
                    </a>
                    <div className="flex-1">
                        <SearchBar/>
                    </div>
                    <div className="flex items-center gap-5">
                        <Button outline text="Établir la liaison" link="/"/>
                        <Button icon={<DiamondPlus/>} text="Vider sa soute" link="/"/>
                    </div>
                </div>

                {/* Layout tablette/petit desktop */}
                <div className="hidden lg:flex xl:hidden items-center gap-6">
                    <a href="/">
                        <Logo />
                    </a>
                    <div className="flex-1">
                        <SearchBar/>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button outline text="Établir la liaison" link="/"/>
                        <Button icon={<DiamondPlus/>} text="Vider sa soute" link="/"/>
                    </div>
                </div>

                {/* Layout tablette/mobile */}
                <div className="lg:hidden space-y-5">
                    <div className="flex items-center justify-between relative">
                        <a href="/" className="z-50 relative">
                            <Logo />
                        </a>
                        <div className="hidden md:flex items-center gap-5">
                            <Button outline text="Établir la liaison" link="/"/>
                            <Button icon={<DiamondPlus/>} text="Vider sa soute" link="/"/>
                        </div>
                        <button
                            onClick={() => setOpenBurgerMenu(!openBurgerMenu)}
                            className="md:hidden text-slate-50 z-50 relative"
                        >
                            {openBurgerMenu ? <X className="w-7 h-7"/> : <Menu className="w-7 h-7"/>}
                        </button>
                        {openBurgerMenu && <ModalBurgerMenu/>}
                    </div>
                    <SearchBar/>
                </div>
            </div>

        </>
    )
}
