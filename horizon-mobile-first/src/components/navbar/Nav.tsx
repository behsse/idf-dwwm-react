import { Links } from "./Links"
import type { ReactNode } from "react"

interface NavProps {
    children?: ReactNode
}

export const Nav = ({ children }: NavProps) => {
    const links = [
        {
            text: "Destinations",
            link : "/"
        },
        {
            text: "Expériences",
            link : "/"
        },
        {
            text: "Services",
            link : "/"
        }
    ]
    return (
        <nav className="w-full">
            <ul className="flex items-center justify-around">
                {
                    links.map((link, index) => (
                        <Links key={index} text={link.text} link={link.link} />
                    ))
                }
                {children}
            </ul>
        </nav>
    )
}
