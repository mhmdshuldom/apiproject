import express from 'express';
import cors from 'cors';
import { config } from './config/index.js';
import logger from './utils/logger.js';

const app = express();

app.use(cors());
app.use(express.json());

logger.info('Server starting...');

app.get('/', (req, res) => {
  res.send('Welcome -->my API server!');
});

app.get('/api/items', (req, res) => {
  res.json([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ]);
});

app.get('/api/items/:id', (req, res) => {
  const id = req.params.id;
  res.json({ id, name: `Item ${id}` });
});

app.get('/api/advice', (req, res) => {
  res.json({ advice: "This is your advice!" });
});
 
app.listen(config.port, () => {
  logger.info(`Server is running at http://localhost:${config.port}`);
});
