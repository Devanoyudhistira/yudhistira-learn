import truncate from "@/app/function/truncat"
import moment from "moment"
import { ChevronRight } from "react-bootstrap-icons"
import { Stopwatch } from "react-bootstrap-icons"

export default function Assignmentlist({ tugas, namaguru, mapel, description, tanggal, status, taskstatus }) {
    return (<div className="w-[83%] h-60 flex flex-col gap-3  justify-start items-start px-4 py-2 shadow-md shadow-black/10 rounded-2xl" >
        <div className="w-full flex  justify-between items-center" >
            {taskstatus === "active" ? <div className="text-yellow-600 text-4xl bg-yellow-100 rounded-2xl p-3 flex items-center justify-center " > <Stopwatch />
            </div> : <div className="text-gray-500 text-4xl bg-gray-100 rounded-2xl p-3 flex items-center justify-center " > <Stopwatch />
            </div>}
            <div className="flex flex-col text-right gap-2" >
                <h4 className="text-gray-600 font-bold uppercase text-xs" > Deadline </h4>
                <h1 className="tracking-wider capitalize text-xl text-red-600 font-bold" >
                    {moment(tanggal).format("MMM DD, YYYY")}
                </h1>
            </div>
        </div>
        <h1 className="font-light text-xl text-gray-950" >  {truncate(tugas, 35)} </h1>
        <p className="text-md font-light text-gray-500" > {truncate(description, 50)} </p>
        <div className=" flex justify-start items-center h-15" >
            {moment(tanggal).isBefore(moment()) && status !== "completed" ? <h1 className="text-red-700 text-md font-bold uppercase" > failed </h1> : <h1 className="text-green-400 text-md font-bold uppercase" > {status} </h1>}
        </div>
    </div>
    )
}