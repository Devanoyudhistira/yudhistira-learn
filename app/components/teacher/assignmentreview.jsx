"use client"
import Image from "next/image";
import { useState } from "react";
/* eslint-disable jsx-a11y/alt-text */
import { ImageAlt } from "react-bootstrap-icons";

export default function Assignmentreview({ data }) {
    const [imagepreview, setimagepreview] = useState(data[0])
    return (
        <div className="px-3 w-full " >
            <div className="w-full px-5 place-content-center place-items-center grid grid-cols-2 gap-x-5 gap-y-1.5 " >
                {data.map((e, i) =>
                    <label htmlFor={i} key={i} className="w-43  py-2 h-35 rounded-2xl bg-sky-50 border-gray-200 border flex flex-col gap-5" >
                        <input onChange={() => setimagepreview(e)} type="checkbox" hidden name="image" id={i} />
                        <ImageAlt className="text-3xl ml-4 text-blue-600" />
                        <h1 className="text-2xl ml-2 font-normal" > gambar {i + 1} </h1>
                    </label>
                )}
            </div>
            <div className="w-full h-70 mt-4 rounded-2xl" >
                <Image alt={imagepreview} width={400} height={400} className="object-center object-cover w-full h-full" src={`https://bmqqribeuxnppfcxittg.supabase.co/storage/v1/object/public/school/${imagepreview}`} />
            </div>
        </div>
    )
}