"use client"
import { useState } from "react"
import Assignmentlist from "./assignmentlist"
import { Alarm } from "react-bootstrap-icons"
import moment from "moment"
export default function Assignmentpage({ data,completeddata }) {
    const closesttask = data.filter(e => moment(e.deadline).isAfter(moment(), "day"))
    console.log(closesttask)
    const [filterstatus, setfilterstatus] = useState("all")    
    return <>
        <div className="flex items-center justify-evenly mt-5 gap-4 w-full px-6" >
            <label htmlFor="all" className="w-max bg-sky-100  has-checked:bg-blue-600
      transition px-6 py-2 rounded-full " >
                <input name="filter" id="all" onChange={() => setfilterstatus("all")} type="radio" hidden className="peer" />
                <span className="text-xl peer-checked:text-white transition font-medium text-gray-900" >All</span>
            </label>
            <label htmlFor="progress" className="w-max bg-sky-100 has-checked:bg-blue-500
      transition px-6 py-2 rounded-full " >
                <input name="filter" id="progress" onChange={() => setfilterstatus("pending")} type="radio" className="peer" hidden />
                <span className="text-xl peer-checked:text-white font-medium text-gray-900 transition" > pending </span>
            </label>
            <label htmlFor="completed" className="w-max bg-sky-100 has-checked:bg-blue-500
      transition px-6 py-2 rounded-full " >
                <input name="filter" id="completed" onChange={() => setfilterstatus("completed")} type="radio" className="peer" hidden />
                <span className="text-xl peer-checked:text-white font-medium text-gray-900 transition" > completed </span>
            </label>
        </div>
        <div className="w-full flex justify-between text-md px-6 mt-5.5" >
            <span className="font-light text-gray-700 capitalize" >Prioritas utama</span>
            <span className="flex items-center gap-2 text-red-600 font-normal" > <Alarm /> dikumpulkan segera</span>
        </div>
        <div className="mt-3 px-4 w-[90%] h-max py-6 flex flex-col bg-linear-to-t shadow-xl shadow-blue-600/50 from-blue-600 to-blue-800 rounded-3xl " >
            <h3 className="text-white w-max  rounded-full text-xs tracking-wider font-medium uppercase p-1.5 bg-gray-50/30" > {closesttask[0].subject} </h3>
            <h1 className="text-3xl mt-1 font-light capitalize text-white" > {closesttask[0].name} </h1>
            <h2 className="text-md font-light text-white  " > Dikumpulkan {moment(closesttask[0].deadline).locale("id").fromNow(true)} lagi </h2>
        </div>
        <div className="w-full px-4 mt-5" >
            <h5 className="text-xl font-medium text-gray-800 capitalize" > Upcoming task </h5>
            <div className="w-full flex flex-col mt-2 items-center gap-4">
                {data.filter((e) => {
                    if (moment(e.deadline).isAfter(moment()) ) return true
                })
                    .filter((e) => {
                        if (filterstatus === "all") return true                        
                        else if(filterstatus === "pending") !completeddata.some(e => e?.assignment_id === e.id)
                        else completeddata.some(e => e?.assignment_id === e.id)
                    })
                    .map((e) => (
                        <Assignmentlist
                            key={e.id}
                            status={completeddata}
                            tanggal={e.deadline}
                            tugas={e.name}
                            description={e.description}
                            namaguru={e.teacher_id.name}
                            mapel={e.subject}
                            taskstatus="active"
                            id={e.id}
                            late={false}
                        />
                    ))}
            </div>
        </div>
        <div className="w-full px-4 mt-5" >
            <h5 className="text-xl font-medium text-gray-800 capitalize" > task lampau</h5>
            <div className="w-full flex flex-col mt-2 items-center gap-3" >
                {data
                    .filter((e) => {
                        if (moment(e.deadline).isBefore(moment(), "day")) return true
                    })
                    .map((e) => (
                        <Assignmentlist
                            key={e.id}
                            status={completeddata}
                            tanggal={e.deadline}
                            tugas={e.name}
                            description={e.description}
                            namaguru={e.teacher_id.name}
                            mapel="b ind"
                            taskstatus="done"
                            id={e.id}
                            late={true}
                        />
                    ))}
            </div>
        </div>
    </>
}