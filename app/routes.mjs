import express from 'express';

const router = express.Router();

router.get('/posts/', (req, res) => {
  console.log('Se han solicitado todos los posts');
  res.status(200);
});

router.post('/posts/', (req, res) => {
  console.log('Se ha solicitado crear un post');
  res.status(200);
});

router.delete('/posts/:id', (req, res) => {
  console.log('Se ha solicitado borrar el post ' + req.params.id);
  res.status(200);
});

export default router;
