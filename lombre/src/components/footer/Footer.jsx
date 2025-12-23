import { LogoFull } from "../LogoFull"
import { NavbarLinks } from "../navbar/links/NavbarLinks"
import style from "./footer.module.scss"

export const Footer = () => {
    return (
        <div className={style.footer}>
            <LogoFull color="#484e48" width="15rem"/>
            <NavbarLinks subscribe={true}/>
        </div>
    )
}
