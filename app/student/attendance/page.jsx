import Attendancelist from "@/app/components/student/attendancelist";
import Navbar from "@/app/components/student/navbar";
import { createClient } from "@/app/supabase/server";
import supabase from "@/app/supabase/supabase";
import moment from "moment";
import { Inter } from "next/font/google";
import { Calendar2 } from "react-bootstrap-icons";
const poppins = Inter({})
export default async function Page() {
    const supabaseauth = await createClient()
   const {data:usedata} = await supabaseauth.auth.getUser()
   const studentid = usedata.user.id
   const {data:studentdata} = await supabase.schema("sekolah").from("students").select("*").eq("email",studentid).single()
    const { data } = await supabase.schema("sekolah").from("attendance").select("*").eq("student_id",studentdata.id)
    return (
        <main className={"w-screen flex flex-col items-center " + poppins.className} >
            <Navbar />
            <div className={"w-[90%] px-4 py-2 mt-4  -ml-2 h-50 rounded-3xl flex flex-col justify-between bg-linear-to-t from-blue-800 to-blue-700  " + poppins.className} >
                <div>
                    <h2 className="text-xl font-medium capitalize text-gray-300" > Semester 2025/2026 </h2>
                    <h1 className="text-3xl font-bold capitalize text-white" >Kehadiran</h1>
                </div>
                <div className="w-full self-end justify-self-end px-4 flex justify-evenly items-center  gap-3" >
                    <div className="flex w-25 h-20 p-4 rounded-3xl bg-gray-100/10 items-center justify-center gap-14" >
                        <div className="flex flex-col items-center justify-center" >
                            <h2 className="text-2xl font-bold text-white" > {data.filter(e => e.category === "bolos").length } </h2>
                            <h4 className="text-xl text-red-600 font-medium" > alfa </h4>
                        </div>
                    </div>
                    <div className="flex w-25 h-20 p-4 rounded-3xl bg-gray-100/10 items-center justify-center gap-14" >
                        <div className="flex flex-col items-center justify-center" >
                            <h2 className="text-2xl font-bold text-white" > {data.filter(e => e.category === "izin").length } </h2>
                            <h4 className="text-xl text-sky-300 font-medium" > izin </h4>
                        </div>
                    </div>
                    <div className="flex w-25 h-20 p-4 rounded-3xl bg-gray-100/10 items-center justify-center gap-14" >
                        <div className="flex flex-col items-center justify-center" >
                            <h2 className="text-2xl text-white font-bold" > {data.filter(e => e.category === "sakit").length } </h2>
                            <h4 className="text-xl text-green-400 font-medium" > sakit </h4>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-4 w-full flex flex-col px-4" >
                {data.map((e,index) => {
                    const currentMonth = moment(e.created_at).format("MMM");
                    const previousMonth = data[index - 1]
                        ? moment(data[index - 1].created_at).format("MMM")
                        : null;

                    const showMonth = currentMonth !== previousMonth;
                    return <>
                        {showMonth && (
                            <div className="flex items-center gap-2">
                                <h1 className="w-max h-max p-2 bg-sky-200 rounded-full flex items-center justify-center">
                                    <Calendar2 color="blue" className="text-2xl" />
                                </h1>
                                <h1 className="text-2xl font-medium">
                                    {currentMonth} 2026
                                </h1>
                            </div>
                        )}
                        <ul key={e.id} className="flex flex-col py-3 gap-4" >
                            <Attendancelist status={e.category} alasan={e.excuses} tanggal={moment(e.absent_date).locale("ID").format("dddd DD MMM, YYYY")} />
                        </ul>
                    </>
                })}
            </div>


        </main>
    )
}