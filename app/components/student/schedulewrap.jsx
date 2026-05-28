"use client"

import moment from "moment"
import Daybutton from "./daybutton"
import { useState } from "react"
import { ForkKnife } from "react-bootstrap-icons"
import { Sun } from "react-bootstrap-icons"
import Breakschedule from "./breakschedule"

export default function Schedulewrap({ data }) {
    const [day, setday] = useState("senin")
    return (
        <div className="w-full " >
            <div className="overflow-x-scroll flex flex-nowrap px-3.5 pb-3 justify-evenly gap-3" >
                <Daybutton currentday={day} changebutton={() => setday("senin")} text={"senin"} />
                <Daybutton currentday={day} changebutton={() => setday("selasa")} text={"selasa"} />
                <Daybutton currentday={day} changebutton={() => setday("rabu")} text={"rabu"} />
                <Daybutton currentday={day} changebutton={() => setday("kamis")} text={"kamis"} />
                <Daybutton currentday={day} changebutton={() => setday("jum'at")} text={"jum'at"} />
            </div>
            <div className="flex flex-col gap-4 mt-4 px-5" >
                {data.map(e =>
                    e.day === day &&
                    <>
                        <div key={e.id} className="w-[96%] h-36 flex flex-col bg-zinc-50 shadow-md px-2 py-1.5 border border-gray-500 shadow-black/40 rounded-2xl" >
                            <h1 className="text-md font-bold px-2 py-1 rounded-full bg-blue-400 text-blue-700 w-max " > {e.time_start.slice(0, 5)} - {e.time_end.slice(0, 5)} </h1>
                            <h2 className="text-2xl mt-10 font-medium capitalize" > {e.name} </h2>
                            <h3 className="text-md font-light capitalize" > {e.teacher.name} </h3>
                        </div>
                        {e.time_end.slice(0, 5) === "11:30" &&
                            <Breakschedule breakname={"istirahat sholat & makan"} breaktime={"11:30 - 13:00"} />
                        }
                        {e.time_end.slice(0, 5) === "10:00" &&
                            <Breakschedule breakname={"istirahat sejenak"} breaktime={"10:00 - 10:30"} />
                        }
                    </>
                )}
            </div>
        </div>
    )
}