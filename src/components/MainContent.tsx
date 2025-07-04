"use client";

import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import { clearAll, deleteTask } from "@/features/tasks/taskSlice";
import { RootState, Task } from "@/constants/type";

export default function MainContent({
        setInputData, setEditingIndex,
    }: {
        setInputData: React.Dispatch<React.SetStateAction<{ name: string; select: string }>>;
        setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>;
    }){
    const tasks = useSelector((state: RootState) => state.task.list);
    const dispatch = useDispatch();
    
    return (
        <div className="container">
            <div 
                className="max-w-[700px] mx-auto bg-light border border-br rounded-xl mb-8"
            >
                {tasks.map((item : Task, index: number) => {
                    return (
                    <div key={index} 
                        className="flex items-center justify-between p-2.5 border-b border-br last:border-b-0"
                    >
                            <label htmlFor={`task-check-${index}`} className="relative flex items-center justify-center gap-2.5 cursor-pointer peer">
                                <input
                                    type="checkbox"
                                    id={`task-check-${index}`}
                                    className="peer hidden"
                                />
                                <div
                                    className="w-4 h-4 border border-secondary flex-none flex items-center justify-center cursor-pointer rounded-sm peer-checked:bg-secondary"
                                >
                                </div>
                                <FaCheck 
                                    className="text-light text-[10px] hidden peer-checked:block absolute top-1/2 left-[8px] -translate-1/2" 
                                />
                                <span 
                                    className="max-w-[390px] text-lg font-medium capitalize peer-checked:line-through peer-checked:italic"
                                >{item.name}</span>
                            </label>
                        <div className="flex items-center justify-center gap-2">
                            {item.tag === "Personal" ?
                                <span className="h-[33px] flex items-center justify-center flex-none px-4 text-light rounded-[5px] transition-all duration-300 ease-in-out bg-personal">Personal</span>
                            :
                                <span className="h-[33px] flex items-center justify-center flex-none px-4 text-light rounded-[5px] transition-all duration-300 ease-in-out bg-work">Work</span>
                            }
                            <button 
                                className="h-[33px] flex items-center justify-center flex-none px-4 rounded-[5px] cursor-pointer transition-all duration-300 ease-in-out border border-btn text-btn hover:bg-btn hover:text-light" 
                                onClick={() => {
                                    setInputData({name : item.name,  select: item.tag.toLowerCase(),});
                                    setEditingIndex(index);
                                }}
                            >Edit</button>
                            <button 
                                className="h-[33px] flex items-center justify-center flex-none px-4 rounded-[5px] cursor-pointer transition-all duration-300 ease-in-out border border-btn text-btn hover:bg-btn hover:text-light"
                                onClick={() => dispatch(deleteTask(index))}
                            >Delete</button>
                        </div>
                    </div>
                    )
                })}
            </div>
            <button 
                className="h-[33px] flex items-center justify-center flex-none px-4 rounded-[5px] cursor-pointer transition-all duration-300 ease-in-out border border-btn text-btn hover:bg-btn hover:text-light mx-auto mb-8"
                onClick={() => dispatch(clearAll())}
            >Clear all</button>
        </div>
    )
}