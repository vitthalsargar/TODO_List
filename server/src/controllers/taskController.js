import { Task } from '../models/task.js';

export const taskController = {
  // Get all tasks with optional filters
  async getTasks(req, res) {
    try {
      const { status, search } = req.query;
      let query = {};

      if (status) {
        query.status = status;
      }

      if (search) {
        query.taskName = { $regex: search, $options: 'i' };
      }

      const tasks = await Task.find(query).sort({ dueDate: 1 });
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create a new task
  async createTask(req, res) {
    try {
      const task = new Task(req.body);
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Update a task
  async updateTask(req, res) {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Delete a task
  async deleteTask(req, res) {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.json({ message: 'Task deleted' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};