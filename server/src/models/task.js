import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'pending'
  },
  dueDate: {
    type: Date
  }
}, {
  timestamps: true
});

export const Task = mongoose.model('Task', taskSchema);