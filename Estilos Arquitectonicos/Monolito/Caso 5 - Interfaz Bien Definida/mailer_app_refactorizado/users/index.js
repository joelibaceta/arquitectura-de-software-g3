const express = require('express');
const router = express.Router();
const repo = require('./repository');
const mailer = require('../mailer');  // ✅ interfaz pública

router.post('/', (req, res) => {
  const { name, email } = req.body;
  const user = {
    id: repo.nextId(),
    name,
    email
  };
  repo.save(user);

  // ✅ solo conoce la interfaz pública
  mailer.sendWelcomeEmail(user.email, user.name);

  res.json({ id: user.id });
});

module.exports = router;