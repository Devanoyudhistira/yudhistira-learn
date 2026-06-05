"use client"

import { Plus } from "react-bootstrap-icons"
import { useState } from "react";
import Image from "next/image";
import { PenFill } from "react-bootstrap-icons";
export default function Submitform({ action }) {
    const [showpreview, setshowpreview] = useState(false)
    const [imagepreview, setimagepreview] = useState("")
    const [image, setimage] = useState([])
    const handleChange = (e) => {
        const newFiles = Array.from(e.target.files);
        setimage((prev) => [...prev, ...newFiles]);
        console.log(image)
    };
    function openimage(imagepreviewurl) {
        setimagepreview(URL.createObjectURL(imagepreviewurl))
    }
        console.log(image)

    return (
        <form action={action} className="w-[95%] mt-6 h-max pb-10 self-center flex flex-col items-center gap-2" encType="multipart/form-data" >
            <div className="w-full h-max grid grid-cols-2 gap-x-2 gap-y-3" >

                {image.map(e => <div key={e.name} className="w-full bg-white border border-black  h-40  rounded-xl flex flex-col" >
                    <Image alt={e.name} width={300} height={300} className="w-full h-28 object-center object-cover" src={URL.createObjectURL(e)} />
                    <h1 className="px-1" > {e.name} </h1>
                </div>)}
                <label htmlFor="image" className="w-full h-40 border-dashed border-2 bg-sky-100  flex flex-col items-center justify-center rounded-xl" >
                    <input onChange={e => handleChange(e)} hidden type="file" name="image" id="image" multiple />
                    <h1 className="text-4xl flex items-center justify-center p-3 rounded-full bg-white" > <Plus /> </h1>
                    <h1 className="text-2xl font-medium capitalize" > Add file </h1>
                </label>
            </div>
                <button type="submit" className="w-full text-2xl justify-center py-2 rounded-4xl bg-blue-700 flex gap-2 items-center text-white" >  <PenFill/> Kumpulkan  </button>
        </form>)
}