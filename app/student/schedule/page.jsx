import Navbar from "@/app/components/student/navbar"
import Schedulewrap from "@/app/components/student/schedulewrap"
import supabase from "@/app/supabase/supabase"
import { Inter } from "next/font/google"


const inter = Inter({})

export default async function Schedule() {

    const {data,error} = await supabase.schema("sekolah").from("schedule").select("*,teacher(name)").order("time_start",{ascending:true})    
    console.log(data)
    return (
        <main className={"flex w-screen flex-col gap-2 " + inter.className} >
            <Navbar />
            <h1 className="text-4xl ml-3 mt-4 font-bold" >Schedule</h1>
            <Schedulewrap data={data} />
        </main>
    )
}