const express = require("express");
const router = express.Router();
const queries = require('../db/DBqueries')

module.exports = db => {
  router.get("/", (req, res) => {
    // console.log('req.choice1', req.choice1)

    let templateVars = {};

    queries.getQuestion()
      .then(questions => {
        // console.log('data: ', questions);

        templateVars.question = questions.question;

        queries.getChoices()
          .then(choice => {
            console.log('choice: ', choice)
            templateVars.choices = choice;
            // console.log('templateVars: ', templateVars)
          })
          .then(() => res.render('vote', templateVars));
      });
  });
  return router;
};
