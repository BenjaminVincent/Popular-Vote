const db = require('./index');

const getQuestion = function () {
  return db.query(`SELECT question FROM polls ORDER BY id DESC LIMIT 1;`)
    .then(res => res.rows[0])
};

const getChoices = function () {
  return db.query(`SELECT title FROM choices JOIN polls ON poll_id = polls.id
  WHERE poll_id = (SELECT id FROM polls ORDER BY id DESC LIMIT 1);`)
    .then(res => {
      // console.log('res: ', res.rows)
      return res.rows;
    })
}

// console.log('getQuestion: ', getQuestion());
exports.getQuestion = getQuestion;
exports.getChoices = getChoices;
