import { Search, Navigation } from 'lucide-react';
import { useState } from 'react';
import { ModalReservationMobile } from './ModalReservationMobile';
import { Ligne } from '../ui/Ligne';

export const Reservation = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            {/* Version mobile */}
            <div className="md:hidden p-5 bg-white border border-zinc-200 rounded-full flex items-center justify-center gap-2" onClick={() => setOpenMenu(true)}>
                <Search className='w-4'/>
                <p>Commencer ma recherche</p>
            </div>

            {/* Version desktop */}
            <div className="hidden md:flex md:justify-center items-center w-full">
                <div className='flex items-center w-full lg:w-3/4 bg-white border py-3 px-5 gap-8 h-full border-zinc-200 rounded-full'>
                    <div className="w-1/3">
                        <p className="text-xs font-bold">Destination</p>
                        <input type="text" placeholder="Rechercher une destination" className="w-full outline-none"/>
                    </div>
                    <Ligne/>
                    <div className="w-1/3">
                        <p className="text-xs font-bold">Dates</p>
                        <input type="text" placeholder="Quand ?" className="w-full outline-none"/>
                    </div>
                    <Ligne/>
                    <div className="w-1/3">
                        <p className="text-xs font-bold">Voyageurs</p>
                        <input type="text" placeholder="Ajouter des voyageurs" className="w-full outline-none"/>
                    </div>
                    <button className="p-3 rounded-full flex items-center justify-center bg-zinc-200 cursor-pointer">
                        <Navigation/>
                    </button>
                </div>
            </div>

            {
                openMenu && <ModalReservationMobile onClik={() => setOpenMenu(false)}/>
            }
        </>
    )
}
