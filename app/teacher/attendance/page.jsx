import Navbar from "@/app/components/teacher/navbar";
import Attendancecard from "@/app/components/teacher/attendancecard";
import moment from "moment";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Calendar2 } from "react-bootstrap-icons";
const jakarta = Plus_Jakarta_Sans({})
import supabase from "@/app/supabase/supabase";

export default async function Page() {

    const { data: semuasiswa } = await supabase.schema("sekolah").from("students").select("*,attendance_id(*)").eq("class", 1)        
    return (
        <main className="w-screen flex flex-col" >
            <Navbar />
            <div className={"w-full px-2 py-1 flex flex-col gap-1.5 " + jakarta.className} >
                <h5 className="text-xl font-semibold text-blue-500 uppercase " > Daftar kehadiran </h5>
                <div className="w-full flex items-center justify-between" >
                    <h1 className="text-2xl font-bold " > Tkj-a </h1>
                    <h2 className="text-xl font-medium bg-gray-300 px-2 py-1 rounded-full" > 34 murid </h2>
                </div>
                <h3 className=" text-xl font-normal tracking-wide flex items-center gap-2" > <Calendar2 /> {moment().locale("ID").format("MMM h,YYYY")} </h3>
            </div>
            <div className="w-full justify-between gap-2 px-3 flex items-center" >
                <div className="w-1/2 h-24 bg-emerald-100 rounded-2xl border-2 border-green-500 text-green-600 flex flex-col items-center justify-center " >
                    <h1 className="text-2xl font-bold" > 30 </h1>
                    <h2 className="text-xl font-semibold" > masuk</h2>
                </div>
                <div className="w-1/2 h-24 bg-red-100 border-2 rounded-2xl border-red-500 text-red-600 flex flex-col items-center justify-center " >
                    <h1 className="text-2xl font-bold" > 4 </h1>
                    <h2 className="text-xl font-semibold" > absen</h2>
                </div>
            </div>
            <div className="w-full mt-3 flex flex-col gap-2 items-center px-1.5" >
                {semuasiswa.map((e,i) => 
                    <Attendancecard key={e.id} studentname={e.name} studenid={e.student_id} status={e.attendance_id} />
                )}
            </div>
        </main>
    )
}