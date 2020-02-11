


const getQuestion = () => {
  return db
  .query(`SELECT question FROM polls ORDER BY id DESC LIMIT 1`)
  .catch(error => {
    return null
  });
}

exports.getQuestion = getQuestion;
