const express = require('express');
const router = express.Router();
const reactions = require('./store');
const posts = require('../posts/store');

// Crear una reacción
router.post('/', (req, res) => {
  const { postId, type } = req.body;

  const postExists = posts.some(p => p.id === parseInt(postId));
  if (!postExists) return res.status(404).json({ error: 'Post not found' });

  const reaction = {
    id: reactions.length + 1,
    postId: parseInt(postId),
    type
  };
  reactions.push(reaction);
  res.json(reaction);
});

module.exports = router;