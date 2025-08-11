import { Router } from 'express';
import authRoutes from './auth.routes.js';
import clientRoutes from './client.routes.js';
import employeeRoutes from './employee.routes.js';
import projectRoutes from './project.routes.js';
import invoiceRoutes from './invoice.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/clients', clientRoutes);
router.use('/employees', employeeRoutes);
router.use('/projects', projectRoutes);
router.use('/invoices', invoiceRoutes);

export default router;
