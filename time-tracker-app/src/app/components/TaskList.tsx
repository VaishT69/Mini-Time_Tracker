"use client";
import { useRecoilState } from "recoil";
import { taskListState } from "../recoil/atoms";

export default function TaskList() {
  const [taskList, setTaskList] = useRecoilState(taskListState);

  const deleteTask = (index: number) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };

  const totalHoursWorked = taskList.reduce((sum, task) => sum + task.hoursworked, 0);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-extrabold mb-6">LIST OF TASKS</h2>
      <ul className="space-y-4">
        {taskList.map((task, idx) => (
          <li
            key={idx}
            className="bg-yellow-400 p-4 border rounded shadow flex justify-between items-center"
          >
            <div>
              {task.taskname}: {task.hoursworked} hours
            </div>
            <button
              onClick={() => deleteTask(idx)}
              className="bg-red-800 text-white px-4 py-2 rounded-3xl"
            >
              DELETE TASK
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-semibold">TOTAL HOURS WORKED: {totalHoursWorked}</p>
    </div>
  );
}
