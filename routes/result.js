const express = require("express");
const router = express.Router();
const queries = require('../db/DBqueries')
const emailHelper = require('../email-helper');

module.exports = db => {
  router.get("/:result_url", (req, res) => {

    const link = req.params.result_url;
    let templateVars = {};
    let titles = [];
    let voteTotal = [];
    queries.getResultsByResultURL(link)
      .then(voteData => {
        for (const item of voteData) {
          titles.push(item.title);
          voteTotal.push(item.total_votes);
        }
        templateVars.choices = titles;
        templateVars.total_votes = voteTotal;

      })
      .then(() => res.render('result', templateVars))
      .catch(err => console.log('err1: ', err))
  });

  router.post("/", (req, res) => {
    let choiceObj = req.body;
    let vote_url = choiceObj.vote_url;
    delete choiceObj.vote_url;

    queries.getResultURLAndEmailFromVoteURL(vote_url)
      .then(data => {
        emailHelper(data);
      })
      .then(() => {
        for (const choice in choiceObj) {
          let tempChoice = choiceObj[choice];
          queries.getChoiceIdByChoiceAndVoteURL(tempChoice, vote_url)
            .then(choice_id => {
              return db.query(
                `
          INSERT INTO votes (choice_id, num_votes)
          VALUES ($1, $2);
          `,
                [choice_id, choice]
              )
            })
        }
      })
      .then(() => res.redirect('/'))
      .catch(err => console.log('err4: ', err))
  });
  return router;
}
