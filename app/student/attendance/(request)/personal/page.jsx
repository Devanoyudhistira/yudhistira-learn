import { personalrequest } from "@/app/action/student/attendancestudent";
import Formnav from "@/app/components/formnav";
import Medicalform from "@/app/components/student/medicalform";
import { Suitcase2 } from "react-bootstrap-icons";

export default function Personalrequest() {
    return (
        <main className="w-full flex flex-col items-center gap-1" >
            <Formnav target={"/student/attendance"} pagename={"absen karena alasan keluarga "} />
            <h1 className="text-5xl mt-4 shadow-md shadow-green-600/40 bg-yellow-200 text-white flex justify-center text-center p-4 rounded-full" >
                <Suitcase2/>
            </h1>
            <div className="text-center w-full flex flex-col items-center justify-center gap-1.5" >
                <h1 className="text-3xl font-semibold" > Kirimkan surat anda disini </h1>
                <p className="text-[18px] font-normal text-gray-600 w-80" > ingat untuk selalu lampirkan surat keterangan dari ketua rt/rw setempat </p>
            </div>
            <Medicalform actionform={personalrequest} imagetext={"tolong lampirkan surat dari rt/rw"} excusetext={"apa alasanya"} warningtext={"apabila surat yang dilampirkan tidak memiliki stempel rt/rw maka surat akan ditolak"} />
        </main>)
}