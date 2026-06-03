import { addassignment } from "@/app/action/teacher/assignment";
import Assignmentfileinput from "@/app/components/teacher/assignmentfileinput";
import { Inter } from "next/font/google";
import { FileEarmarkArrowUp } from "react-bootstrap-icons";
import { ArrowLeft } from "react-bootstrap-icons";
import supabase from "@/app/supabase/supabase";
import { teacherdata } from "@/app/lib/user";
const inter = Inter({})
export default async function Page() {
    const teacher = await teacherdata()
    const { data, error } = await supabase.schema("sekolah").from("class").select("id,class").order("class", { ascending: true })
    return (
        <main className={"w-screen " + inter.className} >
            <nav className="w-full h-14 bg-zinc-100 shadow-md shadow-black/20 flex items-center" >
                <div className="flex justify-center text-blue-600 px-2 items-center gap-2 text-xl" >
                    <ArrowLeft className="text-2xl" />
                    <span className="capitalize font-medium" > tugas baru </span>
                </div>
            </nav>
            <form encType="multipart/form-data" action={addassignment} className="flex flex-col gap-3 w-full pb-7 px-3 py-2 mt-3" >
                <label htmlFor="name" className="text-xl font-semibold w-full flex flex-col capitalize gap-1 " >
                    <h1> Nama Tugas </h1>
                    <input placeholder="contoh kerjakan halaman 20" className="h-12 placeholder:text-gray-400 placeholder:text-md w-full px-1 bg-gray-50 text-md py-1 border-2 border-gray-900 shadow-md shadow-blue-900/20 transition focus:border-blue-500 rounded-md" type="text" name="name" id="name" />
                </label>
                <label htmlFor="class" className="text-xl font-semibold w-full flex flex-col capitalize gap-1 justify-center" >
                    <h1 className="text-md font-semibold capitalize" > Untuk Kelas </h1>
                    <select className="w-full border-gray-700 border-2 focus:border-blue-800 bg-zinc-50 shadow-blue-900/20 shadow-md text-xl py-2 px-1.5 rounded-md" name="class" id="7a">
                        {data.map(e =>
                            <option key={e.id} value={e.id}> {e.class} </option>
                        )}
                    </select>
                </label>
                <label htmlFor="description" className="flex flex-col gap-0.5 capitalize" >
                    <h1 className="text-xl text-blue-700 font-medium capitalize" >Description</h1>
                    <textarea placeholder="tulis keterangan dari tugas ini " className="text-md border-2 border-gray-500 shadow-md shadow-blue-900/30 placeholder:capitalize bg-gray-50 p-1.5 resize-none w-full h-35" name="description" id="description"></textarea>
                </label>
                <label className="w-full bg-sky-50 rounded-md p-3 pb-6 flex flex-col gap-3" htmlFor="deadline">
                    <h1 className="text-2xl font-normal capitalize text-blue-700" >Deadline</h1>
                    <input className="bg-white px-3 py-2 text-2xl rounded-md shadow-md shadow-blue-900/30 w-75" type="date" name="deadline" id="deadline" />
                </label>
                <Assignmentfileinput />

                <button className="w-full text-white h-max text-2xl py-2 text-center bg-blue-500 shadow-md shadow-blue-800/50 rounded-2xl" type="submit"> buat tugas </button>
            </form>
        </main>
    )
}