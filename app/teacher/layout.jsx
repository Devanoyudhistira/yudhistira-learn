import supabase from "../supabase/supabase";
import { createClient } from "../supabase/server";
import { redirect } from "next/navigation";


export const metadata = {
  title: "teacher-page",
  description: "page for the teacher",
};

export default async function RootLayout({ children }) {
  const supabaseauth = await createClient()
  const { data: id } = await supabaseauth.auth.getUser()
  if (!id?.user) {
    redirect("/login")
  }
  const { data: user, error: usererror } = await supabase.schema("sekolah").from("teacher").select("name").eq("email", id.user.id).single()
  if (!user?.name) {
    redirect("/login")
  }
  return (
    <div className="w-screen h-max" >
      {children}
    </div>
  );
}