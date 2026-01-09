interface Props {
    horizontal? : boolean
}

export const Ligne = ({horizontal} : Props) => {
    return (
        <div className={`${horizontal ? "w-full h-px" : "w-px h-full"} bg-zinc-200`}></div>
    )
}
