const express = require("express");
const router = express.Router();
const queries = require('../db/DBqueries')

module.exports = db => {

  router.get("/:vote_url", (req, res) => {
    const link = req.params.vote_url;
    let templateVars = {};
    let titles = [];
    let descriptions = [];

    queries.getPollByVoteURL(link)
      .then(pollData => {
        for (const item of pollData) {
          // console.log('item:', item)
          if (!templateVars.voteURL) {
            templateVars.voteURL = item.vote_url;
          }
          if (!templateVars.question) {
            templateVars.question = item.question;
          }
          titles.push(item.title);
          descriptions.push(item.description)
        }

        templateVars.choices = titles;
        templateVars.descriptions = descriptions;
        // console.log('templateVars: ', templateVars)
      })
      .then(() => res.render('vote', templateVars));
  })
  return router;
};
