// ⚠️ Exposición pública de datos y lógica
const employees = [];

function addEmployee(name, level, salary) {
  const id = employees.length + 1;
  employees.push({ id, name, level, salary });
  return id;
}

function findEmployeeById(id) {
  return employees.find(emp => emp.id === id);
}

module.exports = {
  employees,             // ❌ acceso directo al array completo
  addEmployee,
  findEmployeeById
};