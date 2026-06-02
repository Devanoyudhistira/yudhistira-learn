import Studentcard from "@/app/components/teacher/studentcard"
import supabase from "@/app/supabase/supabase"
import { Search } from "react-bootstrap-icons"

export default async function Page({ params }) {
    const { id } = await params
    const { data: assignment } = await supabase.schema("sekolah").from("assignment").select("*").eq("id", id).single()
    const { data: allstudent, error } = await supabase.schema("sekolah").from("students").select("*").eq("class", assignment.class)
    const { data: completed } = await supabase.schema("sekolah").from("completed_assignment").select("*").eq("assignment_id", id)
    const studentassignment = allstudent.filter(e => completed.some(other => other.student_id === e.id))
    console.log(completed)
    return (
        <main className="w-screen" >
            <div className="flex flex-col items-center gap-2 px-2 w-full" >
                <div className="flex items-center bottom-2 bg-gray-50 shadow-md  shadow-black/20 mt-3" >
                    <h4 className="bg-transparent text-black h-15 w-max px-4 flex items-center text-2xl" > <Search /> </h4>
                    <input type="search" placeholder="cari murid anda" className="h-15 w-full text-2xl font-medium text-gray-700 placeholder:capitalize bg-transparent" />
                </div>
                <div className="flex flex-col gap-3 w-full mt-3 items-center justify-center px-3 " >
                    {allstudent.map((e, i) =>
                        <Studentcard name={e.name} image={e.gambar} key={e.id} status={studentassignment.some(j => j.id === e.id)} value={studentassignment.some(j => j.id === e.id) ? completed[i]?.rating : 0} />)}
                </div>
            </div>
        </main>
    )
}