import { useState } from "react"
import GuestLogo from "../tools/logos/GuestLogo";

export default function GuestsCount() {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(1);
    const [display, setDisplay] = useState(true);
    console.log(display);
    function decrement(value) {
        if (value > 0) {
            return value - 1;
        }
        else {
            return value
        }
    }
    function increment(value) {
        if (value < 2) {
            return value + 1;
        }
        else {
            return value
        }
    }
    return (
        <div className="">
            <p onClick={e => setDisplay(!display)} className="text-xl ml-2 mt-2 inline-flex "> <span className=" mr-4"><GuestLogo/></span>{
                adults > 0 ? `${adults} adult,` : ''} {
                    children > 0 ? `${children} children` : ''
                }
                { adults===0 && children===0 ? 'None' : ''}</p>
            {display ? <div className="rounded-xl shadow-black-700 shadow-md fixed bg-white pr-4 pb-2">
                <ul className="pl-4 py-2 pr-0 mr-0">
                    <li className="my-4">
                        <span className="inline-flex">
                            <h1 className=" font-bold text-xl">Adult</h1>
                            <div className="text-lg font-bold ml-[3.35rem]">
                                <button onClick={e => setAdults(decrement(adults))} className="mx-2 border-2 rounded-md py-1 px-3 text-2xl">-</button>
                                <span className="px-4">{adults}</span>
                                <button onClick={e => setAdults(increment(adults))} className="ml-2 border-2 mr-0 rounded-md py-1 px-3 text-2xl">+</button>
                            </div>
                        </span>
                    </li>
                    <li className="">
                        <span className="inline-flex">
                            <h1 className=" font-bold text-xl">Children</h1>
                            <div className="text-lg font-bold ml-[1.61rem]">
                                <button onClick={e => setChildren(decrement(children))} className="mx-2 border-2 rounded-md py-1 px-3 text-2xl">-</button>
                                <span className="px-4">{children}</span>
                                <button onClick={e => setChildren(increment(children))} className="ml-2 mr-o border-2 rounded-md py-1 px-3 text-2xl">+</button>
                            </div>
                        </span></li>
                </ul>
            </div> : ''}
        </div>
    )
}