import { Router } from 'express';
import authRoutes from './auth.routes';
import clientRoutes from './client.routes';
import employeeRoutes from './employee.routes';
import projectRoutes from './project.routes';
import invoiceRoutes from './invoice.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/clients', clientRoutes);
router.use('/employees', employeeRoutes);
router.use('/projects', projectRoutes);
router.use('/invoices', invoiceRoutes);

export default router;
