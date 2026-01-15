import type { ReactNode } from "react"
import { Link } from "react-router"

interface Props {
    outline? : boolean,
    icon? : ReactNode,
    fullWidth? : boolean,
    className? : string,
    text: string,
    to?: string,
    onClick?: () => void
}

export const Button = ({outline, icon, text, to, className, fullWidth, onClick} : Props) => {
    const baseClasses = `flex items-center justify-center gap-2 py-4 px-5 transition text-slate-50 ${fullWidth ? "w-full" : "w-fit"} rounded-lg ${outline ? "border border-slate-50" : "bg-purple-600 hover:bg-purple-700"} ${className}`

    if (onClick && !to) {
        return (
            <button onClick={onClick} className={baseClasses}>
                {icon}{text}
            </button>
        )
    }

    return (
        <Link to={to || "/"} onClick={onClick} className={baseClasses}>
            {icon}{text}
        </Link>
    )
}
