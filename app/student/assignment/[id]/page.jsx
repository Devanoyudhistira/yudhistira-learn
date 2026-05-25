import Navbar from "@/app/components/student/navbar"
import { Inter } from "next/font/google"
import { AlarmFill } from "react-bootstrap-icons"
import { Alarm } from "react-bootstrap-icons"

const inter = Inter({})

export default async function page({ params }) {
    const { id } = await params
    console.log(id)
    return (
        <main className={"w-screen " + inter.className} >
            <Navbar />
            <h1 className="text-3xl font-semibold px-2 mt-4">
                Rangkum buku paket bahasa indonesia halaman 20-25
            </h1>
            <div className="flex gap-2 px-2 mt-4 items-center" >
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center uppercase text-md" >
                    L
                </div>
                <div>
                    <h2 className="text-xl font-semibold capitalize" > pak devano yudhistira </h2>
                    <h3 className="text-md font-light text-gray-600" > guru matematika </h3>
                </div>
            </div>

            <div className="w-[90%] rounded-2xl mt-3 bg-red-600/20 px-4 border border-red-700 justify-self-center self-center flex items-center justify-between" >
                <div className="flex gap-2 items-center" >
                    <div className="w-max h-max p-3 bg-red-800 text-2xl rounded-xl flex items-center justify-center" >
                        <AlarmFill color="white" />
                    </div>
                    <div className="flex flex-col gap-1 justify-center" >
                        <span className="text-xl font-bold text-red-600 uppercase" > Deadline </span>
                        <span className="text-xl font-bold text-gray-950 capitalize" >2 hari lagi</span>
                    </div>
                </div>
            </div>

            <article className="mt-3 px-3 " >
                <h1 className="text-3xl font-extrabold capitalize" > Description </h1>
                <p className="text-xl font-light text-black mt-4" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, unde itaque. Architecto blanditiis voluptates fuga eveniet rem esse a, quaerat excepturi saepe harum natus maiores velit cum minima culpa ullam quibusdam neque at repudiandae hic! Atque vitae quae esse similique, dolorum nihil ipsa odio consequatur placeat? A earum quaerat consequuntur facere unde repudiandae voluptate? Accusamus distinctio qui necessitatibus placeat voluptates soluta consequatur natus nihil, illo numquam architecto odit, voluptatibus in.</p>
            </article>
        </main>

    )
}