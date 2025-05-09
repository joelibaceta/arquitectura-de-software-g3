const express = require('express');
const app = express();
app.use(express.json());

const userRoutes = require('./users');
app.use('/users', userRoutes);

app.listen(3000, () => console.log('App AFTER running on port 3000'));