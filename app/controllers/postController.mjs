import models from '../../db/models/index.js';

const { Post } = models;

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
    res.status(200).json(post);
  } catch (e) {
    console.error(e);
    res.status(422).json({error: e.msg})
  }
};

async function destroy(req, res) {
  let post = await Post.findByPk(req.params.id);
  try {
    await post.destroy();
    res.status(200).json(post);
  } catch (e) {
    console.error(e);
    res.status(422).json({error: 'No fue posible eliminar el post'});
  }
};

export { index, create, destroy };
