import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { taskApi, Task } from '../lib/api';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  status?: 'pending' | 'completed';
  searchQuery?: string;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: 'pending' | 'completed') => void;
}

export function TaskList({
  status,
  searchQuery,
  onEdit,
  onDelete,
  onStatusChange,
}: TaskListProps) {
  const { data: tasks, isLoading } = useQuery({
    queryKey: ['tasks', status, searchQuery],
    queryFn: async () => {
      const response = await taskApi.getTasks(status, searchQuery);
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      {tasks?.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}