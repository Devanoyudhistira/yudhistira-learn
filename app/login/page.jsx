import { Plus_Jakarta_Sans } from "next/font/google";
import supabase from "../supabase/supabase";
import { createClient } from "../supabase/server";
import Image from "next/image";
import { login } from "../action/auth";
const jakarta = Plus_Jakarta_Sans({})
export default async function Page() {        
    return (
        <div className={"w-screen h-screen bg-sky-100/40 flex flex-col relative " + jakarta.className} >
            <div className="absolute w-95 h-95 bg-linear-to-br -z-22 from-emerald-100 via-blue-100 to-sky-100 rounded-full -right-20 -top-44" ></div>
            <h1 className="justify-self-center self-center font-bold capitalize tracking-wide text-4xl mt-12" > Selamat datang </h1>
            <h5 className="text-md font-semibold self-center" > Memajukan pendidikan bangsa </h5>
            <form action={login} className="w-[95%] h-max py-4  mt-8 self-center justify-self-center rounded-xl shadow-black shadow-md bg-gray-50 flex flex-col items-center " >
                <label className="flex flex-col w-max h-max" >
                    <h1 className="text-md text-gray-400 font-bold capitalice" > Email </h1>
                    <input  type="email" className="border-2 focus:border-blue-500 transition border-gray-400  h-11 py-2 w-65 text-xl rounded-md px-1" name="email" id="email" />
                </label>
                <label className="flex flex-col w-max h-max" >
                    <h1 className="text-md text-gray-400 font-bold capitalize" > Password </h1>
                    <input type="password" className="border-2 focus:border-blue-500 border-gray-400 transition h-11 py-2 w-65 text-xl rounded-md px-1" name="password" id="password" />
                </label>
                <button type="submit" className="self-center mt-4 text-center font-semibold text-2xl tracking-wider rounded-full w-[85%] text-white h-max px-3 py-3 border-2 border-blue-600 bg-blue-500" >Login</button>
            </form>
            <div className="relative self-center w-[90%] mt-10 bg-zinc-200 h-36 rounded-xl overflow-hidden" >
                <div className="absolute left-0 top-0 bg-sky-600/20 w-full h-full z-10 flex items-center justify-center" >
                    <h1 className=" text-md bg-blue-600/40 font-bold text-white rounded-full px-3 py-2 " > Semoga anda menikmati sekolah kami </h1>
                </div>
                <Image alt="school-image" src={"/landing/school.jpg"} width={300} height={300} className="w-full h-full object-center object-cover" />
            </div>
            <footer className="absolute bottom-0 px-20 w-screen ml-1 -mb-1 h-25 flex flex-col items-center justify-between" >
                <div className="flex w-max h-max   justify-center items-center gap-5" >
                    <h3 className="text-gray-300 text-xl capitalize font-bold" > privacy</h3>
                    <h3 className="text-gray-300 text-xl capitalize font-bold" >Terms of service</h3>
                </div>
                <h1 className="text-gray-300 text-md w-max mb-8 px-10 font-bold" >© 2024 Severna School. All rights reserved.</h1>
            </footer>
        </div>
    )
}