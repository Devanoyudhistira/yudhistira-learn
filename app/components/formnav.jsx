import Link from "next/link"
import { ArrowLeft } from "react-bootstrap-icons"

export default function Formnav({target,pagename}) {
    return <nav className="w-full h-14 bg-zinc-100 shadow-md shadow-black/20 flex items-center" >
        <Link href={target} className="flex justify-center text-blue-600 px-2 items-center gap-2 text-xl" >
            <ArrowLeft className="text-2xl" />
            <span className="capitalize font-medium" > {pagename} </span>
        </Link>
    </nav>
}