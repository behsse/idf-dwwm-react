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
        <>
            {/* Version desktop - grid 5 colonnes */}
            <div className="hidden xl:grid xl:grid-cols-5 text-slate-50 gap-6">
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

            {/* Version tablette - scroll horizontal avec carte violette */}
            <div className="hidden md:flex xl:hidden gap-6 overflow-x-auto scrollbar-hide text-slate-50">
                <div className="h-64 md:h-72 lg:h-80 min-w-48 md:min-w-56 lg:min-w-56 bg-purple-600 text-xl md:text-2xl font-bold p-6 flex flex-col gap-5 rounded-lg">
                    <Flame className="w-10 h-10 md:w-12 md:h-12"/>
                    <p className="wrap-break-word">Cargaisons chaudes</p>
                </div>
                {
                    trends.map((trend, index) => (
                        <TrendsCards key={index} img={trend.img} title={trend.title} link={trend.link}/>
                    ))
                }
            </div>

            {/* Version mobile - scroll horizontal sans carte violette */}
            <div className="md:hidden flex gap-6 overflow-x-auto scrollbar-hide text-slate-50">
                {
                    trends.map((trend, index) => (
                        <TrendsCards key={index} img={trend.img} title={trend.title} link={trend.link}/>
                    ))
                }
            </div>
        </>
    )
}
