"use client"

import { useState } from "react"
import { FileEarmarkArrowUp } from "react-bootstrap-icons"
import Filepreview from "./filepreview"
import Imagepreviewmodal from "./imagepreviewmodal"
import truncate from "@/app/function/truncat"

export default function Assignmentfileinput() {
    const [images, setimages] = useState([])
    const [showpreview, setshowpreview] = useState(false)
    const [imagepreview, setimagepreview] = useState("")
    const handleChange = (e) => {
        const newFiles = Array.from(e.target.files);

        setimages((prev) => [...prev, ...newFiles]);
    };

    function openimage(imagepreviewurl) {
        setshowpreview(true)
        setimagepreview(URL.createObjectURL(imagepreviewurl))
    }

    console.log(images)
    return (
        <div className="w-full h-max" >
            <label htmlFor="image" className="w-full h-max p-3.5 flex flex-col gap-2" >
                <input onChange={e => handleChange(e)} type="file" multiple hidden name="image" id="image" />
                <h1> Dokumen tambahan </h1>
                <div className="w-full px-3 border-2 border-dashed rounded-3xl h-35 flex flex-col justify-center items-center " >
                    <div className="flex items-center gap-2" >
                        <h1 className="text-3xl p-4 text-blue-800 bg-blue-200 flex justify-center items-center rounded-full" > <FileEarmarkArrowUp /> </h1>
                        <div>
                            <h1 className="text-md font-semibold text-blue-700" >tolong tambahkan dokumen untuk mempermudah murid</h1>
                            <p className="text-xs font-normal capitalize" > JPG,JPEG,PNG (max:8MB) </p>
                        </div>
                    </div>
                </div>
            </label>
            <div className="w-full h-max flex flex-col gap-1.5" >
                {images.map(e => <Filepreview name={truncate(e.name, 17)} showimage={() => openimage(e)} key={e} />)}
            </div>
            {showpreview && <Imagepreviewmodal closepreview={() => setshowpreview(false)} imagename={imagepreview} />}
        </div>)
}