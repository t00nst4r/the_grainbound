import { Router } from 'express';
import {getFreebies, subscribe} from '../controllers/freebies.controller';

const router = Router();

// POST /api/freebies/subscribe
router.post('/subscribe', subscribe);

// GET /api/freebies/archive?key=xyz
router.get('/archive', getFreebies);

export default router;