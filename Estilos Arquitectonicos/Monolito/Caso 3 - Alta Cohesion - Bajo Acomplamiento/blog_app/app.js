const express = require('express');
const app = express();
app.use(express.json());

// Datos en memoria (sin estructura ni encapsulamiento)
let posts = [];
let reactions = [];

app.post('/posts', (req, res) => {
    const post = {
        id: posts.length + 1,
        author: req.body.author,
        content: req.body.content
    };
    posts.push(post);
    res.json(post);
});

app.post('/reactions', (req, res) => {
    const postId = parseInt(req.body.postId);
    const type = req.body.type;

    // Verificar si el post existe (lógica mezclada)
    const post = posts.find(p => p.id === postId);
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    const reaction = {
        id: reactions.length + 1,
        postId,
        type
    };
    reactions.push(reaction);
    res.json(reaction);
});

app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    const postReactions = reactions.filter(r => r.postId === postId);

    res.json({
        ...post,
        reactions: postReactions
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});