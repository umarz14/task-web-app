"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Task } from '../types/types';
import { Example } from '../pages/add-task';
import { title } from 'process';

// Remember React.FC is a react functional component

interface TaskCardProps {
  task: Task;
}

// This is our TaskCard Component that displays a single task
const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    // <div key={task.id} className="p-4 border border-dark rounded shadow-md mb-4 text-center">
    <div className="p-4 border border-dark rounded shadow-md mb-4 text-center">
      {/* <p>taskid: {task.id}</p> */}
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
      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        Complete
      </span>
    </div>
  );
}

// This is our Main Component first part gets our tasks from the API and the second part displays them
const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const client = axios.create({
    baseURL: 'http://http://127.0.0.1:8000/tasks'
  });
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get<Task[]>('http://127.0.0.1:8000/tasks/?format=json');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (task: Task) => {
    client.post('/tasks', task)
    .then((response) => {
      setTasks(response.data);
    })
  };

  const testAddTask = async () => {
    client.post('/tasks', {
      title: 'Test Task',
      description: 'This is a test task',
      status: 'incomplete',
      due_date: '2022-12-31'
    })
    .then((response) => {
      setTasks(response.data);
    })
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
