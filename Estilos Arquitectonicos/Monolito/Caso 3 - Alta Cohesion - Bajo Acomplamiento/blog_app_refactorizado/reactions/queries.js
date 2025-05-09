// reactions/queries.js
const reactions = require('./store');

function getReactionsByPostId(postId) {
  return reactions.filter(r => r.postId === postId);
}

module.exports = { getReactionsByPostId };