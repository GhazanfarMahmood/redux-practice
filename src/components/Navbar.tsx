import Link from "next/link";
import { IoMdMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

export default function Navbar() {
    return <header className="bg-light py-2.5">
        <div 
            className="flex items-center justify-between container"
        >
            <Link href={"/"} aria-label="home page link" 
                className="text-2xl font-bold"
            >
                Task Manager
            </Link>
            <form 
            className="h-[38px] w-full max-w-[350px] flex items-center justify-center gap-2.5 bg-light p-1 border-[1px] border-br rounded-[5px]"
            >
                <input type="text" placeholder="Search" className="w-full" />
                <button type="submit" 
                className="w-[60px] h-[33px] flex-none bg-btn text-light rounded-[5px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-btn-hover"
                >Add</button>
            </form>
            <button 
                className="w-[34px] h-[34px] flex items-center justify-center border-[1px] border-br rounded-[5px] cursor-pointer"
            >
                <IoSunny className="text-2xl" />
                <IoMdMoon className="text-2xl hidden" />
            </button>
        </div>
    </header>
}