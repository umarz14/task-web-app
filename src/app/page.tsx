"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Task } from '../types/types';

const HomePage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

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

  return (
    <div className="container mx-auto p-4 bg-white min-h-screen text-black flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-6 text-blue-500">Task List</h1>
      {tasks.map((task) => (
        <div key={task.id} className="p-4 w-3/5 border border-dark rounded shadow-md mb-4 text-center">
          <h2 className="text-2xl font-semibold text-blue-700">{task.title}</h2>
          <p className="text-blue-600">Description: {task.description}</p>
          <p className="text-blue-600">Status: {task.status}</p>
          <p className="text-blue-600">Due Date: {task.due_date}</p>
          <hr className="my-2 border-blue-400" />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
