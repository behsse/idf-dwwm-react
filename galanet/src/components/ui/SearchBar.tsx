import { Telescope, ArrowBigRight } from 'lucide-react';

export const SearchBar = () => {
    return (
        <div className='flex items-center gap-2 text-slate-50 bg-slate-800 p-2 w-full rounded-lg'>
            <div className='w-8 h-8 flex items-center justify-center'>
                <Telescope className='w-5'/>
            </div>
            <input type="text" placeholder="Fouiller dans les archives des contrebandiers" className="flex-1 outline-none placeholder:text-slate-50 bg-transparent"/>
            <div className='hidden sm:flex items-center justify-center w-10 h-9 bg-purple-600 rounded-lg'>
                <ArrowBigRight className='w-5'/>
            </div>
        </div>
    )
}
