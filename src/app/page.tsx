"use client";

import Footer from "@/components/Footer";
import MainContent from "@/components/MainContent";
import Navbar from "@/components/Navbar";
// import Tabs from "@/components/Tabs";
import { RootState } from "@/constants/type";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Main() {
  const tasks = useSelector((state: RootState) => state.task.list);
  const [inputData, setInputData] = useState({name : "", select : "personal"});
  const [editingIndex, setEditingIndex] = useState<number | null>(null);


  return <>
    <Navbar
      inputData={inputData}
      setInputData={setInputData}
      editingIndex={editingIndex}
      setEditingIndex={setEditingIndex}
    />
    {
      tasks.length > 0 ?
        <div className="min-h-[85vh] flex items-center flex-col justify-start">
          <MainContent
            setInputData={setInputData}
            setEditingIndex={setEditingIndex}
          />
        </div> 
        : 
        <div className="min-h-[85vh] flex items-center flex-col justify-center">
          <h1 className="text-center text-4xl font-bold text-text">Please Add a task</h1>
        </div>
    }
    <Footer />
  </>
}