const { send } = require('./transport');

function sendWelcomeEmail(email, name) {
  const subject = `Bienvenido, ${name}`;
  const body = `Hola ${name}, gracias por registrarte.`;
  send(email, subject, body);
}

module.exports = {
  sendWelcomeEmail
};