import { Router } from 'express';
import { taskController } from '../controllers/taskController.js';

const router = Router();

router.get('/', taskController.getTasks);
router.post('/', taskController.createTask);
router.patch('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export const taskRoutes = router;