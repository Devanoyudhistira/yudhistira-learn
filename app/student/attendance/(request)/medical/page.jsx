

import { medicalrequest } from "@/app/action/student/attendancestudent";
import Formnav from "@/app/components/formnav";
import Medicalform from "@/app/components/student/medicalform";
import { Inter } from "next/font/google";
import { BagPlusFill } from "react-bootstrap-icons";

const inter = Inter({})

export default async function Medicalrequest() {
    return (
        <main className={"w-screen flex flex-col gap-3 items-center " + inter.className} >
            <Formnav target={"/student/attendance"} pagename={"absen karena alasan medis "} />
            <h1 className="text-5xl mt-4 shadow-md shadow-green-600/40 bg-green-500 text-white flex justify-center text-center p-4 rounded-full" >
                <BagPlusFill />
            </h1>
            <div className="text-center w-full flex flex-col items-center justify-center gap-1.5" >
                <h1 className="text-3xl font-semibold" > Kirimkan surat anda disini </h1>
                <p className="text-[18px] font-normal text-gray-600 w-80" > ingat untuk selalu lampirkan surat keterangan dari dokter sebagai bukti </p>
            </div>
            <Medicalform actionform={medicalrequest} />
        </main>
    )
}