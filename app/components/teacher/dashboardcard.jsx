import Assignmentrating from "./assignmentrating";

export default function Dashboardcard() {
    return (
        <div className="flex w-full px-3 shadow-md shadow-black/20 rounded-2xl py-3 flex-col gap-2" >
            <div className="flex gap-2 items-center" >
                <div className="w-11 h-11 rounded-full border-black bg-blue-200" ></div>
                <h1 className="text-xl font-semibold" > Devano Yudhistira </h1>
            </div>
            <h1 className="text-md px-3 font-semibold capitalize mt-3" > Tugas-Tugas </h1>  
            <div className="flex gap-3 pb-2 items-center flex-nowrap overflow-x-scroll" >
                <Assignmentrating/>
                <Assignmentrating/>
                <Assignmentrating/>
                <Assignmentrating/>
            </div>
        </div>
    )
}