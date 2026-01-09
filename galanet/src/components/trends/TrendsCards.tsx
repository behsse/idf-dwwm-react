interface Props {
    img : string,
    title: string,
    link: string
}

export const TrendsCards = ({img, title, link} : Props) => {
    return (
        <a
            href={link}
            className="h-64 md:h-72 lg:h-80 xl:h-80 min-w-48 md:min-w-56 lg:min-w-56 xl:min-w-0 bg-cover bg-center p-4 rounded-lg flex items-end"
            style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 50%), url(${img})` }}
        >
            <p className="text-base md:text-lg font-bold">{title}</p>
        </a>
    )
}
