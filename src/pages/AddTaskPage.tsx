import React, { useActionState } from 'react';
import { createTask } from '../components/AddTask';
import { handleAddTask } from '../components/AddTask';
import { Task } from '../types/Task';
import { create } from 'domain';

export default function AddTaskPage() {
  // const InitialState = {messa}
  // const [formState, formAction] = useActionState(createTask,InitialState); 
  return (
    <form action={createTask}>
      <div className='space-y-3'>
        <div>
          <label htmlFor="task">Task</label>
          <input type="text" name="task" id="task" required/>
        </div>
        <div>
          <label htmlFor='description'>Description</label>
          <textarea name='description' id='description' required></textarea>
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <select name="status" id="status" required>
            <option value='incomplete'>Incomplete</option>
            <option value='completed'>Completed</option>
          </select>
        </div>
        <div>
          <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Add Task
          </button>
        </div>
      </div>
    </form>
  );
}