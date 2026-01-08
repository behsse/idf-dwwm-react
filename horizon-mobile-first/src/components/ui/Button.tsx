interface Props {
    link? : string,
    text? : string
}

const Button = ({link, text} : Props) => {
    return(
        <>
            <a href={link} className='bg-gray-800 text-slate-200 flex items-center gap-4 px-6 py-3 rounded-full w-fit'>
                {text}
            </a>
        </>
    )
}

export default Button