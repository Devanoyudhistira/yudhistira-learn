import Image from "next/image";
import Navbar from "../components/teacher/navbar";
import { Inter } from "next/font/google";
import { Clock } from "react-bootstrap-icons";
import { Pass } from "react-bootstrap-icons";
import supabase from "../supabase/supabase";
import { createClient } from "../supabase/server";
import moment from "moment";
const inter = Inter({})

export default async function Page() {
    const supabaseauth = await createClient()
    const { data: id } = await supabaseauth.auth.getUser()
    const { data: teacherid } = await supabase.schema("sekolah").from("teacher").select("id,name,subject,image").eq("email", id.user.id).single()
    const { data: assignment, } = await supabase.schema("sekolah").from("assignment").select("*").eq("teacher_id", teacherid.id)
    const { data: nextschedule } = await supabase.schema("sekolah").from("schedule").select("*,class_id(class)").eq("teacher", teacherid.id)
    const scheduletime = nextschedule.map(e => ({timestart: moment(e.time_start, "HH:mm:ssZ").format("HH:mm"),name: e.name,nextclass:e.class_id.class }));

    const nextSchedule = scheduletime
        .filter(item => moment(item.timestart, "HH:mm").isAfter(moment("10:30", "HH:mm")))
        .sort((a, b) =>
            moment(a.time, "HH:mm").diff(moment(b.time, "HH:mm"))
        )[0];
        console.log(scheduletime)

    return (
        <div className={"flex w-screen flex-col " + inter.className} >
            <Navbar />
            <main className="w-full flex flex-col items-center gap-2 px-3 mt-4" >
                <div className="w-full h-40 px-3 gap-4 bg-zinc-50 shadow-xl shadow-black/20 rounded-2xl flex items-center">
                    <Image src={teacherid.image} alt="guru" className="w-35 h-35 rounded-2xl" width={200} height={200} />
                    <div className="text-md font-normal" >
                        <h1 className="text-xl font-medium" > {teacherid.name} </h1>
                        <h2 className="font-normal" > Guru {teacherid.subject} </h2>
                        <h3 className="text-gray-700 bg-gray-300 w-max px-2 py-1 rounded-2xl" > wali kelas tkj b </h3>
                    </div>
                </div>
                <div className="flex items-center   w-full justify-between gap-3 " >
                    <div className="w-full h-30 bg-blue-600 rounded-xl justify-between flex flex-col gap-1 px-3 py-1">
                        <div className="flex flex-col w-full capitalize  justify-between" >
                            <h4 className="text-xl font-medium text-gray-300" > kelas berikutnya </h4>
                            <h4 className="text-md font-thin text-white rounded-full w-max" > {""} </h4>
                        </div>
                        <h1 className="flex items-center gap-1 text-white font-medium uppercase text-xl" > <Clock /> {""}  </h1>
                    </div>
                    <div className="flex flex-col h-30 w-full bg-gray-300 rounded-2xl" >
                        <div className="text-2xl justify-between p-2 flex w-full items-center font-semibold uppercase text-blue-600" >
                            <h2 className="w-max bg-blue-100 p-2 rounded-xl font-semibold flex items-center justify-center" >
                                <Pass />
                            </h2>
                            <h1> {assignment.length} </h1>
                        </div>
                        <h1 className="text-xl px-2 font-semibold text-gray-800 capitalize" > Total tugas yang diberikan </h1>
                    </div>
                </div>
            </main>
        </div>
    )
}