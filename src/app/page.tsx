"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Example } from '@/pages/add-task';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  due_date: string;
}

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
      <p className="text-blue-600">Due Date: {task.due_date}</p>
      <hr className="my-2 border-blue-400" />
      <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
        Incomplete
      </span>
    </div>
  );
};

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get<Task[]>('http://127.0.0.1:8000/api/todos/');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); // Empty dependency array ensures this runs only once

  const testAddTask = async () => {
    const newTask = {
      title: 'New Task',
      description: 'This is a new task',
      status: 'Incomplete',
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/todos/', newTask);
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-white min-h-screen text-black flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Welcome To My Task Web App!!</h1>
      <div className="grid grid-cols-2 gap-4">
        <section className="w-1/2">
          <Example />
        </section>
        <div>
          <h1 className="text-2xl font-bold mb-6 text-blue-500">Task to Complete:</h1>
          <button onClick={testAddTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Test Task</button>
          <ul>
            {tasks.map((task) => (
              <li key={task.id}>
                <TaskCard task={task} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;