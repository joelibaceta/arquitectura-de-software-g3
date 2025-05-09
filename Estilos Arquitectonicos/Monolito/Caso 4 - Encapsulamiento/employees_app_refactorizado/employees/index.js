const express = require('express');
const router = express.Router();
const {
  add,
  getProfile
} = require('./service');

// Crear empleado
router.post('/', (req, res) => {
  const { name, level, salary } = req.body;
  const id = add(name, level, salary);
  res.json({ id });
});

// Obtener perfil sin salario
router.get('/:id', (req, res) => {
  const profile = getProfile(req.params.id);
  if (!profile) return res.status(404).json({ error: 'Not found' });
  res.json(profile);
});

module.exports = router;