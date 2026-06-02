"use client"

import { useState } from "react"

import Navline from "@/app/components/student/navline"
import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react"
import { X } from "react-bootstrap-icons"
import { PersonCircle } from "react-bootstrap-icons"
import { PersonCheck } from "react-bootstrap-icons"
import { Pass } from "react-bootstrap-icons"
import { Calendar3 } from "react-bootstrap-icons"
import { Calendar2 } from "react-bootstrap-icons"
import { BoxArrowRight } from "react-bootstrap-icons"
import { Inter } from "next/font/google"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Sidebaritem from "@/app/components/student/sidebaritem"
import { Table } from "react-bootstrap-icons"
import { logout } from "@/app/action/auth"

const inter = Inter({})

export default function Sidebar({ urlname }) {
    const [opensidebar, setopensidebar] = useState(false)
    const pathname = usePathname().split("/").at(-1)
    return (
        <>
            <div onClick={() => setopensidebar(true)} className="flex flex-col gap-1.5" >
                <Navline />
                <Navline />
                <Navline />
            </div>
            <AnimatePresence>
                {opensidebar &&
                    <aside className={"w-screen z-100 h-screen bg-zinc-950/30 fixed left-0 top-0 flex justify-start " + inter.className} >
                        <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="w-[80%] h-full bg-zinc-50 flex flex-col gap-2 justify-between px-3 py-6" >
                            <div className="w-full h-max flex flex-col gap-3 " >
                                <div className="flex justify-between items-center border-b-2 border-gray-300 pb-3" >
                                    <h1 className="text-3xl font-light text-blue-600" > Devanoschool </h1>
                                    <button onClick={() => setopensidebar(false)} > <X className="text-4xl text-red-600" /></button>
                                </div>
                                <div className="w-full flex flex-col gap-2 " >
                                    <Sidebaritem urlname={"teacher"} pathname={pathname} urlpath={"/teacher"} Icon={<PersonCircle className={`text-3xl`} />} />
                                    <Sidebaritem urlname={"attendance"} pathname={pathname} urlpath={"/teacher/attendance"} Icon={<PersonCheck className={`text-3xl`} />} />
                                    <Sidebaritem urlname={"assignment"} pathname={pathname} urlpath={"/teacher/assignment"} Icon={<Pass className={`text-3xl`} />} />
                                    <Sidebaritem urlname={"dashboard"} pathname={pathname} urlpath={"/teacher/dashboard"} Icon={<Table className={`text-3xl`} />} />
                                </div>
                            </div>
                            <form action={logout} className="w-full text-2xl px-6 text-red-600 h-20 border-t border-gray-400 flex gap-3 items-center " >
                                <BoxArrowRight />
                                <button type="submit" className=" font-light capitalize " > Sign Out </button>
                            </form>
                        </motion.div>
                    </aside>}
            </AnimatePresence>
        </>)
}