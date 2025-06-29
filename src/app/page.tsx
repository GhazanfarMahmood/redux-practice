"use client";

import MainContent from "@/components/MainContent";
import Tabs from "@/components/Tabs";
import { RootState } from "@/constants/type";
import { useSelector } from "react-redux";

export default function Main() {
  const tasks = useSelector((state: RootState) => state.task.list);
  return <>
    {
      tasks.length > 0 ?
        <div className="min-h-[85vh] flex items-center flex-col justify-start">
          <Tabs />
          <MainContent />
        </div> 
        : 
        <div className="min-h-[85vh] flex items-center flex-col justify-center">
          <h1 className="text-center text-4xl font-bold text-text">Please Add a task</h1>
        </div>
    }
  </>
}