import type { ReactNode } from "react"

interface Props {
    outline? : boolean,
    icon? : ReactNode,
    fullWidth? : boolean,
    className? : string,
    text: string,
    link: string
}

export const Button = ({outline, icon, text, link, className, fullWidth} : Props) => {
    return (
        <a href={link} className={`flex items-center gap-2 py-4 px-5 text-slate-50 ${fullWidth ? "w-full" : "w-fit"} rounded-lg ${outline ? "border border-slate-50" : "bg-purple-600"} ${className}`}>{icon}{text}</a>
    )
}
