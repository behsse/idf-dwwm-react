import { Button } from "../components/ui/Button"
import { Rocket } from 'lucide-react';
import { MailButton } from "../components/ui/MailButton";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full text-slate-50 gap-8">
            <h1 className="text-9xl font-bold">404</h1>
            <h2 className="text-3xl font-bold">Page not found</h2>
            <div className="flex flex-col items-center gap-4">
                <div className="grid gap-2 text-center">
                    <p>Secteur inconnu. Il n'y a rien ici à part des débris de moteurs. Vos coordonnées ont été brouillées par une tempête ionique.</p>
                    <p>Retournez vite au Hub avant que les patrouilles ne vous repèrent !</p>
                </div>
                <Button icon={<Rocket/>} text="Retourner vite au Hub" to="/"/>
            </div>
            <div className="flex flex-col items-center gap-4">
                <p>Des questions sur le butin ? Une suggestion pour améliorer le réseau ? Ouvrez un canal de communication sur notre ligne sécurisée :</p>
                <MailButton/>
            </div>
        </div>
    )
}

export default NotFoundPage