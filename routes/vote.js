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

  router.get("/:vote_url", (req, res) => {
    const link = req.params.vote_url;
    let templateVars = {};
    let titles = [];
    queries.getPollByVoteURL(link)
      .then(pollData => {
        for (const item of pollData) {
          if (!templateVars.voteURL) {
            templateVars.voteURL = item.vote_url;
          }
          if (!templateVars.question) {
            templateVars.question = item.question;
          }
          titles.push(item.title);
        }
        templateVars.choices = titles;
      })
      .then(() => res.render('voteFromLink', templateVars));
  })
  return router;
};
