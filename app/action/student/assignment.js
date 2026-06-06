"use server";

import { studentdata } from "@/app/lib/user";
import supabase from "@/app/supabase/supabase";

export async function assignmentsubmit(id, formdata) {
  const student = await studentdata();  
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
  const { data, error } = await supabase
    .schema("sekolah")
    .from("completed_assignment")
    .insert({
      assignment_id: id,
      student_id: student.id,
      status: "completed",
      rating: 0,
      image: namesfile,
    });  

  for (let i = 0; i < image.length; i++) {
    const file = image[i];

    const { data:imagedata, error: imageerror } = await supabase.storage
      .from("school")
      .upload(`${namesfile[i]}`, file);

    console.log(i);
  }
}
