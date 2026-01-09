import { links } from "../../data/link";
import { Button } from "../ui/Button"
import { DiamondPlus } from 'lucide-react';

export const ModalBurgerMenu = () => {
    return (
        <div className="absolute top-full left-0 right-0 -mx-3 md:-mx-5 bg-slate-900 z-50 flex flex-col gap-10 pt-12 min-h-screen p-3 text-base">
            <div className="flex flex-col gap-3">
                <Button icon={<DiamondPlus/>} text="Vider sa soute" link="/" fullWidth className="flex justify-center"/>
                <Button outline text="Établir la liaison" link="/" fullWidth className="flex justify-center"/>
            </div>
            <div className="grid gap-6">
                <p className="text-slate-400">Parcourir</p>
                <nav>
                    <ul className="grid gap-6">
                        {
                            links.map((link, index) => (
                                <li key={index}><a href={link.href} className="text-slate-50">{link.text}</a></li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}