import { FooterBottom } from "./FooterBottom"
import { NavFooter } from "./NavFooter"

const Footer = () => {
    const footerSections = [
        {
            title: "L'équipage",
            links: [
                { text: "L'histoire du Réseau", to: "/histoire" },
                { text: "Préservation des Systèmes", to: "/preservation" },
                { text: "Fréquences Publiques", to: "/frequences" },
                { text: "Avis de Recherche", to: "/avis-recherche" },
                { text: "Compatibilité Universelle", to: "/compatibilite" }
            ]
        },
        {
            title: "Guide de vol",
            links: [
                { text: "Manuel du Contrebandier", to: "/manuel" },
                { text: "Scan de Sûreté", to: "/scan" },
                { text: "Terminaux de Poche", to: "/terminaux" },
                { text: "Radar de Bord", to: "/radar" }
            ]
        },
        {
            title: "Station de secours",
            links: [
                { text: "Centre de Transmission", to: "/transmission" },
                { text: "Écouler son Butin", to: "/ecouler" },
                { text: "Acquérir du Matos", to: "/matos" },
                { text: "Assurance Mercenaire", to: "/assurance" }
            ]
        }
    ]

    return (
        <footer className="grid gap-10 pt-20">
            <div className="flex justify-between">
                {footerSections.map((section, index) => (
                    <NavFooter key={index} title={section.title} links={section.links} />
                ))}
            </div>
            <FooterBottom/>
        </footer>
    )
}

export default Footer