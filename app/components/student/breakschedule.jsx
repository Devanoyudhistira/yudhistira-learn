import { ForkKnife,Sun } from "react-bootstrap-icons"

export default function Breakschedule({breaktime,breakname}) {
    return <div className="w-[96%] h-max rounded-3xl items-center px-3 flex justify-between border-2 border-emerald-600 bg-emerald-100" >
        <ForkKnife className="text-green-600 text-3xl" />
        <div className="text-xl" >
            <h1 className="text-green-800 font-semibold capitalize" > {breakname} </h1>
            <p className="text-green-500 font-medium uppercase">
                {breaktime}
            </p>
        </div>
        <Sun className="text-green-700 text-4xl" />
        </div>
}