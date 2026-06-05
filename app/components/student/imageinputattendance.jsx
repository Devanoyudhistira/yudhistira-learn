"use client"

import Image from "next/image"
import { CloudDownload } from "react-bootstrap-icons"
import { useState } from "react";

export default function Imageinputattendance({ imagetext }) {
    const [proofimage, setproofimage] = useState(null)
    const handleChange = (e) => {
        const newFiles = URL.createObjectURL(e.target.files[0]);
        setproofimage(newFiles);
    };
    return <label htmlFor="image">
        <h1 className="text-md font-semibold capitalize" > {imagetext || "surat keterangan dokter"} </h1>
        <input onChange={e => handleChange(e)} type="file" name="image" id="image" hidden />
        <div className="w-full h-120 border-dashed overflow-hidden bg-gray-50 rounded-2xl border-2 flex flex-col items-center justify-center" >
            {!proofimage &&
                <>
                    <h1 className={`text-3xl ${imagetext ? "bg-yellow-200 text-yellow-600" : "bg-green-200 text-green-500"}  rounded-full p-3 flex justify-center items-center`} > <CloudDownload /> </h1>
                    <h2 className="text-xl font-semibold capitalize" > upload gambar disini </h2>
                    <p className="text-md text-gray-500 capitalize font-medium" > JPG,PNG,JPEG(Max 5 mb) </p>
                </>}
            {proofimage && <Image alt="gambar" className="w-full h-full object-cover object-center" width={500} height={500} src={proofimage} />}
        </div>
    </label>
}