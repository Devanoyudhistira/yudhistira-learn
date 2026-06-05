"use server";

import { studentdata } from "@/app/lib/user";
import supabase from "@/app/supabase/supabase";
import moment from "moment";

export async function medicalrequest(formdata) {
  const studentuser = await studentdata();
  const excuse = formdata.get("excuses");
  const description = formdata.get("description");
  const image = formdata.get("image");
  const randomname = crypto.randomUUID();
  const namafile = `school/${randomname}-${image.name}`;
  const { error } = await supabase
    .schema("sekolah")
    .from("attendance")
    .insert({
      student_id: studentuser.id,
      excuses: excuse,
      category: "sakit",
      absent_date: moment().format("YYYY-MM-DD"),
      description: description,
      proof_image: `school/${namafile}`,
    });

  const { error: imageerror } = await supabase.storage
    .from("school")
    .upload(`school/${namafile}`, image);

  console.log(error);
}

export async function personalrequest(formdata) {
  const studentuser = await studentdata();
  const excuse = formdata.get("excuses");
  const description = formdata.get("description");
  const image = formdata.get("image");
  const randomname = crypto.randomUUID();
  const namafile = `school/${randomname}-${image.name}`;
  const { error } = await supabase
    .schema("sekolah")
    .from("attendance")
    .insert({
      student_id: studentuser.id,
      excuses: excuse,
      category: "izin",
      absent_date: moment().format("yyyy-mm-hh"),
      description: description,
      proof_image: `school/${namafile}`,
    });
  const { error: imageerror } = await supabase.storage
    .from("school")
    .upload(`school/${namafile}`, image);

  console.log(imageerror);
  console.log(error);
}
