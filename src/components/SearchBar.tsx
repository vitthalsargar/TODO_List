import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  statusFilter?: string;
  onStatusFilterChange: (status: string) => void;
}

export function SearchBar({
  searchQuery,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}: SearchBarProps) {
  return (
    <div className="flex space-x-4">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
      <select
        value={statusFilter || ''}
        onChange={(e) => onStatusFilterChange(e.target.value)}
        className="rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}