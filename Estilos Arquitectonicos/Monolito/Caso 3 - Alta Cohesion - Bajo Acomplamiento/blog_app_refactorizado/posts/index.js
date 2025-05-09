const express = require('express');
const router = express.Router();
const posts = require('./store');
const { getReactionsByPostId } = require('../reactions/queries');

// Crear un post
router.post('/', (req, res) => {
  const post = {
    id: posts.length + 1,
    author: req.body.author,
    content: req.body.content
  };
  posts.push(post);
  res.json(post);
});

// Obtener todos los posts
router.get('/', (req, res) => {
  res.json(posts);
});

// Obtener un post con sus reacciones
router.get('/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(p => p.id === postId);
  if (!post) return res.status(404).json({ error: 'Post not found' });

  const postReactions = getReactionsByPostId(postId);
  res.json({ ...post, reactions: postReactions });
});

module.exports = router;