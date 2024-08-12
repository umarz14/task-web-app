import React from 'react';
import { Task } from '../types/Task';

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="p-4 border border-dark rounded shadow-md mb-4 text-center">
      <h2 className="text-2xl font-semibold text-blue-700">{task.title}</h2>
      <p className="text-blue-600">Description: {task.description}</p>
      <p className="text-blue-600">Status: {task.status}</p>
      <label className="inline-flex items-center mt-2">
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" />
        <span className="ml-2 text-blue-600">Complete</span>
      </label>
      {/* <p className="text-blue-600">Due Date: {task.due_date}</p> */}
      <hr className="my-2 border-blue-400" />
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        Incomplete
      </span>
    </div>
  );
};

export default TaskCard;