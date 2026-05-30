"use client"

export default function Attendancestatus({status,active}){

    function statuscolor(){
        if(status === "hadir"){
            return "text-blue-700 bg-blue-200"
        } else if(status === "sakit"){
            return "text-green-700 bg-green-200"
        }
         else if(status === "izin"){
            return "text-orange-700 bg-orange-200"
        }
        else{
            return "text-red-700 bg-red-200"
        }        
    }

    return  <h1 className={`px-3 py-1 w-full flex items-center justify-center  ${active ? statuscolor() : "text-gray-700 bg-zinc-200" } rounded-md`} > {status} </h1>
}