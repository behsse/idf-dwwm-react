import BurgerMenu from "./navbar/burgerMenu/BurgerMenu";
import { Logo } from "./navbar/Logo"
import { Nav } from "./navbar/Nav"
import Button from "./ui/Button"
import { Search } from 'lucide-react';
import { Globe } from 'lucide-react';

export const Navbar = () => {

    return(
        <nav className="px-4 flex items-center justify-between ">
            <Logo/>
            <Nav/>
            <div className="flex items-center gap-4">
                <div className="hidden lg:block">
                    <Button link text="Devenir hôte" href="/"/>
                </div>
                <Button icon={<Search/>}/>
                <Button icon={<Globe/>}/>
                <BurgerMenu/>
            </div>
        </nav>
    )
}