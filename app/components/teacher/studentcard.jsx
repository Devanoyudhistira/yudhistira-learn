import Image from "next/image";
import { Pen } from "react-bootstrap-icons";
export default function Studentcard({ name, status, value, image }) {
    console.log(value)
    return (
        <div className="w-full h-40 rounded-xl bg-zinc-50 shadow-md py-2 px-2 shadow-black/20 flex flex-col justify-between gap-3" >
            <div className="w-full flex justify-between items-center" >
                <div className="flex justify-between gap-2 items-center" >
                    <Image className="object-center object-cover w-18 h-18 rounded-full" src={image} height={200} width={200} alt={name} />
                    <div >
                        <h1 className="text-2xl font-semibold" >{name} </h1>
                        <h1>{status ? <h1 className="text-xs w-max capitalize tracking-wide font-bold bg-emerald-300 px-2 py-1 rounded-full " > Selesai </h1> : <h1 className="text-xs w-max  capitalize tracking-wide font-bold bg-red-300 px-2 py-1 rounded-full " > belum </h1>}</h1>
                    </div>
                </div>
                <h1 className={`text-2xl font-semibold ${status ? "text-blue-600" : "text-red-700"}`} > {value}/100 </h1>
            </div>
            {status &&
                <div className="flex w-full  gap-2 items-center" >
                    <button className="w-full py-2 px-4 rounded-2xl text-center font-semibold bg-sky-100 text-blue-800 flex items-center justify-center capitalize gap-2 " > <Pen/> Edit </button>
                    <button className="w-full py-2 px-4 rounded-2xl text-center font-semibold bg-sky-400 text-blue-50 flex items-center justify-center capitalize gap-2 " > <Pen/> View </button>
                </div>}
        </div>
    )
}