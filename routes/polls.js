const express = require("express");
const router = express.Router();

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
    SELECT vote_url, result_url FROM links JOIN polls ON poll_id = polls.id
    WHERE poll_id = (SELECT id FROM polls ORDER BY id DESC LIMIT 1);
    `)
      .then((data) => {
        let result_url = data.rows[0].result_url;
        let vote_url = data.rows[0].vote_url
        console.log('result_url: ', result_url)
        console.log('vote_url: ', vote_url)

        //send email to admin based on emial associated with poll which includes result_url.

        res.redirect("/vote/" + vote_url)
      });
  });
  return router;
};
