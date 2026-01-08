import type { ReactNode } from "react"

interface Props {
    link? : boolean,
    text? : string,
    icon? : ReactNode,
    href? : string,
    onClick? : () => void
}

const Button = ({link, text, icon, href, onClick} : Props) => {
    return(
        <>
            {
                link ?
                    href ? 
                    <a href={href} className='bg-gray-800 text-slate-200 flex items-center gap-4 px-6 py-3 rounded-full w-fit'>
                        {text}
                    </a>
                    :
                    <button className='bg-gray-800 text-slate-200 flex items-center gap-4 p-4 rounded-full w-fit cursor-pointer'>
                        {icon}
                    </button>
                :
                <button className="p-3 rounded-full flex items-center justify-center bg-zinc-200 cursor-pointer" onClick={onClick}>
                    {icon}
                </button>
            }
        </>
    )
}

export default Button