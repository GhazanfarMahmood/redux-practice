"use client";

import { useState } from "react";


export default function Tabs(){
    const [active, setActive] = useState<boolean>(true)
    return <>
        <div className="container flex items-center justify-center gap-2 my-8">
            <button 
                aria-label="all"
                className={`h-[33px] flex items-center justify-center flex-none px-4 text-text rounded-[5px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-btn hover:text-light ${active ? "bg-btn text-light! hover:bg-btn-hover" : ""}`}
            >All</button>
            <button
                aria-label="completed"
                className="h-[33px] flex items-center justify-center flex-none px-4 text-text rounded-[5px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-btn hover:text-light"
            >Completed</button>
            <button
                aria-label="pending"
                className="h-[33px] flex items-center justify-center flex-none px-4 text-text rounded-[5px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-btn hover:text-light"
            >Pending</button>
        </div>
    </>
}