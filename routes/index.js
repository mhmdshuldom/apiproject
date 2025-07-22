import express from 'express';
import itemsRoutes from './items.routes.js';
import adviceRoutes from './advice.routes.js';

const router = express.Router();

router.use('/api', itemsRoutes);
router.use('/api', adviceRoutes);

export default router;
