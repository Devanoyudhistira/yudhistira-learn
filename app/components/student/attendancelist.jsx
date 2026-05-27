import { CircleFill } from "react-bootstrap-icons"

export default function Attendancelist({ status, alasan, tanggal }) {
    function attendancestatus(status) {
        if (status === "bolos") {
            return { bg: "bg-red-200", writing: "text-red-800", iconcolor: "text-red-300" }
        }
        else if (status === "izin") {
            return { bg: "bg-emerald-200", writing: "text-green-800", iconcolor: "text-emerald-300" }
        }
        return {
            bg: "bg-gray-200",
            writing: "text-gray-800",
            iconcolor: "text-gray-300"
        }
    }
    return (
        <li className="flex items-start w-full gap-3" >
            <CircleFill className={`text-2xl  mt-4 ${attendancestatus(status).iconcolor}`} />
            <div className="w-[90%]  flex flex-col px-3 py-2 rounded-3xl h-max bg-gray-100" >
                <div className="flex w-full justify-between items-center" >
                    <h4 className={`text-md px-4 py-2.5 w-max h-max ${attendancestatus(status).bg} ${attendancestatus(status).writing} rounded-full font-semibold`} > {status} </h4>
                    <h2 className="text-gray-600 font-medium text-md" > {tanggal} </h2>
                </div>
                <h1 className="text-xl mt-2 w-[80%] font-medium" > {alasan} </h1>
                {/* <h2 className="text-md font-light" > sampai tanggal 12 agustus </h2> */}
            </div>
        </li>
    )
}