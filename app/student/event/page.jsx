import Navbar from "@/app/components/student/navbar";
import { Inter } from "next/font/google";
import { CircleFill } from "react-bootstrap-icons";
import Image from "next/image";
import Eventcard from "@/app/components/student/eventcard";
const inter = Inter({})

export default async function Page() {
    return <main className={" " + inter.className} >
        <Navbar />
        <div className="w-full px-4 py-2" >
            <div className="w-full px-3 flex justify-between items-center" >
                <h6 className="text-2xl font-light" > Lagi live nih </h6>
                <h6 className="text-2xl font-bold text-red-600 bg-red-200 rounded-3xl uppercase w-max px-2 py-1 flex gap-2 items-center" > <CircleFill className="text-xs" /> LIVE </h6>
            </div>
            <Image src={"/landing/teamwork.jpg"} alt="event" width={400} height={400} className="w-[96%] h-57 object-center object-cover mt-3 justify-self-center rounded-2xl " />
        </div>
        <div className="w-full px-2 py-1.5 flex flex-col gap-1" >
            <h1 className="text-xl font-medium capitalize" > Event yang akan datang </h1>
            <div className="flex flex-col gap-3" >
                <Eventcard />
                <Eventcard />
                <Eventcard />
            </div>
        </div>
    </main>
}