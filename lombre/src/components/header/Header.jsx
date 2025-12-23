import { LogoFull } from "../LogoFull"
import style from "./header.module.scss"

export const Header = () => {
    return (
        <header className={style.header}>
            <LogoFull color="#484e48" width="60rem"/>
        </header>
    )
}