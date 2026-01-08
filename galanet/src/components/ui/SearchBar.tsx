import { Telescope } from 'lucide-react';
import { ArrowBigRight } from 'lucide-react';

export const SearchBar = () => {
    return (
        <div className='flex items-center gap-2 text-slate-50 bg-slate-800 p-2 w-full rounded-lg'>
            <div className='w-8 h-8 flex items-center justify-center'>
                <Telescope className='w-5'/>
            </div>
            <input type="text" placeholder="Fouiller dans les archives des contrebandiers" className="w-full outline-none placeholder:text-slate-50"/>
            <div className='w-10 h-9 flex items-center justify-center bg-purple-600 rounded-lg'>
                <ArrowBigRight className='w-5'/>
            </div>
        </div>
    )
}
