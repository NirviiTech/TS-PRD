import { Router } from 'express';
import { authenticateJWT } from '../middleware/auth.middleware.js';
import { checkAccess } from '../middleware/role.middleware.js';
import { createProject, getProjects } from '../controllers/project.controller.js';

const router = Router();

// Only FULL access can create a project
router.post(
  '/',
  authenticateJWT,
  checkAccess('project_creation', 'full'),
  createProject
);

// VIEW, LIMITED, FULL can see projects
router.get(
  '/',
  authenticateJWT,
  checkAccess('project_creation', 'view'),
  getProjects
);

export default router;
