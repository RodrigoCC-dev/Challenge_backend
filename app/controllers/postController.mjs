import models from '../../db/models/index.js';

const { Post } = models;

async function index(req, res) {
  //console.log('Se han solicitado todos los posts');
  const posts = await Post.scope('dataOnly').findAll();
  res.status(200).json(posts);
};

async function create(req, res) {
  console.log('Se ha solicitado crear un post');
  res.status(200);
};

async function destroy(req, res) {
  console.log('Se ha solicitado borrar el post ' + req.params.id);
  res.status(200);
};

export { index, create, destroy };
