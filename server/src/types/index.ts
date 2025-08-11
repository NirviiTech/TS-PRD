import { Router } from 'express';
import authRoutes from '../routes/auth.routes';
import clientRoutes from '../routes/client.routes';
import employeeRoutes from '../routes/employee.routes';
import projectRoutes from '../routes/project.routes';
import invoiceRoutes from '../routes/invoice.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/clients', clientRoutes);
router.use('/employees', employeeRoutes);
router.use('/projects', projectRoutes);
router.use('/invoices', invoiceRoutes);

export default router;
