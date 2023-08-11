import models from '../../db/models/index.js';
import sequelize from 'sequelize';

const { Post } = models;
const { ValidationError } = sequelize;

async function index(req, res) {
  const posts = await Post.scope('dataOnly').findAll();
  res.status(200).json(posts);
};

async function create(req, res) {
  let post = Post.build({
    name: req.body.name,
    description: req.body.description
  });
  try {
    await post.save();
    res.status(201).json(post);
  } catch (e) {
    if (e instanceof ValidationError) {
      res.status(422).json({error: e.errors[0].message});
    }
    console.error(e);
  }
};

async function destroy(req, res) {
  let post = await Post.findByPk(req.params.id);
  if (post !== null) {
    try {
      await post.destroy();
      res.status(200).json(post);
    } catch (e) {
      res.status(422).json({error: 'No fue posible eliminar el post'});
      console.error(e);
    }
  } else {
    res.status(422).json({error: 'No existe el post con id ' + req.params.id});
  }
};

export { index, create, destroy };
