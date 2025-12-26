interface props {
    titre : string
    href : string
    age : number
    admin : boolean
    passion : string[]
    objet : {}
}

export const Test = ({titre, href, age} : props) => {

    return(
        <>
        <h1>{titre}</h1>
        <a href={href}></a>
        <div className="">
            <p className="text-red-500 text-center bg-purple-400">Bonjour</p>
            <p>Il a {age} ans</p>
        </div>
        </>
    )
}