interface Props {
    text : string,
    href : string
}

export const Links = ({text, href} : Props) => {
    return(
        <li>
            <a href={href}>{text}</a>
        </li>
    )
}