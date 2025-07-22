import express from 'express';
import { getAdviceController } from '../controllers/advice.controller.js';

const router = express.Router();

router.get('/advice', getAdviceController);

export default router;
