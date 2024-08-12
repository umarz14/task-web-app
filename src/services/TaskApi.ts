import axios from 'axios';
import { Task } from '../types/Task';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000',
});

export const fetchTasks = () => api.get('/api/todos/');
export const addTask = (task: Task) => api.post('/api/todos/', task);