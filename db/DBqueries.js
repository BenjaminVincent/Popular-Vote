const db = require('./index');

const getQuestion = function () {
  return db.query(`
    SELECT question FROM polls ORDER BY id DESC LIMIT 1;
  `)
    .then(res => res.rows[0]);
};

const getChoices = function () {
  return db.query(`
    SELECT title FROM choices JOIN polls ON poll_id = polls.id
    WHERE poll_id = (SELECT id FROM polls ORDER BY id DESC LIMIT 1);
  `)
    .then(res => res.rows);
};

const getVoteURL = function () {
  return db.query(`
    SELECT vote_url FROM links JOIN polls ON poll_id = polls.id
    WHERE poll_id = (SELECT id FROM polls ORDER BY id DESC LIMIT 1);
  `)
    .then(res => res.rows[0]);
};

const getResultURL = function () {
  return db.query(`
    SELECT result_url FROM links JOIN polls ON poll_id = polls.id
    WHERE poll_id = (SELECT id FROM polls ORDER BY id DESC LIMIT 1);
  `)
    .then(res => res.rows[0]);
};

const getPollByVoteURL = function (voteURL) {
  return db.query(`
  SELECT question, title, description, vote_url FROM polls
  JOIN choices ON choices.poll_id = polls.id
  JOIN links ON links.poll_id = polls.id
  WHERE links.vote_url = $1;
  `, [voteURL])
    .then(res => res.rows);
}

module.exports = {
  getQuestion,
  getChoices,
  getVoteURL,
  getResultURL,
  getPollByVoteURL
}
