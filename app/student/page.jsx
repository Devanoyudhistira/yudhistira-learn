import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { Check2 } from "react-bootstrap-icons"
import { Calendar2X } from "react-bootstrap-icons"
import { Envelope } from "react-bootstrap-icons"
import { Hospital } from "react-bootstrap-icons"
import { X } from "react-bootstrap-icons"
import { Stopwatch } from "react-bootstrap-icons"
import { ClockFill } from "react-bootstrap-icons"
import { ClockHistory } from "react-bootstrap-icons"

const jakarta = Plus_Jakarta_Sans({})
const inter = Inter({})

export default function Page() {
    return (
        <main className={`${jakarta.className} flex flex-col items-center pb-8`} >
            <nav className="w-screen h-15 px-2 bg-sky-100/20 flex items-center justify-end" >
                <div className="flex items-center justify-center gap-3 " >
                    <h1 className="text-2xl font-semibold " > Layla anderson </h1>
                    <div className="w-10 flex items-center justify-center font-extrabold  bg-sky-100/50 h-10 text-xl rounded-full border-2 border-blue-500" >
                        L
                    </div>
                </div>
            </nav>
            <div className="w-[84%] h-96 rounded-2xl bg-blue-500 flex flex-col p-10" >
                <div className="flex items-center gap-1 text-md" >
                    <ClockFill color="white" />
                    <h4 className=" font-medium text-white capitalize" > priority deadline </h4>
                </div>
                <h1 className="text-5xl font-semibold tracking-wide text-zinc-50" >Ujian tengah semester</h1>
                <h3 className="text-xl font-medium text-zinc-50 capitalize " > Matematika | pak Devano </h3>
                <div className="flex w-full mt-4 h-max justify-evenly shrink py-2 self-center mr-14 gap-8 ">
                    <div className="w-20 h-22 shrink-0  rounded-2xl bg-zinc-200/50 flex flex-col items-center justify-center" >
                        <h6 className="text-3xl font-medium text-zinc-50" > 06 </h6>
                        <h6 className="text-xl font-bold text-zinc-50" >  Days </h6>
                    </div>
                    <div className="w-23 h-22 shrink-0 p-1 rounded-2xl bg-zinc-200/50 flex flex-col items-center justify-center" >
                        <h6 className="text-3xl font-medium text-zinc-50" > 12 </h6>
                        <h6 className="text-xl font-bold text-zinc-50" >  Hours </h6>
                    </div>
                    <div className="w-23 h-22 shrink-0 p-1 rounded-2xl bg-zinc-200/50 flex flex-col items-center justify-center" >
                        <h6 className="text-3xl font-medium text-zinc-50" > 30 </h6>
                        <h6 className="text-xl font-bold text-zinc-50" >  Minute </h6>
                    </div>
                </div>
            </div>
            <div className={"flex flex-col mt-6 h-max  w-full gap-3 px-4 " + inter.className} >
                <div className="w-full h-20 flex gap-3 items-center px-4 shadow-md shadow-black/10 rounded-4xl" >
                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-yellow-100 rounded-xl " >
                        <Stopwatch className="text-3xl text-yellow-400 " />
                    </div>
                    <div className="flex flex-col justify-center" >
                        <h3 className="font-semibold text-[18px]" > merangkum hal 11-22</h3>
                        <h4 className="font-normal text-[12px]" > Deadline:<span> 20-04-2026 </span>  </h4>
                    </div>
                </div>
                <div className="w-full h-20 flex gap-3 items-center px-4 shadow-md shadow-black/10 rounded-4xl" >
                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-emerald-100 rounded-xl " >
                        <Check2 className="text-3xl text-emerald-400 " />
                    </div>
                    <div className="flex flex-col justify-center" >
                        <h3 className="font-semibold text-[18px]" > latihan soal hal 25</h3>
                        <h4 className="font-normal text-[12px]" > Deadline:<span> 20-04-2026 </span>  </h4>
                    </div>
                </div>
                <div className="w-full h-20 flex gap-3 items-center px-4 shadow-md shadow-black/10 rounded-4xl" >
                    <div className="w-12 h-12 p-2 flex items-center justify-center bg-red-100 rounded-xl " >
                        <X className="text-4xl text-red-400 " />
                    </div>
                    <div className="flex flex-col justify-center" >
                        <h3 className="font-bold text-[18px]" > membuat cerita pahlawan</h3>
                        <h4 className="font-medium text-[12px]" > 20-04-2026 | pak aziz | pkn  </h4>
                    </div>
                </div>
            </div>
            <div className="w-full mt-8 px-6 flex-col flex gap-1" >
                <div className="w-full" >
                    <h1 className="text-3xl font-semibold" > history kehadiran </h1>
                    <h4 className="text-md font-light" > ringkasan kehadiran anda </h4>                
                </div>

            </div>
            <div className="w-full flex flex-wrap items-center justify-evenly gap-4" > 
                <div className="flex w-max p-4 rounded-3xl border border-gray-200 items-center justify-center gap-14" >
                    <Calendar2X className="text-3xl" color="red" />
                    <div>
                        <h4 className="text-xl font-medium" > alfa </h4>
                        <h2 className="text-2xl font-bold" > 12 </h2>
                    </div>
                </div>
                <div className="flex w-max p-4 rounded-3xl border border-gray-200 items-center justify-center gap-14" >
                    <Hospital className="text-3xl" color="green" />
                    <div>
                        <h4 className="text-xl font-medium" > sakit </h4>
                        <h2 className="text-2xl font-bold" > 8 </h2>
                    </div>
                </div>
                <div className="flex w-max p-4 rounded-3xl border border-gray-200 items-center justify-center gap-14" >
                    <Envelope className="text-3xl" color="yellow" />
                    <div>
                        <h4 className="text-xl font-medium" > izin </h4>
                        <h2 className="text-2xl font-bold" > 0 </h2>
                    </div>
                </div>
             </div>

        </main>
    )
}