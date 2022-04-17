import NavBar from "../components/NavBar"
import Head from "next/head"
import DatePicker from "../components/DatePicker"
import GuestsCount from "../components/GuestsCount"
export default function Index() {
  return (
    <div className="mr-4 pb-[1px] pr-3">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@900&display=swap" rel="stylesheet" />
      </Head>
      <NavBar />
      <body className="mt-4 ml-3 rounded-xl shadow-black-700 shadow-md pr-2 text-left">
        <h1 className="text-3xl font-extrabold font-['Mulish']">Zetgo — amazing hostel for the free spirited traveler</h1>
        <p className="border-l-4 border-[#315680] pl-3 mt-3 text-left pr-2">Egestas pretium aenean pharetra magna ac. Et tortor consequat id porta nibh venenatis cras sed. Vel turpis nunc eget lorem dolor sed</p>
        {/* Booking ticket */}
        <div className="md:grid md:grid-cols-2 md:gap-4 md:gap-x-12 p-12 bg-white rounded-md my-8 flex flex-col">
          <span><h3 className="font-bold text-xl">Check-in</h3>
          <div className="my-2 border-b-2 border-[#315680]-400"><DatePicker/></div>
          </span>
          <span><h3 className="font-bold text-xl">Check-out</h3>
          <div className="my-2 border-b-2 border-[#315680]-400"><DatePicker/></div>
          </span>
          <span><h3 className="font-bold text-xl">Guests</h3>
          <div><GuestsCount/></div></span>
          <span><button type="submit" className="bg-[#315680] text-white font-bold text-lg rounded-md px-28 py-3 mt-8 md:ml-4">Search</button></span>

        </div>
      </body>
    </div>
  )
}
