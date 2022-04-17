import { useState } from "react";
import CalenderIcon from "../tools/logos/Calendar";
export default function DatePicker () {
    const[date, setDate] = useState(new Date);
    console.log("Date ", date)
    return(
        <div className="inline-flex rounded-md">
            <div className="pt-5 pl-2"><CalenderIcon/></div>
            <input type="date" onChange={e=> setDate(e.target.value)} className="py-2 px-4 -ml-4"/>
        </div>
    );
}