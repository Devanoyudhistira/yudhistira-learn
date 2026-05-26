import Navbar from "@/app/components/student/navbar";
import { Inter } from "next/font/google";
import { Calendar2 } from "react-bootstrap-icons";
import { Calendar } from "react-bootstrap-icons";
import { CalendarFill } from "react-bootstrap-icons";
const poppins = Inter({})
export default function Page() {
    return (
        <main className="w-screen flex flex-col items-center" >
            <Navbar />
            <div className={"w-[90%] px-4 py-2 mt-4 h-50 rounded-3xl flex flex-col justify-between bg-linear-to-t from-blue-800 to-blue-700  " + poppins.className} >
                <div>
                    <h2 className="text-xl font-medium capitalize text-gray-300" > Semester 2025/2026 </h2>
                    <h1 className="text-3xl font-bold capitalize text-white" >Kehadiran</h1>
                </div>
                <div className="w-full self-end justify-self-end px-4 flex justify-evenly items-center  gap-3" >
                    <div className="flex w-25 h-20 p-4 rounded-3xl bg-gray-100/10 items-center justify-center gap-14" >
                        <div className="flex flex-col items-center justify-center" >
                            <h2 className="text-2xl font-bold text-white" > 12 </h2>
                            <h4 className="text-xl text-red-600 font-medium" > alfa </h4>
                        </div>
                    </div>
                    <div className="flex w-25 h-20 p-4 rounded-3xl bg-gray-100/10 items-center justify-center gap-14" >
                        <div className="flex flex-col items-center justify-center" >
                            <h2 className="text-2xl font-bold text-white" > 12 </h2>
                            <h4 className="text-xl text-sky-300 font-medium" > hadir </h4>
                        </div>
                    </div>
                    <div className="flex w-25 h-20 p-4 rounded-3xl bg-gray-100/10 items-center justify-center gap-14" >
                        <div className="flex flex-col items-center justify-center" >
                            <h2 className="text-2xl text-white font-bold" > 12 </h2>
                            <h4 className="text-xl text-green-400 font-medium" > sakit </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-4 w-full flex flex-col px-4" >
                <div className="flex items-center gap-2" >
                    <h1 className="w-max h-max p-2 bg-sky-200 rounded-full flex items-center justify-center" > <Calendar2 color="blue" className="text-2xl" /> </h1>
                    <h1 className="text-2xl font-medium" > desember 2026 </h1>
                </div>
                <ul className="flex flex-col py-3 gap-4" >
                    <li className="w-[90%] ml-4 flex flex-col px-3 py-2 rounded-3xl h-max bg-gray-100" >
                        <div className="flex w-full justify-between items-center" >
                            <h4 className="text-xl px-4 py-2 w-max h-max text-green-800 bg-emerald-200 rounded-full font-semibold" > Hadir </h4>
                            <h2 className="text-gray-600 font-medium text-xl" > senin agustus 25 </h2>
                        </div>                    
                    </li>
                    <li className="w-[90%] ml-4 flex flex-col px-3 py-2 rounded-3xl h-max bg-gray-100" >
                        <div className="flex w-full justify-between items-center" >
                            <h4 className="text-xl px-4 py-2 w-max h-max text-red-800 bg-red-200 rounded-full font-semibold" > bolos </h4>
                            <h2 className="text-gray-600 font-medium text-xl" > kamis agustus 25 </h2>
                        </div>                    
                    </li>
                    <li className="w-[90%] ml-4 flex flex-col px-3 py-2 rounded-3xl h-max bg-gray-100" >
                        <div className="flex w-full justify-between items-center" >
                            <h4 className="text-xl px-4 py-2 w-max h-max text-yellow-800 bg-yellow-200 rounded-full font-semibold" > telat </h4>
                            <h2 className="text-gray-600 font-medium text-xl" > jum'at agustus 25 </h2>
                        </div>                    
                    </li>
                </ul>
            </div>

        </main>
    )
}