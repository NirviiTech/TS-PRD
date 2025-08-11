import { Router } from 'express';
import { createEmployee, getEmployees } from '../controllers/employee.controller.js';

const router = Router();

router.post('/', createEmployee);
router.get('/', getEmployees);

export default router;
