/* eslint-disable jsx-a11y/alt-text */
"use client"

import { X } from "react-bootstrap-icons"
import { Image } from "react-bootstrap-icons"
import { useState } from "react";
export default function Filepreview({ showimage, name }) {    
    return (<div onClick={showimage} className="flex items-center justify-between text-xl py-3 w-full px-4 bg-gray-200/40 border border-gray-500 rounded-2xl  " >
        <div className="flex items-center gap-2" >
            <h1> <Image className="text-blue-700" />  </h1>
            <h2 className="font-normal text-md" > {name} </h2>
        </div>
        <button className="text-red-700 text-4xl" >  <X /> </button>
    </div>)
}