interface props {
    text: string
    href: string
    textButton: string
}
export const Card = ({text, href, textButton}: props) => {
    return(
        <div className="bg-slate-200 p-6 w-fit rounded-lg text-center grid gap-4">
            <p className="text-2xl">{text}</p>
            <a href={href} className="bg-purple-800 text-slate-50 px-10 py-2 block rounded-lg">{textButton}</a>
        </div>
    )
}