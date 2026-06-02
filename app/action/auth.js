"use server";

import { redirect } from "next/navigation";
import { createClient } from "../supabase/server";
import supabase from "../supabase/supabase";

export async function login(formdata) {
  const email = formdata.get("email");
  const password = formdata.get("password");
  const supabaseauth = await createClient();
  const { data,error } = await supabaseauth.auth.signInWithPassword({
    email: email,
    password: password,
  });
  console.log(error);

  const { data: user, error: usererror } = await supabase
    .schema("sekolah")
    .from("teacher")
    .select("name")
    .eq("email", data.user.id)
    .single();
  if (user?.name) {
    redirect("/teacher");
  }

  redirect("/student");
}

export async function logout(){
  const supabaseauth = await createClient();
  const {error} = await supabaseauth.auth.signOut()
  console.log(error)
  redirect("/login")
}
