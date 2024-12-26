import React from 'react';
import { format } from 'date-fns';
import { CheckCircle2, Circle, Pencil, Trash2 } from 'lucide-react';
import type { Task } from '../lib/api';

interface TaskItemProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: 'pending' | 'completed') => void;
}

export function TaskItem({ task, onEdit, onDelete, onStatusChange }: TaskItemProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={() =>
            onStatusChange(task._id, task.status === 'pending' ? 'completed' : 'pending')
          }
          className="text-gray-500 hover:text-green-500 transition-colors"
        >
          {task.status === 'completed' ? (
            <CheckCircle2 className="w-6 h-6" />
          ) : (
            <Circle className="w-6 h-6" />
          )}
        </button>
        <div>
          <h3
            className={`text-lg font-medium ${
              task.status === 'completed'
                ? 'text-gray-500 line-through'
                : 'text-gray-900 dark:text-white'
            }`}
          >
            {task.taskName}
          </h3>
          {task.description && (
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {task.description}
            </p>
          )}
          {task.dueDate && (
            <p className="text-sm text-gray-500">
              Due: {format(new Date(task.dueDate), 'PPP')}
            </p>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(task)}
          className="p-2 text-gray-500 hover:text-blue-500 transition-colors"
        >
          <Pencil className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="p-2 text-gray-500 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}