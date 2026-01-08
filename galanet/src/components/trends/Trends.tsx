import { TrendsCards } from "./TrendsCards"
import { Flame } from 'lucide-react';

export const Trends = () => {
    const trends = [
        {
            title : "Vaisseaux de Fuite",
            img : "trends/spaceship.png",
            link : "/"
        },
        {
            title : "Arsenal Clandestin",
            img : "trends/weapon.png",
            link : "/"
        },
        {
            title : "Composants & IA",
            img : "trends/ia.png",
            link : "/"
        },
        {
            title : "Reliques Perdues",
            img : "trends/relic.png",
            link : "/"
        }
    ]

    return (
        <div className="grid grid-cols-5 text-slate-50 gap-6">
            <div className="h-80 bg-purple-600 text-2xl font-bold p-6 flex flex-col gap-5 rounded-lg">
                <Flame className="w-12 h-12"/>
                <p className="wrap-break-word">Cargaisons chaudes</p>
            </div>
            {
                trends.map((trend, index) => (
                    <TrendsCards key={index} img={trend.img} title={trend.title} link={trend.link}/>
                ))
            }
        </div>
    )
}
