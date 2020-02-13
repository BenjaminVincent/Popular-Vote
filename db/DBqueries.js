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
    .then(res => {
      return res.rows;
    })
}

const getResultsByResultURL = function (resultURL) {
  return db.query(`
  SELECT SUM(votes.num_votes) AS total_votes, choices.title FROM votes
  JOIN choices ON choice_id = choices.id
  JOIN polls ON choices.poll_id = polls.id
  JOIN links ON links.poll_id = polls.id
  WHERE links.result_url = $1
  GROUP BY choices.title
  ORDER BY total_votes DESC;
  `, [resultURL])
    .then(res => {
      return res.rows;
    })
}
const getChoiceIdByChoiceAndVoteURL = function (choice, vote_url) {
  return db.query(`
  SELECT choices.id
  FROM choices
  JOIN polls ON polls.id = choices.poll_id
  JOIN links ON links.poll_id = polls.id
  WHERE title = $1 AND links.vote_url = $2;
  `, [choice, vote_url])
    .then(res => res.rows[0].id)
}

const getResultURLAndEmailFromVoteURL = function (vote_url) {
  return db.query(`
  SELECT result_url, email
  FROM emails
  JOIN polls ON polls.email_id = emails.id
  JOIN links on links.poll_id = polls.id
  WHERE links.vote_url = $1
  `, [vote_url])
    .then(res => res.rows[0])
}

module.exports = {
  getQuestion,
  getChoices,
  getVoteURL,
  getResultURL,
  getPollByVoteURL,
  getResultsByResultURL,
  getChoiceIdByChoiceAndVoteURL,
  getResultURLAndEmailFromVoteURL
}
