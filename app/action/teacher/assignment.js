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
  const namesfile = image.map((file) => {
    const extension = file.name.split(".").at(-1);
    const finalname =
      Math.random()
        .toString(36)
        .substring(2, 10 + 2) +
      "." +
      extension;
    return `${finalname}`;
  });

  const { error } = await supabase.schema("sekolah").from("assignment").insert({
    name: assigmentname,
    description: description,
    class: schoolclass,
    teacher_id: teacher.id,
    deadline: deadline,
    subject: teacher.subject,
    status: "pending",
    submission_target: 34,
    image_support: namesfile,
  });
  for (let i = 0; i < image.length; i++) {
    const file = image[i];

    const { data: imagedata, error: imageerror } = await supabase.storage
      .from("school")
      .upload(`${namesfile[i]}`, file);    
  }
  
}

export async function updatereview(id, formdata) {
  const rating = formdata.get("rating");
  const feedback = formdata.get("feedback");

  const { error } = await supabase
    .schema("sekolah")
    .from("completed_assignment")
    .update({
      rating: rating,
      corrected: true,
    })
    .eq("id", id); 
}
