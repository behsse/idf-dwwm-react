import { Link } from "react-router"
import { links } from "../../data/link"
import { useState } from "react"
import MegaMenu from "./MegaMenu"

export const MainNav = () => {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <nav className="overflow-x-auto xl:overflow-x-visible scrollbar-hide relative">
            <ul className='flex items-center whitespace-nowrap gap-3 py-4 xl:gap-0 xl:py-0 xl:justify-between'>
                <div className="xl:hidden">
                    <a href="" className="text-slate-50 border border-purple-600 bg-purple-600/25 p-3 rounded-full">Voir plus</a>
                </div>
                {
                    links.map((link, index) => (
                        <li
                            key={index}
                            className="relative"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative inline-block">
                                <Link to={link.href} className="text-slate-50 p-3 border border-slate-400 rounded-full xl:p-0 xl:border-0 xl:rounded-none relative z-10">
                                    {link.text}
                                </Link>
                                {hoveredIndex === index && (
                                    <div className="absolute top-7 left-0 right-0 h-0.5 bg-slate-50 rounded-full hidden xl:block" />
                                )}
                            </div>
                        </li> 
                    ))
                }
            </ul>
            {hoveredIndex !== null && links[hoveredIndex].subCategories && (
                <div
                    className="absolute z-50 left-0 right-0 top-full"
                    onMouseEnter={() => setHoveredIndex(hoveredIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className="h-6" />
                    <MegaMenu
                        title={links[hoveredIndex].text}
                        subCategories={links[hoveredIndex].subCategories}
                    />
                </div>
            )}
            {hoveredIndex !== null && (
                <div
                    className="absolute inset-x-0 top-0 h-full pointer-events-none"
                    style={{ zIndex: 1 }}
                />
            )}
        </nav>
    )
}
