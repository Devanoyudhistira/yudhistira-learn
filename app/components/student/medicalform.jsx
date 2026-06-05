

import Image from "next/image"
import { ExclamationCircle } from "react-bootstrap-icons"
import { CloudDownload } from "react-bootstrap-icons"
import Imageinputattendance from "./imageinputattendance"


export default function Medicalform({ actionform, imagetext, excusetext, warningtext }) {
    return (
        <form action={actionform} encType="multipart/form-data" className="flex flex-col gap-1.5 pb-8 w-full px-2" >
            <label className="flex flex-col items-start w-full  " htmlFor="excuses">
                <h1 className="text-md font-semibold capitalize" >  {excusetext || "sakit apa"} </h1>
                <input placeholder="silahkan tulis disini" className="text-md  font-medium border-2 border-gray-700 w-full px-2 py-1.5 transition focus:border-blue-700 shadow-md shadow-black/40 bg-gray-100 rounded-md" type="text" name="excuses" id="excuses" />
            </label>
            <label htmlFor="description">
                <h1 className="text-md font-semibold capitalize" > tolong jelaskan situasinya </h1>
                <textarea placeholder="jelaskan secara singkat" className="resize-none shadow-md transition focus:border-blue-700 shadow-black/20 w-full h-40 bg-gray-50 border-2 border-gray-500 px-2 py-1 rounded-xl" name="description" id="description"></textarea>
            </label>
            <Imageinputattendance imagetext={imagetext} />
            <div className="w-[93%] mt-2 self-center border-2 border-red-300 rounded-xl flex px-1 gap-3 bg-red-50 py-3" >
                <h1 className="text-3xl h-max p-2 text-red-700 bg-red-200 rounded-md flex justify-center items-center" > <ExclamationCircle /> </h1>
                <div className="flex flex-col gap-1" >
                    <h1 className="text-xl font-bold text-red-700" > tolong diperhatikan</h1>
                    <p className="text-md font-medium" > {warningtext || "Surat harus jelas menampilkan tanda tangan dokter disertai dengan tempat pemeriksaan, jika ada ketidak jelasan di surat dokter maka permintaan absen akan ditolak"} </p>
                </div>
            </div>
            <button className={`w-full py-3 ${imagetext ? "bg-yellow-300 " : "bg-green-300 "} text-white text-2xl h-max rounded-2xl font-semibold`}> kirimkan surat </button>
        </form>
    )
}