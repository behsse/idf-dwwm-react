export const MainNav = () => {
    const links = [
        {
            text : "Vaisseaux & Engins",
            href : "/"
        },
        {
            text : "Armurerie",
            href : "/"
        },
        {
            text : "Apparence",
            href : "/"
        },
        {
            text : "Ferraille & Droïdes",
            href : "/"
        },
        {
            text : "Ravitaillement & Médic-packs",
            href : "/"
        },
        {
            text : "Cyber-matériel & Cryptage",
            href : "/"
        },
        {
            text : "Reliques & Trésors Interdits",
            href : "/"
        },
        {
            text : "Kits de Survie & Exploration",
            href : "/"
        },
    ]
    return (
        <nav>
            <ul className='flex items-centre justify-between'>
                {
                    links.map((link, index) => (
                        <li key={index}><a href={link.href} className="text-slate-50">{link.text}</a></li>
                    ))
                }
            </ul>
        </nav>
    )
}
