import Dashboardcard from "@/app/components/teacher/dashboardcard";
import Navbar from "@/app/components/teacher/navbar";
import { Inter } from "next/font/google";
import { Search } from "react-bootstrap-icons";
const inter = Inter({})
export default function Page() {
    return (
        <main className={`${inter.className}`} >
            <Navbar />
            <div className="w-full px-2 flex flex-col gap-2">
                <div className="flex items-center bg-gray-50  shadow-black/20 mt-3" >
                    <h4 className="bg-transparent text-black h-15 w-max px-4 flex items-center text-2xl" > <Search /> </h4>
                    <input type="search" className="h-15 w-full text-2xl font-medium text-gray-700 placeholder:capitalize bg-transparent" />
                </div>
                <div className="w-full gap-3 px-2 flex flex-col items-center" >
                    <div className="w-full flex justify-between items-center " >
                        <h1 className="text-2xl font-semibold" > Dashboard Siswa </h1>
                        <h1 className="text-2xl capitalize text-blue-600 font-semibold" > X-tkj A </h1>
                    </div>
                    <Dashboardcard/>
                    <Dashboardcard/>
                    <Dashboardcard/>
                    <Dashboardcard/>
                </div>

            </div>
        </main>
    )
}