import Navbar from "@/app/components/student/navbar"
import supabase from "@/app/supabase/supabase"
import moment from "moment"
import { Inter } from "next/font/google"
import { AlarmFill } from "react-bootstrap-icons"
import { Alarm } from "react-bootstrap-icons"

const inter = Inter({})

export default async function page({ params }) {
    const { id } = await params
    const {data} = await supabase.schema("sekolah").from("assignment").select("*,teacher_id(name,subject)").eq("id",id).single()
    return (
        <main className={"w-screen " + inter.className} >
            <Navbar />
            <h1 className="text-3xl font-semibold px-2 mt-4">
                {data.name}
            </h1>
            <div className="flex gap-2 px-2 mt-4 items-center" >
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center uppercase text-md" >
                    L
                </div>
                <div>
                    <h2 className="text-xl font-semibold capitalize" > {data.teacher_id.name} </h2>
                    <h3 className="text-md font-light text-gray-600" >  {data.teacher_id.subject} </h3>
                </div>
            </div>

            <div className="w-[90%] rounded-2xl mt-3 bg-red-600/20 px-4 border border-red-700 justify-self-center self-center flex items-center justify-between" >
                <div className="flex gap-2 items-center" >
                    <div className="w-max h-max p-3 bg-red-800 text-2xl rounded-xl flex items-center justify-center" >
                        <AlarmFill color="white" />
                    </div>
                    <div className="flex flex-col gap-1 justify-center" >
                        <span className="text-xl font-bold text-red-600 uppercase" > Deadline </span>
                        <span className="text-xl font-bold text-gray-950 capitalize" > {moment(data.deadline).diff(moment().subtract(1, "day"),"day") } </span>
                    </div>
                </div>
            </div>

            <article className="mt-3 px-3 " >
                <h1 className="text-3xl font-extrabold capitalize" > Description </h1>
                <p className="text-xl font-light text-black mt-4" > {data.description}</p>
            </article>
        </main>

    )
}