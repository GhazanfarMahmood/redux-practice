"use client";

import { RootState } from "@/constants/type";
import { addTask, updateTask } from "@/features/tasks/taskSlice";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Navbar({
        inputData, setInputData, editingIndex, setEditingIndex
    } : {
        inputData : {name : string; select : string}; 
        setInputData : React.Dispatch<React.SetStateAction<{name : string; select : string}>>;
        editingIndex : number | null;
        setEditingIndex : React.Dispatch<React.SetStateAction<number | null>>;
    }) {

    const task = useSelector((state: RootState) => state.task.list);
    const dispatch = useDispatch();

    // here we define the type of form as the form event
    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (inputData.name.trim() !== "" ) {
            const normalizedTag = inputData.select.toLowerCase() === "work" ? "Work" : "Personal";
            const isDuplicate = task.some((t) => t.name.toLocaleLowerCase() === inputData.name.trim().toLowerCase());


        if (editingIndex !== null) {
            dispatch(
            updateTask({
                index: editingIndex,
                updatedTask: {
                name: inputData.name.trim(),
                tag: normalizedTag,
                },
            })
            );
            setEditingIndex(null);
        } else {
            if(isDuplicate){
                alert("task is already exist!");
                return ;
            }
            dispatch(
            addTask({
                name: inputData.name.trim(),
                tag: normalizedTag,
            })
            );
        }
        }
        setInputData({ name: "", select: "personal" });
    };
    // here we define the type of changeEvent along with the two field one is the inputField and other is the select element field
    const handleChange = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) =>{
        const {name, value} = e.target;
        setInputData((prev) => ({...prev, [name]: value }))
    }

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
            className="h-[38px] w-full max-w-[400px] flex items-center justify-center gap-2.5 bg-light p-1 border-[1px] border-br rounded-[5px]"
            onSubmit={handleSubmit}
            >
                {/* name of form field, like input, select and textarea will be that we put as the key in the useState hook like we put key name="" than we use name="name" in useState hook */}
                <select name="select" value={inputData.select}  onChange={handleChange} className="focus:outline-none" >
                    <option value="personal">Personal</option>
                    <option value="work">Work</option>
                </select>
                <input type="text" placeholder="Search" value={inputData.name} name="name" onChange={handleChange} className="w-full pl-1.5 focus:outline-none" />
                <button type="submit" 
                className="h-[33px] flex-none bg-btn text-light rounded-[5px] px-[13px] cursor-pointer transition-all duration-300 ease-in-out hover:bg-btn-hover"
                >
                    {editingIndex !== null ? 'Update' : 'Add'}
                </button>
            </form>
        </div>
    </header>
}