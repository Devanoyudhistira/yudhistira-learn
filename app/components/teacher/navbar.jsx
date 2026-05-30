import Sidebar from "./sidebar";
export default async function Navbar(){    
    return (
        <nav className="w-full relative h-15 px-2 py-3 bg-sky-50/20 border border-gray-400 shadow-2xs shadow-black/10 flex items-center justify-between" >
            <Sidebar/>
                <div className="flex items-center justify-center gap-3 " >
                    <h1 className="text-2xl font-semibold " > michael mathematic </h1>
                    <div className="w-10 flex items-center justify-center font-extrabold  bg-sky-100/50 h-10 text-xl rounded-full border-2 border-blue-500" >
                        L
                    </div>
                </div>
            </nav>
    )
}