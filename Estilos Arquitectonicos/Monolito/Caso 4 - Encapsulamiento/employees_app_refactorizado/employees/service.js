const repository = require('./repository');

function add(name, level, salary) {
  const id = repository.nextId();
  const employee = { id, name, level, salary };
  repository.save(employee);
  return id;
}

function getProfile(id) {
  const e = repository.findById(id);
  if (!e) return null;
  return {
    id: e.id,
    name: e.name,
    level: e.level  // ⛔ ocultamos el salario
  };
}

module.exports = {
  add,
  getProfile
};