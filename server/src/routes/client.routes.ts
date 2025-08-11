import { Router } from 'express';
import { createClient, getClients } from '../controllers/client.controller.js';

const router = Router();

router.post('/', createClient);
router.get('/', getClients);

export default router;
