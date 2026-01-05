import { Earth } from 'lucide-react';

export const Logo = () => {
    return(
        <a href='/' className='bg-gray-800 text-slate-200 flex items-center gap-4 px-6 py-3 rounded-full w-fit font-bold'>
            <Earth/>
            <p>Horizon</p>
        </a>
    )
}