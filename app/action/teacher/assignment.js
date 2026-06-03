"use server";

import { teacherdata } from "@/app/lib/user";
import { createClient } from "@/app/supabase/server";
import supabase from "@/app/supabase/supabase";

export async function addassignment(formdata) {
  const teacher = await teacherdata();
  const assigmentname = formdata.get("name");
  const deadline = formdata.get("deadline");
  const description = formdata.get("description");
  const schoolclass = formdata.get("class");
  const image = formdata.getAll("image");
  const namesfile = image.map((file) => `school/${file.name}`);
    console.log(namesfile)

  const { error } = await supabase.schema("sekolah").from("assignment").insert({
    name: assigmentname,
    description: description,
    class: schoolclass,
    teacher_id: teacher.id,
    deadline: deadline,
    subject: teacher.subject,
    status: "pending",
    submission_target: 34,
    image_support:namesfile
  });

  for (const file of image) {
    const fileName = `${crypto.randomUUID()}-${file.name}`;
    const { error: imageerror } = await supabase.storage
      .from("school")
      .upload(`school/${fileName}`,file);
  }
}
