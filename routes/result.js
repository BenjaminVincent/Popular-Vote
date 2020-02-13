const express = require("express");
const router = express.Router();
const queries = require('../db/DBqueries')
// const mailgunDetails = require('../public/scripts/mailgun')
// const mailgun = require('mailgun-js')({ apiKey: mailgunDetails.API_KEY, domain: mailgunDetails.DOMAIN });


module.exports = db => {
  router.get("/:result_url", (req, res) => {

    const link = req.params.result_url;
    // console.log(link)
    let templateVars = {};
    let titles = [];
    let voteTotal = [];
    queries.getResultsByResultURL(link)
      .then(voteData => {
        // console.log('voteData: ', voteData);
        // voteData.forEach(el => console.log(el))
        for (const item of voteData) {
          titles.push(item.title);
          voteTotal.push(item.total_votes);
        }
        templateVars.choices = titles;
        templateVars.total_votes = voteTotal;
        console.log('template: ', templateVars);

      })
      .then(() => res.render('result', templateVars))
      .catch(err => console.log(err))
    // res.render('result');
  });

  router.post("/", (req, res) => {
    let choiceObj = req.body;
    // console.log(choiceObj);
    let vote_url = choiceObj.vote_url;
    delete choiceObj.vote_url;


    for (const choice in choiceObj) {
      let tempChoice = choiceObj[choice];
      // console.log("tempChoice: ", tempChoice);
      queries.getChoiceIdByChoiceAndVoteURL(tempChoice, vote_url)
        .then(choice_id => {
          // console.log('choice_id in .then: ', choice_id)
          return db.query(
            `
          INSERT INTO votes (choice_id, num_votes)
          VALUES ($1, $2);
          `,
            [choice_id, choice]
          )
        })
        .then(() => res.redirect('/'))
        .catch(err => console.log(err));
    }
    // console.log('req.params: ', req.params)


  })


  // router.get("/ok", (req, res) => {
  //   res.send("ok");
  // });

  // router.post("/ok", (req, res) => {
  //   res.send("ok");
  // });
  return router;
};
