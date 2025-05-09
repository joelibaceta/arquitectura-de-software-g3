function send(email, subject, body) {
  console.log("📤 Enviando email:");
  console.log("Para:", email);
  console.log("Asunto:", subject);
  console.log("Contenido:", body);
}

module.exports = { send };