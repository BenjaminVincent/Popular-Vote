const express = require("express");
const router = express.Router();
const queries = require('../db/DBqueries')

module.exports = db => {
  router.get("/", (req, res) => {
    let templateVars = {};

    queries.getQuestion()
    .then(questions => {
        templateVars.question = questions.question;
        queries.getChoices()
        .then(choice => {
          templateVars.choices = choice;
          queries.getVoteURL()
          .then(voteURL => {
            templateVars.voteURL = voteURL.vote_url;
          })
          .then(() => res.render('vote', templateVars));
          })

      })
      .catch(err => {
        throw err;
      })

  });

  return router;
};
