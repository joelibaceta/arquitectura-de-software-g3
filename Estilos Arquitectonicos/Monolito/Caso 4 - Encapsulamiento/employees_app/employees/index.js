const express = require('express');
const router = express.Router();
const {
  employees,
  addEmployee,
  findEmployeeById
} = require('./store');

// Crear empleado (salario visible)
router.post('/', (req, res) => {
  const { name, level, salary } = req.body;
  const id = addEmployee(name, level, salary);
  res.json({ id });
});

// Obtener empleado completo (salario expuesto)
router.get('/:id', (req, res) => {
  const emp = findEmployeeById(parseInt(req.params.id));
  if (!emp) return res.status(404).json({ error: 'Not found' });
  res.json(emp); // ❌ devuelve salario directamente
});

module.exports = router;