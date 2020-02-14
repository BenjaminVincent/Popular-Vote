const express = require("express");
const router = express.Router();
const mailgunDetails = require('../mailgunDetails')
const mailgun = require('mailgun-js')({ apiKey: mailgunDetails.API_KEY, domain: mailgunDetails.DOMAIN });

module.exports = db => {
  router.get("/", (req, res) => {
    res.render("create-poll");
  });

  router.post("/", (req, res) => {
    const question = req.body.question;
    const choices = req.body.choice;
    const descriptions = req.body.description;

    db.query(
      `
      INSERT INTO polls (question, email_id)
      VALUES ($1, (SELECT MAX(id) FROM emails));
      `,
      [question]
    )

    db.query(`
    INSERT INTO links (poll_id, vote_url, result_url)
    VALUES ((SELECT MAX(id) FROM polls), md5(random()::text), md5(random()::text));
    `)


    for (let i = 0; i < choices.length; i++) {
      db.query(`
      INSERT INTO choices (poll_id, title, description)
      VALUES ((SELECT MAX(id) FROM polls), $1, $2);
      `, [choices[i], descriptions[i]]
      )
    }

    db.query(`
    SELECT vote_url, result_url, email
    FROM links
    JOIN polls ON poll_id = polls.id
    JOIN emails ON emails.id = email_id
    WHERE poll_id = (SELECT id FROM polls ORDER BY id DESC LIMIT 1);
    `)
      .then((data) => {
        let result_url = data.rows[0].result_url;
        let vote_url = data.rows[0].vote_url;
        let email = data.rows[0].email;

        const emailData = {
          from: 'DEV TEAM <maxwrosenthal@gmail.com>',
          to: `NEW USER, ${email}`,
          subject: 'Poll Created',
          html: `<div>Thanks for creating a poll!</div><div>Click <a href="http://localhost:8080/vote/${vote_url}">here</a> to vote on your poll.</div><div>Follow <a href="http://localhost:8080/result/${result_url}">this</a> link to see the results.</div><div>Send this link to your friends so they can vote: localhost:8080/vote/${vote_url}</div>`
        };

        mailgun.messages().send(emailData, (error, body) => {
          console.log('poll post email data: ', emailData);
          if (error) {
            console.log('err:', error);
          }
          if (body) {
            console.log('body:', body);
          }
        });
        res.redirect("/vote/" + vote_url)
      });
  });
  return router;
};
