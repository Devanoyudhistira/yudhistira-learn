import truncate from "@/app/function/truncat"
import supabase from "@/app/supabase/supabase"

export default async function Assignmentrating({ studentid, assignmentname, assignmentid }) {
    const { data: tugas, error } = await supabase.schema("sekolah").from("completed_assignment").select("*").eq("student_id", studentid).eq("assignment_id", assignmentid).single()
    console.log(tugas)
    return (
        <div className={`w-max px-2 pl-4 py-3 shrink-0 h-20 flex flex-col rounded-2xl bg-sky-200/40  `} >

            <h1 className="text-md font-medium text-blue-700" > {assignmentname} </h1>
            {tugas && <h4 className={`text-xl font-semibold ${tugas.rating < 75 ? "text-red-600" : "text-blue-600"}`} >{tugas.rating}/100</h4>}
            {!tugas && <h1 className="text-md justify-self-end font-semibold text-red-600" > belum mengerjakan </h1>}
        </div>
    )
}