import Date from "./reservation/Date"
import Destination from "./reservation/Destination"
import { Ligne } from "./ui/Ligne";
import Voyageur from "./reservation/Voyageur"
import Button from "./ui/Button"
import { Navigation } from 'lucide-react';

const Reservation = () => {

    return (
        <div className="bg-white border border-zinc-200 rounded-full flex py-3 px-5 w-2/3 gap-8 items-center h-full max-lg:w-full">
            <Destination/>
            <Ligne/>
            <Date/>
            <Ligne/>
            <Voyageur/>
            <Button link icon={<Navigation/>}/>
        </div>
    )
}

export default Reservation