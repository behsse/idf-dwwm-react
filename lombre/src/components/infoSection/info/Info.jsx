import style from "./info.module.scss"

export const Info = ({src, alt, title, texts, reverse}) => {
    return(
        <div className={`${style.info} ${reverse ? style.active : ''}`}>
            <div className={style.container}>
                <h3>{title}</h3>
                {
                    texts.map((texts, index) => (
                        <p key={index}>{texts}</p>
                    ))
                }
            </div>
            <img src={src} alt={alt} />
        </div>
    )
}