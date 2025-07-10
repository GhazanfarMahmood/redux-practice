"use client";

import { useDispatch, useSelector } from "react-redux";
import { FaCheck } from "react-icons/fa6";
import { clearAll, deleteTask, toggleTaskStatus } from "@/features/tasks/taskSlice";
import { RootState, Task } from "@/constants/type";
import { useState } from "react";

export default function MainContent({
  setInputData,
  setEditingIndex,
}: {
  setInputData: React.Dispatch<React.SetStateAction<{ name: string; select: string }>>;
  setEditingIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const tasks = useSelector((state: RootState) => state.task.list);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "completed") return task.completed;
    if (activeTab === "pending") return !task.completed;
    return true;
  });

  return (
    <div className="container">
      <div className="flex items-center justify-center gap-2 my-8">
        {['all', 'completed', 'pending'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`h-[33px] px-4 rounded-[5px] transition-all duration-300 ease-in-out border border-btn text-btn hover:bg-btn hover:text-light cursor-pointer ${activeTab === tab ? 'bg-btn text-light' : ''}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="max-w-[700px] mx-auto bg-light border border-br rounded-xl mb-8">
        {filteredTasks.map((item: Task, index: number) => (
          <div
            key={index}
            className="flex items-center justify-between p-2.5 border-b border-br last:border-b-0"
          >
            <label
              htmlFor={`task-check-${index}`}
              className="relative flex items-center justify-center gap-2.5 cursor-pointer peer"
            >
              <input
                type="checkbox"
                id={`task-check-${index}`}
                className="peer hidden"
                checked={item.completed || false}
                onChange={() => dispatch(toggleTaskStatus(index))}
              />
              <div className="w-4 h-4 border border-secondary flex-none flex items-center justify-center cursor-pointer rounded-sm peer-checked:bg-secondary" />
              <FaCheck className="text-light text-[10px] hidden peer-checked:block absolute top-1/2 left-[8px] -translate-1/2" />
              <span className="max-w-[390px] text-lg font-medium capitalize peer-checked:line-through peer-checked:italic">
                {item.name}
              </span>
            </label>

            <div className="flex items-center justify-center gap-2">
              {item.tag === "Personal" ? (
                <span className="flex items-center justify-center h-[33px] px-4 text-light rounded-[5px] bg-personal">
                  Personal
                </span>
              ) : (
                <span className="flex items-center justify-center h-[33px] px-4 text-light rounded-[5px] bg-work">
                  Work
                </span>
              )}
              <button
                className="h-[33px] px-4 border border-btn text-btn hover:bg-btn hover:text-light rounded-[5px] cursor-pointer"
                onClick={() => {
                  setInputData({ name: item.name, select: item.tag.toLowerCase() });
                  setEditingIndex(index);
                }}
              >
                Edit
              </button>
              <button
                className="h-[33px] px-4 border border-btn text-btn hover:bg-btn hover:text-light rounded-[5px] cursor-pointer"
                onClick={() => dispatch(deleteTask(index))}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {tasks.length > 0 && (
        <button
          className="block h-[33px] px-4 border border-btn text-btn hover:bg-btn hover:text-light rounded-[5px] mx-auto mb-8 cursor-pointer"
          onClick={() => dispatch(clearAll())}
        >
          Clear all
        </button>
      )}
    </div>
  );
}
