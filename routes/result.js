const express = require("express");
const router = express.Router();
const queries = require('../db/DBqueries')
const mailgunDetails = require('../public/scripts/mailgun')
const mailgun = require('mailgun-js')({ apiKey: mailgunDetails.API_KEY, domain: mailgunDetails.DOMAIN });


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
      .catch(err => console.log(err))
  });

  router.post("/", (req, res) => {
    let choiceObj = req.body;
    let vote_url = choiceObj.vote_url;
    delete choiceObj.vote_url;

    // queries.getResultURLAndEmailFromVoteURL(vote_url)
    //   .then(data => {

    //     let adminEmail = data.email;
    //     let resultURL = data.result_url;
    //     console.log('adminEmail: ', adminEmail);
    //     console.log('resultURL: ', resultURL);
    //     const emailData = {
    //       from: 'DEV TEAM <maxwrosenthal@gmail.com>',
    //       to: `NEW USER, ${adminEmail}`,
    //       subject: 'Someone Voted!',
    //       html: `<div>Someone voted!</div><div>Click <a href="http://localhost:8080/result/${resultURL}">here</a> to see the updated results.</div>`
    //     };

    //     mailgun.messages().send(emailData, (error, body) => {
    //       //mailgun isn't working...
    //       console.log('err', error);
    //       console.log('test', body);
    //     });

    // console.log('choiceObj: ', choiceObj)
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
        .then(() => res.redirect('/'))
        .catch(err => console.log('err: ', err));
    }
  });
  return router;

}
