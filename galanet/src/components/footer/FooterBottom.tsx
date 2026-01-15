import { Link } from "react-router"

export const FooterBottom = () => {
    const links = [
        { text: "Chiffrage des Données", to: "/chiffrage" },
        { text: "Traceurs de Navigation", to: "/traceurs" },
        { text: "Code d'Honneur", to: "/code-honneur" },
        { text: "Architecture du Hub", to: "/architecture" }
    ]

    return (
        <nav className="flex gap-10 text-slate-50 py-4">
            {links.map((link, index) => (
                <Link key={index} to={link.to}>
                    {link.text}
                </Link>
            ))}
        </nav>
    )
}
