'use client';
import { useRecoilState } from "recoil";
import { taskListState } from "../recoil/atoms";
import { useState } from "react";

export default function TaskForm() {
    const [taskList, setTaskList] =  useRecoilState(taskListState);
    const [taskName, setTaskName] = useState('');
    const [hoursWorked, setHoursWorked] = useState('');

    const addTask = () => {
        if (!taskName || !hoursWorked) return;
        setTaskList([...taskList, {taskname: taskName, hoursworked: parseFloat(hoursWorked)}]);
        setTaskName('');
        setHoursWorked('');
    };

    return (
        <div className="flex flex-col items-center gap-4">
            <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter Your Task"
            className="p-2 border w-72"
            />
             <input
            type="number"
            value={hoursWorked}
            onChange={(e) => setHoursWorked(e.target.value)}
            placeholder="Enter Your Hours Worked"
            className="p-2 border w-72"
            />
            <button onClick={addTask} className="bg-amber-400 text-black px-4 py-4 rounded-2xl">
                Submit Task 
            </button>
        </div>
    )
}

