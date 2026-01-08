interface Props {
    img : string,
    title: string,
    link: string
}

export const TrendsCards = ({img, title, link} : Props) => {
    return (
        <a
            href={link}
            className="h-80 bg-cover bg-center p-2 rounded-lg flex items-end"
            style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 50%), url(${img})` }}
        >
            <p className="text-lg font-bold">{title}</p>
        </a>
    )
}
