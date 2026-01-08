import { Place } from "./Place"

export const DestinationModal = () => {
    const places = [
        {
            city : "À proximité",
            description : "Découvrez les options à proximité"
        },
        {
            city : "Paris",
            description : "Pour son romantisme éternel et la Tour Eiffel"
        },
        {
            city : "Marseille",
            description : "Pour l'ensoleillement du Vieux-Port et les calanques"
        },
        {
            city : "Lyon",
            description : "Pour sa gastronomie d'excellence et le Vieux Lyon"
        },
        {
            city : "Toulouse",
            description : "Pour voir la vie en rose au cœur du Sud-Ouest"
        },
        {
            city : "Nice",
            description : "Pour la douceur de vivre sur la Promenade des Anglais"
        },
        {
            city : "Nantes",
            description : "Pour l'imaginaire des Machines de l'île et les bords de Loire"
        },
        {
            city : "Montpellier",
            description : "Pour son dynamisme méditerranéen et la Place de la Comédie"
        },
        {
            city : "Strasbourg",
            description : "Pour le charme de la Petite France et sa cathédrale"
        },
        {
            city : "Bordeaux",
            description : "Pour l'élégance de ses quais et ses vins prestigieux"
        },
        {
            city : "Lille",
            description : "Pour la chaleur de l'accueil et l'architecture flamande"
        },
        {
            city : "Rennes",
            description : "Pour une immersion authentique en terre bretonne"
        },
        {
            city : "Reims",
            description : "Pour pétiller au cœur des caves de Champagne"
        },
        {
            city : "Saint-Étienne",
            description : "Pour son design créatif aux portes de la nature"
        },
        {
            city : "Toulon",
            description : "Pour profiter de sa rade impressionnante et du mont Faron"
        },
        {
            city : "Le Havre",
            description : "Pour son architecture visionnaire classée à l'UNESCO"
        }
    ]
    return (
        <div className="flex-1 overflow-y-auto">
            {
                places.map((place, index) => (
                    <Place key={index} city={place.city} description={place.description}/>
                ))
            }
        </div>
    )
}
