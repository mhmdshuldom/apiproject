import { fetchAdvice } from '../services/advice.service.js';
import logger from '../utils/logger.js';

export const getAdviceController = async (req, res) => {
  logger.http('GET /api/advice');
  try {
    const advice = await fetchAdvice();
    res.json(advice);
  } catch (error) {
    logger.error('Failed to fetch advice: ' + error.message);
    res.status(500).json({ error: 'Failed to fetch advice' });
  }
};
