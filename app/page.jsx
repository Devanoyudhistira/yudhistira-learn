import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Image from "next/image";
import { Backpack } from "react-bootstrap-icons";
import { Trophy } from "react-bootstrap-icons";
import { GraphUp } from "react-bootstrap-icons";
import { Tree } from "react-bootstrap-icons";
import { BookHalf } from "react-bootstrap-icons";
import { studentdata } from "./lib/user";
import { createClient } from "./supabase/server";
import Link from "next/link";
const plusjakarta = Plus_Jakarta_Sans()
const inter = Inter({})



export default async function Home() {
  const supabaseauth = await createClient()
  const { data: user } = await supabaseauth.auth.getUser()
  let idendity = null
  async function dashboard() {
    if (user.user) {
      let student = await studentdata()
      if (student) {
        return "/student"
      }
      else { return "/teacher" }
    }
    return "/login"
  }
  return (
    <main className="w-screen h-max overflow-x-hidden">
      <nav className={"flex w-full px-3 py-1 justify-between items-center " + plusjakarta.className} >
        <h1 className={`text-xl font-bold uppercase text-blue-600`} > DevanoSchool </h1>
        {user.user ? <Link href={await dashboard()} className="bg-blue-500  px-3.5 py-1 rounded-md shadow-md shadow-blue-800/50 font-semibold tracking wider text-md" > see dashboard</Link> : <Link href={await dashboard()} className="bg-blue-50 border border-blue-600  px-3.5 py-1 rounded-md shadow-md shadow-blue-800/50 font-semibold tracking wider text-xl" > Login </Link>}
      </nav>
      <header className={`w-full h-max px-2 pb-10  mt-4 ${inter.className} flex flex-col gap-3 items-center `} >
        <h1 className={`text-4xl px-3 capitalize tracking-wider ${inter.className} font-bold text-center`} >
          <span className=" py-2 text-blue-500 font-bold" >sekolah</span> nomer satu untuk menjamin masa depan anak anda
        </h1>
        <p className="text-xl font-medium w-full px-4 mt-4 text-center" >
          kembangkan bakat terpendam anak di DevanoSchool . Jadikan anak anda juara di masa kini maupun masa depan
        </p>
        <div className="w-full relative h-120 px-6" >
          <div className="absolute w-max h-max p-4 left-8 top-10 shadow-md shadow-orange-950 bg-orange-100 rounded-2xl flex items-center justify-center animate-[bounce_5s_infinite]">
            <Trophy size={30} />
          </div>
          <div className="absolute w-max h-max p-4 right-8 bottom-10 shadow-md shadow-emerald-950 bg-green-100 rounded-2xl flex items-center justify-center animate-[bounce_5s_infinite]">
            <Backpack size={30} />
          </div>
          <Image src={"/landing/mengajar.jpg"} alt="mengajar" className="w-full shadow-xl shadow-black/60 rounded-4xl h-full object-center object-cover" width={500} height={500} />
        </div>
        <div className="flex flex-col gap-10 items-center w-full px-2 mt-15 " >
          <div className="w-full" >
            <h1 className="bg-blue-200 text-center font-extrabold capitalize rounded-full px-6 py-4 text-2xl" > Mengapa memilih kami </h1>
            <div className="flex flex-col text-center w-full  font-light text-xl gap-6 items-center mt-6 "  >
              <p>Devanoschool adalah sekolah pemenang 5 penghargaan pengembangan yang berpusat di Edinburgh, Inggris. Kami percaya bahwa setiap anak itu unik, dan untuk mengembangkan keunikan tersebut menjadi hasil yang cemerlang, mereka membutuhkan pendidikan terbaik.</p>
              <p>
                Dengan pengalaman 12 tahun dalam pendidikan privat dan homeschooling, kami telah mendidik lebih dari 15.000 siswa menuju masa depan yang sukses dan bahagia.
              </p>
            </div>
          </div>
          <Image src={"/landing/teamwork.jpg"} alt="teamwork" width={400} height={400} className="object-cover mt-10 object-center w-[94%] -rotate-5 rounded-4xl h-full shadow-xl shadow-black/70" />
          <Image src={"/landing/proseskelas.jpg"} alt="teamwork" width={400} height={400} className="object-cover mt-10 object-center w-[94%] rotate-6 rounded-4xl h-full shadow-xl shadow-black/70" />
        </div>
      </header>
      <section className={"w-full px-5 pb-6 mt-8 h-max flex flex-col gap-8 items-center " + inter.className} >
        <div className="w-full h-60 p-2 flex flex-col items-center rounded-3xl bg-sky-100 shadow-xs shadow-blue-300/50 " >
          <div className="bg-blue-300 w-max p-4 rounded-xl" >
            <BookHalf className="text-blue-500" size={25} />
          </div>
          <h1 className="text-2xl font-bold text-blue-600 mt-4 " > edukasi kelas atas </h1>
          <p className="text-md font-medium text-center mt-1" >Get premium education with experts and internationally qualified teachers with innovative learning at great value.</p>
        </div>

        <div className="w-full h-max px-3 py-4 flex flex-col items-center rounded-3xl bg-emerald-100 shadow-xs shadow-green-300/50" >
          <div className="bg-green-300 w-max p-4 rounded-xl" >
            <Tree className="text-emerald-500" size={25} />
          </div>
          <h1 className="text-2xl font-bold text-green-600 mt-4 " > edukasi yang membumi </h1>
          <p className="text-md font-medium text-center mt-1" >Kami meneliti perilaku daerah setempat dan menyesuaikan pembelajaran kami dengan akar permasalahannya, namun tetap menggunakan metode yang bisa di terima oleh masyrakat </p>
        </div>

        <div className="w-full h-60 p-2 flex flex-col items-center rounded-3xl bg-orange-100 shadow-xs shadow-orange-300/50 " >
          <div className="bg-orange-300 w-max p-4 rounded-xl" >
            <GraphUp className="text-orange-500" size={25} />
          </div>
          <h1 className="text-2xl font-bold text-orange-600 mt-4 " > Evaluasi yang konsisten </h1>
          <p className="text-md font-medium text-center mt-1" >Anak-anak anda selalu di awasi oleh tenaga profesional untuk menjamin kualitas berpikir mereka </p>
        </div>
      </section>
      <article className={"w-[95%] rounded-4xl p-4 self-center justify-self-center h-max shadow-md shadow-black/50 pb-10 px-5 flex flex-col items-center" + inter.className} >
        <h4 className="text-xl font-bold p-1.5 rounded-full w-max bg-sky-100" > Fasilitas </h4>
        <h1 className="text-4xl font-semibold" > Fasilitas sekolah kami </h1>
        <div className="self-center mt-4 w-full h-max rounded-3xl overflow-hidden" >
          <Image src={"/landing/pool.png"} alt="pool" width={500} height={500} className="object-cover object-center w-full" />
          <div className="px-1" >
            <h1 className="text-2xl font-semibold" >kolam renang standar turnamen</h1>
            <p className="text-xl font-light mt-3" >kolam renang dengan standar profesional untuk menambah kompetensi anak </p>
          </div>
        </div>
      </article>
      <section className={"justify-self-center mt-7 gap-7 flex flex-col items-center " + inter.className} >
        <h6 className="w-max bg-sky-100 py-1.5 px-2 rounded-full text-md font-bold capitalize" > Dimana kami </h6>
        <div className=" rounded-2xl  pb-10 w-[80%] h-92 flex flex-col gap-2 overflow-hidden items-center shadow-black/50 shadow-xl " >
          <Image width={500} height={500} alt="school" src={"/landing/school.jpg"} className="w-full h-50 object-center object-cover" />
          <div className={"w-full px-4 flex flex-col gap-4 text-center " + inter.className} >
            <h1 className="text-2xl font-bold" >United Kingdom Campus</h1>
            <p className="text-xl font-medium" >
              32891 Dukengard Avenue 12 Smithbrook, VA 22112 United Kingdom
            </p>
          </div>
        </div>
      </section>
      <section className={"justify-self-center flex flex-col items-center py-2 mt-4 w-full h-max " + inter.className} >
        <h6 className="w-max bg-sky-100 py-1.5 px-2 rounded-full text-md font-bold capitalize text-center" > staff kami </h6>
        <h1 className="text-4xl mt-4 font-bold" > Guru Pilihan Terbaik </h1>
        <Image src={"/landing/teacher.jpg"} width={500} height={500} alt="teacher" className="object-center mt-4 object-cover w-[75%] rounded-2xl h-90" />
        <p className="text-md text-center font-medium w-full px-3 mt-3" >Staf pengajar kami terdiri dari para ahli yang beragam dan bersertifikasi internasional yang berdedikasi untuk mengembangkan potensi setiap siswa. Dengan pendidik dari lebih dari 12 negara, kami menghadirkan perspektif global ke dalam kurikulum lokal kami.</p>
        <div className="w-full px-10 flex items-center justify-center mt-2" >
          <div className="w-max h-max bg-zinc-50 shadow-2xs shadow-black/50 p-4 rounded-xl border-gray-100 border-2 flex flex-col justify-center" >
            <span className="text-3xl tracking-wider font-bold text-blue-600" >100%</span>
            <h2 className="text-md font-medium" > bersertifikasi </h2>
          </div>
        </div>
      </section>
      <footer className="w-screen h-20 flex items-center justify-center border-gray-100 border-t-2" >
        <span className="text-md font-semibold text-gray-500" > © 2024 Devano Private School. All rights reserved.</span>
      </footer>
    </main>
  );
}

