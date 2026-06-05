import Navbar from "@/app/components/student/navbar"
import Schedulewrap from "@/app/components/student/schedulewrap"
import { studentdata } from "@/app/lib/user"
import supabase from "@/app/supabase/supabase"
import { Inter } from "next/font/google"


const inter = Inter({})

export default async function Schedule() {
    const student = await studentdata()
    const { data, error } = await supabase.schema("sekolah").from("schedule").select("*,teacher(name)").eq("class_id",student.class).order("time_start", { ascending: true })
    return (
        <main className={"flex w-screen flex-col gap-2 " + inter.className} >
            <Navbar />
            <h1 className="text-4xl ml-3 mt-4 font-bold" >Schedule</h1>
            <Schedulewrap data={data} />
        </main>
    )
}