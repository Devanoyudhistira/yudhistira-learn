import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Image from "next/image";
import { GraphUp } from "react-bootstrap-icons";
import { Tree } from "react-bootstrap-icons";
import { BookHalf } from "react-bootstrap-icons";
const plusjakarta = Plus_Jakarta_Sans()
const inter = Inter({})
export default function Home() {
  return (
    <main className="w-screen h-max pb-10 overflow-x-hidden">
      <nav className="flex w-full px-3 py-1 justify-between items-center" >
        <h1 className={`text-xl font-bold uppercase text-blue-600 ${plusjakarta.className}`} > DevanoSchool </h1>
      </nav>
      <header className={`w-full h-max px-2 pb-10  mt-4 ${inter.className} flex flex-col gap-3 items-center `} >
        <h1 className={`text-4xl capitalize tracking-wider ${inter.className} font-semibold text-center`} >
          <span className=" py-2 text-blue-500 font-bold" >sekolah</span> nomer satu untuk menjamin masa depan anak anda
        </h1>
        <p className="text-xl font-medium w-full px-4 text-center" >
          kembangkan bakat terpendam anak di DevanoSchool . Jadikan anak anda juara di masa kini maupun masa depan
        </p>
        <div className="w-full h-80 px-6" >
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
          <Image src={"/landing/teamwork.jpg"} alt="teamwork" width={400} height={400} className="object-cover mt-10 object-center w-full -rotate-5 rounded-4xl h-full shadow-xl shadow-black/70" />
          <Image src={"/landing/proseskelas.jpg"} alt="teamwork" width={400} height={400} className="object-cover mt-10 object-center w-full rotate-6 rounded-4xl h-full shadow-xl shadow-black/70" />
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
      <section className={"w-[95%] rounded-4xl p-4 self-center justify-self-center h-max shadow-md shadow-black/50 pb-10 px-5 flex flex-col items-center" + inter.className} >
        <h4 className="text-xl font-bold p-1.5 rounded-full bg-sky-100" > Fasilitas </h4>
        <h1 className="text-4xl font-semibold" > Fasilitas sekolah kami </h1>
        <div className="self-center mt-4 w-full h-max rounded-3xl overflow-hidden" >
          <Image src={"/landing/pool.png"} alt="pool" width={500} height={500} className="object-cover object-center w-full" />
          <div className="px-1" >
            <h1 className="text-2xl font-semibold" >kolam renang standar turnamen</h1>
            <p className="text-xl font-light mt-3" >kolam renang dengan standar profesional untuk menambah kompetensi anak </p>
          </div>
        </div>

      </section>
    </main>
  );
}

