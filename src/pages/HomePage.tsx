import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList';
import AddTaskPage from '../pages/AddTaskPage';
import { Task } from '../types/Task';

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
  }, []);

  const addTask = async (task: Task) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/todos/', task);
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
          <AddTaskPage />
        </section>
        <section>
          <TaskList tasks={tasks} />
        </section>
      </div>
    </div>
  );
};

export default HomePage;