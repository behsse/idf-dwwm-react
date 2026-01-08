import type { ReactNode } from "react"

interface Props {
    outline? : boolean,
    icon? : ReactNode,
    text: string,
    link: string
}

export const Button = ({outline, icon, text, link} : Props) => {
    return (
        <a href={link} className={`flex items-center gap-2 py-4 px-5 text-slate-50 w-fit rounded-lg ${outline ? "border border-slate-50" : "bg-purple-600"}`}>{icon}{text}</a>
    )
}
