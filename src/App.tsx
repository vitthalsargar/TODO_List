import React from 'react';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import { Toaster, toast } from 'react-hot-toast';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { useThemeStore } from './stores/useThemeStore';
import { taskApi, type Task } from './lib/api';

function TaskTracker() {
  const queryClient = useQueryClient();
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [editingTask, setEditingTask] = React.useState<Task | undefined>();
  const [statusFilter, setStatusFilter] = React.useState<'pending' | 'completed'>();
  const [searchQuery, setSearchQuery] = React.useState('');
  const { isDarkMode } = useThemeStore();

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    setEditingTask(undefined);
  };

  const handleDelete = async (id: string) => {
    try {
      await toast.promise(
        taskApi.deleteTask(id),
        {
          loading: 'Deleting task...',
          success: 'Task deleted successfully',
          error: 'Failed to delete task'
        }
      );
      queryClient.invalidateQueries(['tasks']);
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  const handleStatusChange = async (id: string, status: 'pending' | 'completed') => {
    try {
      await toast.promise(
        taskApi.updateTask(id, { status }),
        {
          loading: 'Updating task...',
          success: `Task marked as ${status}`,
          error: 'Failed to update task'
        }
      );
      queryClient.invalidateQueries(['tasks']);
    } catch (error) {
      console.error('Failed to update task status:', error);
    }
  };

  return (
    <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-3xl mx-auto">
        <Header />

        <div className="mb-6 space-y-4">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            statusFilter={statusFilter}
            onStatusFilterChange={(status) => setStatusFilter(status as any)}
          />

          <button
            onClick={() => setIsFormOpen(true)}
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add New Task
          </button>
        </div>

        {isFormOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {editingTask ? 'Edit Task' : 'New Task'}
              </h2>
              <TaskForm task={editingTask} onClose={handleClose} />
            </div>
          </div>
        )}

        <TaskList
          status={statusFilter}
          searchQuery={searchQuery}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
        />
      </div>
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: isDarkMode ? '#374151' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#000000',
          },
        }}
      />
    </div>
  );
}

function App() {
  const queryClient = React.useMemo(() => new QueryClient(), []);
  return (
    <QueryClientProvider client={queryClient}>
      <TaskTracker />
    </QueryClientProvider>
  );
}

export default App;