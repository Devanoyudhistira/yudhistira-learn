import Attendancestatus from "./attendancestatus";

export default function Attendancecard() {
    return (
        <div className="w-full h-max px-2 py-1 bg-zinc-100 gap-2 flex flex-col rounded-xl shadow-md shadow-black/15" >
            <div className="flex flex-col w-full" >
                <div className="flex gap-2 items-center" >
                    <div className="w-14 h-14 rounded-full bg-blue-500" ></div>
                    <div className="text-xl font-medium capitalize" >
                        <h1 className="font-normal" > devano yudhistira </h1>
                        <h2 className="font-medium" > Nomer absen:11 </h2>
                    </div>
                </div>
            </div>
            <div className="flex w-full gap-1.5 py-2 justify-evenly text-xl font-medium rounded-md bg-teal-50 items-center" >
               <Attendancestatus active={false} status={"hadir"} />
               <Attendancestatus active={false} status={"sakit"} />
               <Attendancestatus active={true} status={"izin"} />
               <Attendancestatus active={false} status={"bolos"} />
            </div>
        </div>
    )
}