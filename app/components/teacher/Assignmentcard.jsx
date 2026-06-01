import moment from "moment";
import { CheckCircle } from "react-bootstrap-icons";
import { ArrowLeft } from "react-bootstrap-icons";
import { ArrowRight } from "react-bootstrap-icons";
import { ExclamationDiamond } from "react-bootstrap-icons";
import { People } from "react-bootstrap-icons";
import { Calendar } from "react-bootstrap-icons";
import { BookHalf } from "react-bootstrap-icons";

export default function Assignmentcard({subject,title,deadline,assignmentclass,expectation,alreadysubmit}) {    
    console.log(expectation)
    const percentage = Number(((alreadysubmit / expectation) * 100).toFixed(2))
    return (
        <div className="w-full h-max py-3 shadow-md bg-zinc-50 overflow-hidden shadow-black/50 px-2.5 rounded-2xl" >
            <div className="w-full mt-3 flex justify-between items-center">
                <div className="font-medium text-xl" >
                    <h1 className="text-blue-400" > {subject} </h1>
                    <h2 className="font-medium" > {title} </h2>
                </div>
                <h2 className="p-2 rounded-xl bg-blue-200 text-blue-600" >
                    <BookHalf className="text-3xl" />
                </h2>
            </div>
            <div className="text-xl mt-2 font-medium flex gap-2 items-center " >
                <div className="flex items-center gap-1" >
                    <Calendar />
                    <h1> {moment(deadline).locale("id").format("MMM hh")} </h1>
                </div>
                <span className="text-2xl" > | </span>
                <div className="flex items-center gap-1 " >
                    <People />
                    <h1> Kelas {assignmentclass} </h1>
                </div>
            </div>
            <div className="w-full mt-2" >
                <div className="w-full flex text-md justify-between " >
                    <h4 > Submission </h4>
                    <h4 className="text-blue-700 font-semibold" > {alreadysubmit} /{expectation} {percentage}% </h4>
                </div>
                <div className="w-full mt-1 bg-zinc-100 h-3 flex items-center rounded-2xl overflow-hidden" >
                    <div  style={{ width: `${percentage}%` }} className={` h-full bg-blue-700`} ></div>
                </div>
            </div>
            <div className="w-full flex gap-2 mt-3 items-center justify-between">
                <div className="w-full h-17 gap-4 bg-zinc-100 border-2 rounded-2xl border-zinc-800 flex justify-center items-center" >
                    <CheckCircle size={25} color="green" />
                    <div className="text-xl font-semibold" >
                        <h1> selesai  </h1>
                        <h2 className="-mt-1.5" > {alreadysubmit} </h2>
                    </div>
                </div>
                <div className="w-full h-17 bg-zinc-100 gap-2 border-2 rounded-2xl border-zinc-800 flex justify-center items-center" >
                    <ExclamationDiamond size={23} color="red" />
                    <div className="text-xl font-semibold" >
                        <h1> belum selesai  </h1>
                        <h2 className="-mt-1.5" > {expectation - alreadysubmit } </h2>
                    </div>
                </div>
            </div>
            <button className="w-full mt-3 flex items-center text-xl justify-center bg-blue-700 shadow-xl shadow-blue-900/30 py-3 font-semibold text-white gap-1.5 rounded-full" > 
                Lihat tugas <ArrowRight className="mt-1.5" />
             </button>
        </div>
    )
}