const users = [];

function save(user) {
  users.push(user);
}

function nextId() {
  return users.length + 1;
}

module.exports = {
  save,
  nextId
};