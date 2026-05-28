import moment from "moment";
import Image from "next/image";
import { Calendar2 } from "react-bootstrap-icons";
import { Calendar } from "react-bootstrap-icons";
import { Compass } from "react-bootstrap-icons";

export default function Eventcard({eventname,date}) {
    return (
        <div className="w-full h-max py-4 shadow-xl shadow-black/20 rounded-3xl flex items-center gap-3 px-4" >
            <Image src={"/landing/computeroom.jpg"} alt="event1" width={250} height={250} className="w-26 h-27 rounded-3xl object-cover object-center" />
            <div className="flex flex-col gap-0.5 capitalize " >
                <h1 className="text-black font-normal text-xl" > {eventname} </h1>
                <h2 className="text-md font-normal flex items-center gap-1" > <Calendar2/>  {moment(date).format("MMM DD") } - {moment.utc(date).format("HH:mm") } </h2>
                <h3 className="text-xs flex items-center text-center gap-1 "> <Compass size={10} /> ruang komputer </h3>
            </div>
        </div>
    )
}