import { Nav } from "../navbar/Nav"
import { X } from 'lucide-react';
import { Where } from "./where/Where";
import { When } from "./when/When";
import { Voyager } from "./voyager/Voyager";
import Button from "../ui/Button";

interface Props {
    onClik : () => void
}
export const ModalReservationMobile = ({onClik} : Props) => {
    return (
        <div className="fixed z-50 inset-0 w-full h-screen bg-zinc-100 p-2 flex flex-col">
            <div className="py-7">
                <Nav>
                    <li>
                        <div onClick={onClik} className="py-3 px-3.5 bg-white border border-zinc-200 rounded-full cursor-pointer">
                            <X className="w-5"/>
                        </div>
                    </li>
                </Nav>
            </div>
            <div className="flex-1 flex flex-col gap-3 overflow-hidden">
                <Where/>
                <When/>
                <Voyager/>
            </div>
            <div className="flex items-center justify-between p-4">
                <button>Tout effacer</button>
                <Button text="Suivant"/>
            </div>
        </div>
    )
}
