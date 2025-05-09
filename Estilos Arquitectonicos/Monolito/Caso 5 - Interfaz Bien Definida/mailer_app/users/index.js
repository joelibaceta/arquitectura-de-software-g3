const express = require('express');
const router = express.Router();
const repo = require('./repository');
const { send } = require('../mailer/send');  // ❌ dependencia directa

router.post('/', (req, res) => {
  const { name, email } = req.body;
  const user = {
    id: repo.nextId(),
    name,
    email
  };
  repo.save(user);

  // ❌ Users conoce la lógica de armado del mensaje
  const subject = `Bienvenido, ${name}`;
  const body = `Hola ${name}, gracias por registrarte.`;
  send(email, subject, body);

  res.json({ id: user.id });
});

module.exports = router;