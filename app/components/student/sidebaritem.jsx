import Link from "next/link"

export default function Sidebaritem({pathname,urlname,Icon,urlpath}) {
    return <div className={`flex items-center gap-3 py-3 px-2 capitalize w-full ${pathname === urlname ? "text-blue-600  bg-blue-700/20" : "text-gray-900"} rounded-xl`}  >
        {Icon}
        <Link href={`${urlpath}`} className={` text-2xl font-light `} > {urlname} </Link>
    </div>
}