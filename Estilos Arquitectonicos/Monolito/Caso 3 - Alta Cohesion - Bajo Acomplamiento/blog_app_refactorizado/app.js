const express = require('express');
const app = express();
app.use(express.json());

const postRoutes = require('./posts');
const reactionRoutes = require('./reactions');

app.use('/posts', postRoutes);
app.use('/reactions', reactionRoutes);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});