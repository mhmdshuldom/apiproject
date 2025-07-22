import { fetchAllItems, fetchItemById } from '../services/items.service.js';
import { createLogger } from '../utils/logger.js';
const logger = createLogger('ItemsController');

export const getAllItemsController = (req, res) => {
  logger.http('GET /api/items');
  const items = fetchAllItems();
  res.json(items);
};

export const getItemByIdController = (req, res) => {
  const id = req.params.id;
  logger.http(`GET /api/items/${id}`);
  const item = fetchItemById(id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ error: 'Item no---...ound' });
  }
};
