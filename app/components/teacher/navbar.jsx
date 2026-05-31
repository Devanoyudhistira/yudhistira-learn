import Sidebar from "./sidebar";
import supabase from "@/app/supabase/supabase";
import { createClient } from "@/app/supabase/server";
export default async function Navbar(){   
    const supabaseauth = await createClient()
    const { data: id } = await supabaseauth.auth.getUser()    
    const { data: user, error: usererror } = await supabase.schema("sekolah").from("teacher").select("name").eq("email", id.user.id).single()         
    return (
        <nav className="w-full relative h-15 px-2 py-3 bg-sky-50/20 border border-gray-400 shadow-2xs shadow-black/10 flex items-center justify-between" >
            <Sidebar/>
                <div className="flex items-center justify-center gap-3 " >
                    <h1 className="text-2xl font-semibold " > {user.name} </h1>
                    <div className="w-10 flex items-center justify-center font-extrabold capitalize bg-sky-100/50 h-10 text-xl rounded-full border-2 border-blue-500" >
                        {user.name.split("")[0]}
                    </div>
                </div>
            </nav>
    )
}