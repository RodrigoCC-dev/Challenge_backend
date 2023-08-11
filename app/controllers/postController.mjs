import models from '../../db/models/index.js';

const { Post } = models;

async function index(req, res) {
  const posts = await Post.scope('dataOnly').findAll();
  res.status(200).json(posts);
};

async function create(req, res) {
  //console.log('Se ha solicitado crear un post');
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
  console.log('Se ha solicitado borrar el post ' + req.params.id);
  res.status(200);
};

export { index, create, destroy };
