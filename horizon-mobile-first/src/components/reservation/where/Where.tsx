import { ReservationInput } from "../ReservationInput"
import { Search } from 'lucide-react';
import { DestinationModal } from "./destinations/DestinationModal";

export const Where = () => {
    return (
        <div className="bg-white rounded-xl p-4 flex flex-col flex-1 min-h-0 gap-5">
            <p className="font-bold text-xl">Où ?</p>
            <div className="flex items-center gap-4 w-full border border-gray-300 rounded-lg p-4">
                <Search/>
                <ReservationInput/>
            </div>
            <p>Suggestion de destinations</p>
            <DestinationModal/>
        </div>
    )
}
