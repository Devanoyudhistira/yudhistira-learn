import { createClient } from "@/app/supabase/server";
import supabase from "../supabase/supabase";
export async function studentdata(){
    const supabaseauth = await createClient()    
    const { data: id } = await supabaseauth.auth.getUser()    
    const { data: user, error: usererror } = await supabase.schema("sekolah").from("students").select("*").eq("email", id.user.id).single()    
    return user
}