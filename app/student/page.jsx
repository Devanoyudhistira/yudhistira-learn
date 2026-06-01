import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { Check2 } from "react-bootstrap-icons"
import { Calendar2X } from "react-bootstrap-icons"
import { Envelope } from "react-bootstrap-icons"
import { Hospital } from "react-bootstrap-icons"
import { X } from "react-bootstrap-icons"
import { Stopwatch } from "react-bootstrap-icons"
import { ClockFill } from "react-bootstrap-icons"
import { ClockHistory } from "react-bootstrap-icons"
import Navbar from "../components/student/navbar"
import Assignmentlist from "../components/student/assignmentlist"
import supabase from "../supabase/supabase"
import { createClient } from "../supabase/server"
import moment from "moment"
import { studentdata } from "../lib/user"

const jakarta = Plus_Jakarta_Sans({})
const inter = Inter({})

export default async function Page() {
    const studentdatalo = await studentdata()
    const { data, error } = await supabase.schema("sekolah").from("assignment").select("*,teacher_id(name)").order("deadline", { ascending: true }).limit(3)
    const {data:attandance,error:attandanceerror} = await supabase.schema("sekolah").from("attendance").select("*").eq("student_id",studentdatalo.id)
    const datedeadline = data.filter(e => moment(e.deadline).isSame(moment().add(1, "day"), "day") ) 

    console.log( datedeadline)
    return (
        <main className={`${jakarta.className} flex flex-col items-center pb-8`} >
            <Navbar />
            <div className="w-[84%] mt-6 h-96 rounded-2xl bg-blue-500 flex flex-col p-10" >
                <div className="flex items-center gap-1 text-md" >
                    <ClockFill color="white" />
                    <h4 className=" font-medium text-white capitalize" > priority deadline </h4>
                </div>
                <h1 className="text-5xl font-semibold tracking-wide text-zinc-50" > {datedeadline[0]?.name} </h1>
                <h3 className="text-xl font-medium text-zinc-50 capitalize " > {datedeadline[0]?.subject} |  {datedeadline[0]?.teacher_id.name} </h3>
                <div className="flex w-full mt-4 h-max  justify-center items-center shrink py-2 self-center mr-14 gap-8 ">
                    <div className="w-full h-22 ml-13 shrink-0 self-center rounded-2xl bg-zinc-200/50 flex flex-col items-center justify-center" >
                        <h6 className="text-3xl font-medium text-zinc-50" > { moment(datedeadline[0]?.deadline).diff(moment(), "days")} </h6>
                        <h6 className="text-xl font-bold text-zinc-50" >  Days </h6>
                    </div>                   
                </div>
            </div>
            <div className={"flex flex-col mt-6 h-max items-center w-full gap-3 px-4 " + inter.className} >
                <h1 className="text-xl self-start font-medium text-gray-900" > Recent assignments </h1>
                {data.map(e =>
                    <Assignmentlist key={e.id} tanggal={e.deadline} tugas={e.name} description={e.description} namaguru={e.teacher_id.name} mapel={"b ind"} />
                )}
            </div>
            <div className="w-full mt-8 px-6 flex-col flex gap-1" >
                <div className="w-full" >
                    <h1 className="text-3xl font-semibold" > history kehadiran </h1>
                    <h4 className="text-md font-light" > ringkasan kehadiran anda </h4>
                </div>

            </div>
            <div className="w-full flex flex-wrap items-center justify-evenly gap-4" >
                <div className="flex w-max p-4 rounded-3xl border border-gray-200 items-center justify-center gap-14" >
                    <Calendar2X className="text-3xl" color="red" />
                    <div>
                        <h4 className="text-xl font-medium" > alfa </h4>
                        <h2 className="text-2xl font-bold" > {attandance.filter(e => e.category === "bolos").length } </h2>
                    </div>
                </div>
                <div className="flex w-max p-4 rounded-3xl border border-gray-200 items-center justify-center gap-14" >
                    <Hospital className="text-3xl" color="green" />
                    <div>
                        <h4 className="text-xl font-medium" > sakit </h4>
                        <h2 className="text-2xl font-bold" > {attandance.filter(e => e.category === "sakit").length } </h2>
                    </div>
                </div>
                <div className="flex w-max p-4 rounded-3xl border border-gray-200 items-center justify-center gap-14" >
                    <Envelope className="text-3xl" color="yellow" />
                    <div>
                        <h4 className="text-xl font-medium" > izin </h4>
                        <h2 className="text-2xl font-bold" > {attandance.filter(e => e.category === "izin").length } </h2>
                    </div>
                </div>
            </div>

        </main>
    )
}