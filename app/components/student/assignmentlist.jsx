import { ChevronRight } from "react-bootstrap-icons"
import { Stopwatch } from "react-bootstrap-icons"

export default function Assignmentlist({ tugas,namaguru,mapel }) {
    return (<div className="w-full h-max flex gap-3 items-center px-4 py-2.5 shadow-md shadow-black/10 rounded-4xl" >
        <div className="w-12 h-12 p-2 flex items-center justify-center bg-yellow-100 rounded-xl " >
            <Stopwatch className="text-3xl text-yellow-400 " />
        </div>
        <div className="flex flex-col justify-center" >            
            <div className="flex flex-col justify-center" >
                <h5 className="text-[10px] font-semibold text-orange-600 uppercase" > {mapel} </h5>
                <h3 className="font-bold text-[18px]" > {tugas}</h3>
                <h4 className="font-medium text-[14px]" > 20-04-2026 | {namaguru}   </h4>
            </div>
        </div>
        <ChevronRight className="text-xl shrink-0" />
    </div>)
}