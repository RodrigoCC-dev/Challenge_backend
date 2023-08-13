import express from 'express';
import { index, create, destroy } from './controllers/postController.mjs';

const router = express.Router();

router.get('/posts/', (req, res) => {
  index(req, res);
});

router.post('/posts/', (req, res) => {
  create(req, res);
});

router.delete('/posts/:id', (req, res) => {
  destroy(req, res);
});

export default router;
