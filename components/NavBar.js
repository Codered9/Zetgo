import Logo from "../tools/logos/logo"
import Hamburger from "../tools/logos/Hamburger"
export default function NavBar() {
    return (
        <div className="flex flex-row bg-white">
            <span className="m-2"><Logo /></span>
            <p className="font-['Nexa_Bold'] text-[2.5rem] font-bold text-[#315680] mx-2 mt-[0.35rem]">Zetgo</p>
            <span className="place-content-end absolute top-3 right-2 mt-5 mr-5"><Hamburger/></span>
        </div>
    )
}