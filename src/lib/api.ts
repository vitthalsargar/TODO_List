import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export interface Task {
  _id: string;
  taskName: string;
  description?: string;
  status: 'pending' | 'completed';
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
}

export type TaskInput = Omit<Task, '_id' | 'createdAt' | 'updatedAt'>;

const api = axios.create({
  baseURL: API_URL,
});

export const taskApi = {
  getTasks: async (status?: string, search?: string) => {
    const params = new URLSearchParams();
    if (status) params.append('status', status);
    if (search) params.append('search', search);
    
    return api.get<Task[]>('/tasks', { params });
  },

  createTask: async (task: TaskInput) => {
    return api.post<Task>('/tasks', task);
  },

  updateTask: async (id: string, task: Partial<TaskInput>) => {
    return api.patch<Task>(`/tasks/${id}`, task);
  },

  deleteTask: async (id: string) => {
    return api.delete(`/tasks/${id}`);
  },
};