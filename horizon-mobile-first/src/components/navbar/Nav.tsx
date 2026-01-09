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
        <nav className="w-full md:w-auto">
            <ul className="flex items-center justify-around md:gap-10">
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
