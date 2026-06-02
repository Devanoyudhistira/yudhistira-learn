import Assignmentcard from "@/app/components/teacher/Assignmentcard";
import Navbar from "@/app/components/teacher/navbar";
import supabase from "@/app/supabase/supabase";
import { createClient } from "@/app/supabase/server";
import { Inter } from "next/font/google";

const inter = Inter({})

export default async function Page() {
    const supabaseauth = await createClient()
    const { data: id } = await supabaseauth.auth.getUser()
    const { data: teacherid } = await supabase.schema("sekolah").from("teacher").select("id,name").eq("email", id.user.id).single()
    const { data } = await supabase.schema("sekolah").from("assignment").select("*,class(class)").eq("teacher_id",teacherid.id)
    const {data:completed} = await supabase.schema("sekolah").from("completed_assignment").select("*").in("assignment_id",data.map(e => e.id))
    console.log(completed)    
    return (<main className={"w-screen " + inter} >
        <Navbar />
        <div className="flex flex-col w-full mt-3 px-1.5" >
            <h1 className="text-4xl font-semibold px-2 tracking-wide capitalize" > manage assignments </h1>
            <div className="flex flex-col gap-4 w-full py-3 px-2" >
                {data.map(e => 
                <Assignmentcard key={e.id} id={e.id} subject={e.subject} title={e.name}  deadline={e.deadline} alreadysubmit={completed.length} expectation={e.submission_target} assignmentclass={e["class"]["class"] } />
                )}
            </div>
        </div>
    </main>)
}