import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

const TabBar = () => {
    return (
        <nav className='flex items-center justify-center gap-10 bg-zinc-100 p-5'>
            <div className='flex flex-col items-center'>
                <Search/>
                <p>Explorer</p>
            </div>
            <div className='flex flex-col items-center'>
                <Heart/>
                <p>Favoris</p>
            </div>
            <div className='flex flex-col items-center'>
                <CircleUserRound/>
                <p>Connexion</p>
            </div>
        </nav>
    )
}

export default TabBar