import React from 'react';
import TaskCard from './TaskCard';
import { Task } from '../types/Task';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskCard task={task} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;