import { CircleQuestionMark } from 'lucide-react';
import { Ligne } from '../../ui/Ligne';

const MenuModal = () => {
    return (
        <div className='p-5 bg-white rounded-lg grid gap-5 w-58 absolute origin-top-right right-0 top-16' style={{ boxShadow: '0px 0px 16px 0px rgba(0, 0, 0, 0.1)' }}>
            <a href="/" className='flex items-center gap-2'>
                <CircleQuestionMark/>
                Centre d'aide
            </a>    
            <Ligne horizontal/>
            <a href="/" className='flex flex-col gap-1'>
                <span className='font-bold'>Devenir hôte</span>
                Deviens hôte et gagne des revenus supplémentaires
            </a>
            <Ligne horizontal/>
            <div className='flex flex-col gap-3'>
                <a href="/">Parrainer un hôte</a>
                <a href="/">Trouver un co-hôte</a>
            </div>
            <Ligne horizontal/>
            <a href="/">Se connecter ou s'inscrire</a>
        </div>
    )
}

export default MenuModal