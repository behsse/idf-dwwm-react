import { Search } from 'lucide-react';
import { useState } from 'react';
import { ModalReservationMobile } from './ModalReservationMobile';

export const Reservation = () => {

    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
            <div className="p-5 bg-white border border-zinc-200 rounded-full flex items-center justify-center gap-2" onClick={() => setOpenMenu(true)}>
                <Search className='w-4'/>
                <p>Commencer ma recherche</p>
            </div>
            {
                openMenu && <ModalReservationMobile onClik={() => setOpenMenu(false)}/>
            }
        </>
    )
}
