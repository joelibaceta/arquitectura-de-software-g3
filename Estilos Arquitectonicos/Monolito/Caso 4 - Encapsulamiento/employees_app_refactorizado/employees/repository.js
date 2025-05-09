// Simula almacenamiento en memoria
const employees = [];

function save(employee) {
  employees.push(employee);
}

function findById(id) {
  return employees.find(e => e.id === parseInt(id));
}

function nextId() {
  return employees.length + 1;
}

module.exports = {
  save,
  findById,
  nextId
};