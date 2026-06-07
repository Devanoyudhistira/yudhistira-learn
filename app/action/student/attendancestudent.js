"use server";

import { studentdata } from "@/app/lib/user";
import supabase from "@/app/supabase/supabase";
import moment from "moment";
import { redirect } from "next/navigation";
export async function medicalrequest(formdata) {
  const studentuser = await studentdata();
  const excuse = formdata.get("excuses");
  const description = formdata.get("description");
  const image = formdata.get("image");
  const extension = image.name.split(".").at(-1);
  const finalname =
    Math.random()
      .toString(36)
      .substring(2, 10 + 2) +
    "." +
    extension;

  const { error,data } = await supabase
    .schema("sekolah")
    .from("attendance")
    .insert({
      student_id: studentuser.id,
      excuses: excuse,
      category: "sakit",
      absent_date: moment().format("YYYY-MM-DD"),
      description: description,
      proof_image: `school/${finalname}`,
    }).select("id,student_id").single() ;

    const {error:studentattendanceerror} = await supabase.schema("sekolah").from("students").update({
      attendance_id:data.student_id
    }).eq("id",data.student_id)
    console.log(studentattendanceerror)

  const { error: imageerror } = await supabase.storage
    .from("school")
    .upload(`school/${finalname}`, image);

  console.log(error);
  redirect("/student/attendance");
}

export async function personalrequest(formdata) {
  const studentuser = await studentdata();
  const excuse = formdata.get("excuses");
  const description = formdata.get("description");
  const image = formdata.get("image");
  const extension = image.name.split(".").at(-1);
  const finalname =
    Math.random()
      .toString(36)
      .substring(2, 10 + 2) +
    "." +
    extension;

  const { error } = await supabase
    .schema("sekolah")
    .from("attendance")
    .insert({
      student_id: studentuser.id,
      excuses: excuse,
      category: "izin",
      absent_date: moment().format("yyyy-mm-hh"),
      description: description,
      proof_image: `school/${finalname}`,
    });
  const { error: imageerror } = await supabase.storage
    .from("school")
    .upload(`school/${finalname}`, image);

  console.log(imageerror);
  console.log(error);
  redirect("/student/attendance");
}
