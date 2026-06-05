import Assignmentlist from "@/app/components/student/assignmentlist";
import Navbar from "@/app/components/student/navbar";
import { Inter } from "next/font/google";
import { Alarm } from "react-bootstrap-icons";
import supabase from "@/app/supabase/supabase";
import moment from "moment";
import Assignmentpage from "@/app/components/student/assigmentpage";
import { studentdata } from "@/app/lib/user";
const inter = Inter({})

export default async function Page() {
    const student = await studentdata()
    const { data, error } = await supabase.schema("sekolah").from("assignment").select("*,teacher_id(name)").eq("class",student.class).order("deadline", { ascending: true })    
    const { data:completed,error:completederror} = await supabase.schema("sekolah").from("completed_assignment").select("assignment_id").eq("student_id",student.id)
    console.log(completed)
    return (
        <main className={"w-screen h-100 flex flex-col items-center bg-sky-100/20 " + inter.className} >
            <Navbar />
            <Assignmentpage completeddata={completed} data={data} />
        </main>
    )
}