import { Router } from 'express';
import authRoutes from '../routes/auth.routes.js';
import clientRoutes from '../routes/client.routes.js';
import employeeRoutes from '../routes/employee.routes.js';
import projectRoutes from '../routes/project.routes.js';
import invoiceRoutes from '../routes/invoice.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/clients', clientRoutes);
router.use('/employees', employeeRoutes);
router.use('/projects', projectRoutes);
router.use('/invoices', invoiceRoutes);

export default router;
