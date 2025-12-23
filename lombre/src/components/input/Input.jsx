import style from "./input.module.scss"

export const Input = ({type, placeholder}) => {
    return <input type={type} placeholder={placeholder} className={style.input}/>
}