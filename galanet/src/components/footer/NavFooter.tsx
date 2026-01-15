import { Link } from "react-router"

interface links{
    text: string,
    to : string
}

interface Props {
    title : string,
    links : links[]
}

export const NavFooter = ({title, links} : Props) => {
    return (
        <nav className="flex flex-col gap-4 text-slate-50">
            <p className="text-lg font-bold">{title}</p>
            <ul className="grid gap-4">
                {
                    links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.to}>{link.text}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
