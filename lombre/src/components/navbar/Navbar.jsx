import { Button } from "../button/Button"
import { Logo } from "../Logo"
import { NavbarLinks } from "./links/NavbarLinks"
import style from "./navbar.module.scss"

export const Navbar = () => {
    return(
        <nav className={style.navbar}>
            <Logo color="#484e48" width="3rem"/>
            <div className={style.container}>
                <NavbarLinks subscribe={false}/>
                <Button text="subscribe" href="/"/>
            </div>
        </nav>
    )
}