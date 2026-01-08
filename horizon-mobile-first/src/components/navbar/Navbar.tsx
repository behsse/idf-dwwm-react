import { Reservation } from "../reservation/Reservation"
import { Nav } from "./Nav"

const Navbar = () => {

    return (
        <div className="bg-zinc-100 py-3 px-7 grid gap-6">
            <Reservation/>
            <Nav/>
        </div>
    )
}

export default Navbar