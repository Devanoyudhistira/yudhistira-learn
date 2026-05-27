"use client"

export default function Daybutton({text,changebutton,currentday}){
    return <div onClick={changebutton} className={`w-18 h-max py-4 flex items-center justify-center text-xl font-light ${text === currentday ? "bg-blue-500 text-white" : "text-zinc-900 bg-zinc-100" } transition rounded-2xl shrink-0`} >
        {text}
    </div>
}