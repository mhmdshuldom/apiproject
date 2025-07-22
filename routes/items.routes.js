import express from 'express';
import {
  getAllItemsController,
  getItemByIdController
} from '../controllers/items.controller.js';

const router = express.Router();

router.get('/items', getAllItemsController);
router.get('/items/:id', getItemByIdController);

export default router;
