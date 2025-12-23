import style from "./articles.module.scss"

export const Articles = ({src, text}) => {
    return(
        <div className={style.article}>
            <img src={src} alt="" />
            <div className={style.container}>
                <p>{text}</p>
            </div>
        </div>
    )
}