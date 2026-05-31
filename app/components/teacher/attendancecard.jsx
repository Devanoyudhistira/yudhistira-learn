"use server"
import Attendancestatus from "./attendancestatus";

export default async function Attendancecard({studentname,studenid,status}) {            
    return (
        <div className="w-full h-max px-2 py-1 bg-zinc-100 gap-2 flex flex-col rounded-xl shadow-md shadow-black/15" >
            <div className="flex flex-col w-full" >
                <div className="flex gap-2 items-center" >
                    <div className="w-14 h-14 rounded-full bg-blue-500" ></div>
                    <div className="text-xl font-medium capitalize" >
                        <h1 className="font-normal" > {studentname} </h1>
                        <h2 className="font-medium" > Nomer absen:{studenid} </h2>
                    </div>
                </div>
            </div>
            <div className="flex w-full gap-1.5 py-2 justify-evenly text-xl font-medium rounded-md bg-teal-50 items-center" >
               <Attendancestatus active={status === null} status={"hadir"} />
               <Attendancestatus active={status?.category === "sakit"} status={"sakit"} />
               <Attendancestatus active={status?.category === "izin"} status={"izin"} />
               <Attendancestatus active={status?.category === "bolos"} status={"bolos"} />
            </div>
        </div>
    )
}