import { Articles } from "./articles/articles"
import style from "./articleSection.module.scss"

export const ArticleSection = () => {
    const articles = [
        {image: "/article1.jpg", text: "How to use mindfullness in your everyday life"},
        {image: "/article2.jpg", text: "What are the best walking meditations"},
        {image: "/article3.jpg", text: "How to go deep into the mind of hope"}
    ]
    return(
        <div className={style.container}>
            <h2>latest articles</h2>
            <div className={style.articles}>
                {
                    articles.map((article, index) => (
                        <Articles key={index} src={article.image} text={article.text}/>
                    ))
                }
            </div>
        </div>
    )
}