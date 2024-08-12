import React from 'react';
import { Task } from '../types/Task';

const AddTaskPage: React.FC = () => {
  return (
    <button className='bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-800'>
      Add Task
    </button>
  );
};

export default AddTaskPage;