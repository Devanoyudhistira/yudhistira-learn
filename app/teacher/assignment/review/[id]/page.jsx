import { updatereview } from "@/app/action/teacher/assignment"
import Formnav from "@/app/components/formnav"
import Assignmentreview from "@/app/components/teacher/assignmentreview"
import supabase from "@/app/supabase/supabase"
import moment from "moment"
import { Calendar } from "react-bootstrap-icons"


export default async function Page({ params }) {
    const { id } = await params
    const { data, error } = await supabase.schema("sekolah").from("completed_assignment").select("*,student_id(name,student_id,class(class)),assignment_id(name,id)").eq("id", id).single()
    console.log(data)
    return (
        <main className="w-screen flex flex-col gap-1.5 pb-10" >
            <Formnav pagename={`tugas milik ${data.student_id.name}`} target={`/teacher/assignment/${data.assignment_id.id}`} />
            <div className=" w-full flex flex-col px-2.5" >
                <div className="w-full flex justify-between items-center" >
                    <h1 className="text-xl font-medium capitalize" > {data.student_id.name} </h1>
                    <h1 className="text-xl font-medium capitalize" > {data.student_id.class.class} </h1>
                </div>
                <h1 className="text-2xl font-semibold text-blue-600" > {data.assignment_id.name} </h1>
            </div>
            <div className="w-full px-2 flex gap-3 items-center" >
                <h1 className="text-md font-bold p-2 rounded-xl bg-blue-100 text-blue-500 flex items-center gap-1.5" >
                    <Calendar className="text-2xl" />
                    dikumpulkan pada {moment(data.created_at).locale("ID").format("MMM DD")}
                </h1>
            </div>
            <div className="flex flex-col mt-4 w-full px-4" >
                <div className="w-full flex items-center justify-between" >
                    <h1 className="text-2xl font-normal capitalize" > Tugas yang dikumpulkan </h1>
                    <h2 className="text-xl font-semibold capitalize" > {data.image.length} Foto </h2>
                </div>
            </div>
            <Assignmentreview data={data.image} />
            <form action={updatereview.bind(null, id)} className="flex flex-col w-[95%] mt-4 shadow-2xs shadow-black self-center gap-2 bg-zinc-50 rounded-2xl p-3" >
                <h1> Berikan nilai pada murid anda </h1>
                <label htmlFor="rating">
                    <h1 className="text-xl font-bold text-gray-600" >nilai dari 0 - 100</h1>
                    <input className="bg-sky-100 text-xl w-full py-2 px-1 rounded-2xl" type="number" name="rating" id="rating" />
                </label>
                <label htmlFor="feedback">
                    <h1 className="text-xl font-bold text-gray-600" > komentar anda </h1>
                    <textarea id="feedback" name="feedback" className="resize-none bg-sky-100 text-xl w-full py-2 px-1 rounded-2xl h-35" />
                </label>
                <button type="submit" className="text-2xl w-[90%] py-3 flex self-center items-center justify-center rounded-2xl font-semibold text-white gap-2 bg-blue-700 h-max" > Post </button>
            </form>
        </main>
    )
}
