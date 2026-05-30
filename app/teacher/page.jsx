import Image from "next/image";
import Navbar from "../components/teacher/navbar";
import { Inter } from "next/font/google";
import { Clock } from "react-bootstrap-icons";
import { Pass } from "react-bootstrap-icons";
const inter = Inter({})

export default function Page() {
    return (
        <div className={"flex w-screen flex-col " + inter.className} >
            <Navbar />
            <main className="w-full flex flex-col items-center gap-2 px-3 mt-4" >
                <div className="w-full h-40 px-3 gap-4 bg-zinc-50 shadow-xl shadow-black/20 rounded-2xl flex items-center">
                    <Image src={"/landing/guru.jpg"} alt="guru" className="w-35 h-35 rounded-2xl" width={200} height={200} />
                    <div className="text-md font-normal" >
                        <h1 className="text-xl font-medium" > Michael matematika </h1>
                        <h2 className="font-normal" > Guru matematika </h2>
                        <h3 className="text-gray-700 bg-gray-300 w-max px-2 py-1 rounded-2xl" > wali kelas tkj b </h3>
                    </div>
                </div>
                <div className="flex items-center   w-full justify-between gap-3 " >
                    <div className="w-full h-30 bg-blue-600 rounded-xl justify-between flex flex-col gap-1 px-3 py-1">
                        <div className="flex flex-col w-full capitalize  justify-between" >
                            <h4 className="text-xl font-medium text-gray-300" > kelas berikutnya </h4>
                            <h4 className="text-md font-thin text-white rounded-full w-max" > Tbg-c </h4>
                        </div>
                        <h1 className="flex items-center gap-1 text-white font-medium uppercase text-xl" > <Clock /> 09:00 AM  </h1>
                    </div>
                    <div className="flex flex-col h-30 w-full bg-gray-300 rounded-2xl" >
                        <div className="text-2xl justify-between p-2 flex w-full items-center font-semibold uppercase text-blue-600" >
                            <h2 className="w-max bg-blue-100 p-2 rounded-xl font-semibold flex items-center justify-center" >
                                <Pass />
                            </h2>
                            <h1> 4 </h1>
                        </div>
                        <h1 className="text-xl px-2 font-semibold text-gray-800 capitalize" > Total tugas yang diberikan </h1>
                    </div>
                </div>
            </main>
        </div>
    )
}