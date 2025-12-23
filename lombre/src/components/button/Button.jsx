import style from "./button.module.scss"

export const Button = ({text, href}) => {
    return <a href={href} className={style.button}>{text}</a>
}