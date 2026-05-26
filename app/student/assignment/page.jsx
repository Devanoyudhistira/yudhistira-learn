import Assignmentlist from "@/app/components/student/assignmentlist";
import Navbar from "@/app/components/student/navbar";
import { Inter } from "next/font/google";
import { Alarm } from "react-bootstrap-icons";
const inter = Inter({})

export default function Page() {
    return (
        <main className={"w-screen h-100 flex flex-col items-center bg-sky-100/20 " + inter.className} >
            <Navbar />
            <div className="flex items-center justify-evenly mt-5 gap-4 w-full px-6" >
                <label htmlFor="all" className="w-max bg-sky-100  has-checked:bg-blue-600
      transition px-6 py-2 rounded-full " >
                    <input name="filter" id="all" type="radio" hidden className="peer" />
                    <span className="text-xl peer-checked:text-white transition font-medium text-gray-900 " >All</span>
                </label>
                <label htmlFor="progress" className="w-max bg-sky-100 has-checked:bg-blue-500
      transition px-6 py-2 rounded-full " >
                    <input name="filter" id="progress" type="radio" className="peer" hidden />
                    <span className="text-xl peer-checked:text-white font-medium text-gray-900 transition" > progress </span>
                </label>
                <label htmlFor="completed" className="w-max bg-sky-100 has-checked:bg-blue-500
      transition px-6 py-2 rounded-full " >
                    <input name="filter" id="completed" type="radio" className="peer" hidden />
                    <span className="text-xl peer-checked:text-white font-medium text-gray-900 transition" > completed </span>
                </label>
            </div>
            <div className="w-full flex justify-between text-md px-6 mt-5.5" >
                <span className="font-light text-gray-700 capitalize" >Prioritas utama</span>
                <span className="flex items-center gap-2 text-red-600 font-normal" > <Alarm /> dikumpulkan hari ini</span>
            </div>
            <div className="mt-3 px-4 w-[90%] h-max py-6 flex flex-col bg-linear-to-t shadow-xl shadow-blue-600/50 from-blue-600 to-blue-800 rounded-3xl " >
                <h3 className="text-white w-max  rounded-full text-xs tracking-wider font-medium uppercase p-1.5 bg-gray-50/30" > Matematika </h3>
                <h1 className="text-3xl mt-1 font-light capitalize text-white" > Mengerjakan halaman 20-21 </h1>
                <h2 className="text-md font-light text-white  " > Dikumpulkan 1 jam lagi </h2>
            </div>
            <div className="w-full px-4 mt-5" >
                <h5 className="text-xl font-medium text-gray-800 capitalize" > Upcoming task </h5>
                <div className="w-full flex flex-col mt-2 items-center gap-4" >
                    <Assignmentlist tugas={"mengerjakan halaman 21-25 dan soal ipa hal 30"} namaguru={"devano"} mapel={"bahasa indonesia"} />
                    <Assignmentlist tugas={"mengerjakan halaman 21-25"} namaguru={"devano"} mapel={"bahasa indonesia"} />
                    <Assignmentlist tugas={"mengerjakan halaman 21-25"} namaguru={"devano"} mapel={"bahasa indonesia"} />
                </div>
            </div>
        </main>
    )
}