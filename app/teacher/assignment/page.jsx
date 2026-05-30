import Assignmentcard from "@/app/components/teacher/Assignmentcard";
import Navbar from "@/app/components/teacher/navbar";
import { Inter } from "next/font/google";

const inter = Inter({})

export default function Page(){
    return (<main className={"w-screen " + inter} >
        <Navbar/>
        <div className="flex flex-col w-full mt-3 px-1.5" >
            <h1 className="text-4xl font-semibold px-2 tracking-wide capitalize" > manage assignments </h1>
            <div className="flex flex-col gap-4 w-full py-3 px-2" >
                <Assignmentcard/>
                <Assignmentcard/>
                <Assignmentcard/>
            </div>
        </div>
    </main>)
}