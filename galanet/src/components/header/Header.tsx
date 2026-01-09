import { Button } from "../ui/Button"
import { Rocket } from 'lucide-react';

export const Header = () => {
    return (
        <div className="relative bg-[url(header.png)] bg-cover bg-center rounded-2xl py-20 md:py-24 lg:py-28 xl:py-32 px-6 flex flex-col items-center justify-center text-slate-50 gap-4">
            <h1 className="relative z-10 text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-center max-w-4xl">Écoulez votre stock. Sans laisser de traces.</h1>
            <h2 className="relative z-10 hidden xl:block text-sm md:text-base text-center max-w-2xl">Décrivez votre cargaison, fixez votre prix et attendez que les acheteurs mordent à l'hameçon.</h2>
            <div className="relative z-10">
                <Button icon={<Rocket/>} text="Lancer la transaction" link="/"/>
            </div>
            <div className="absolute inset-0 bg-black/70 rounded-2xl"></div>
        </div>
    )
}
