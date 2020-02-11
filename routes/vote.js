const express = require("express");
const router = express.Router();
const queries = require('../db/DBqueries')

module.exports = db => {
  router.get("/", (req, res) => {
    // console.log('req.choice1', req.choice1)

    queries.getQuestion()
      .then(data => {
        console.log('data: ', data);
        let templateVars = {
          question: data.question
        }
        // console.log('templateVars: ', templateVars);
        // console.log('templateVars.question: ', templateVars.quetion);
        res.render('vote', templateVars)
      });
  });
  return router;
};
