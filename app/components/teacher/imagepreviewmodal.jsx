"use client"

import Image from "next/image"

export default function Imagepreviewmodal({imagename,closepreview}){
    return(
        <div onClick={closepreview} className="fixed w-full h-full left-0 top-0 z-100 bg-black/20 flex items-center justify-center " >
            <Image width={700} height={700} alt={imagename} src={imagename} className="w-100 h-50 object-center object-cover" />
        </div>
    )
}